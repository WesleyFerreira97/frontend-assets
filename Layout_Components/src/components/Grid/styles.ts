import styled, { css } from "styled-components";
import { gridColSize, getColSize, defineColumnCss } from "./GridUtils";
import { BreakpointProps, ColumnsProps, ColumnsRange } from "./types";


export const GridWrap = styled.div.attrs(({ columns }: ColumnsProps) => ({
    columns: {
        xs: getColSize(columns.xs),
        sm: getColSize(columns.sm),
        md: getColSize(columns.md),
        lg: getColSize(columns.lg),
        xl: getColSize(columns.xl),
    }
}))`
    
    display: flex;
    flex-wrap: wrap;

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