import styled, { css } from "styled-components";
import { gridColSize, getColSize, defineColumnCss, getGapSize } from "./GridUtils";
import { BreakpointProps, ColumnsProps, ColumnsRange } from "./types";


export const GridWrap = styled.div.attrs(({ columns }: ColumnsProps) => ({
    columns: {
        xs: getColSize(columns.xs),
        sm: getColSize(columns.sm),
        md: getColSize(columns.md),
        lg: getColSize(columns.lg),
        xl: getColSize(columns.xl),
    },
    gap: {
        // xs: getGapSize(gap.xs),
    }
}))`
    
    display: flex;
    flex-wrap: wrap;
    row-gap: 1rem;
    width: 100%;
    background-color: #1F1D36;

    > * {
        ${({ columns }) => columns?.xs && defineColumnCss(columns?.xs)};
    }

    @media (min-width: 650px) {
        > * {
            ${({ columns }) => columns?.sm && defineColumnCss(columns?.sm)};
        }
    }

    @media (min-width: 960px) {
        > * {
            ${({ columns }) => columns?.sm && defineColumnCss(columns?.sm)};
        }
    }

    @media (min-width: 1280px) {
        > * {
            ${({ columns }) => columns?.lg && defineColumnCss(columns?.lg)};
        }
    }

    @media (min-width: 1400px) {
        > * {
            ${({ columns }) => columns?.xl && defineColumnCss(columns?.xl)};
        }
    }
`;