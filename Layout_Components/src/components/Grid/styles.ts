import styled from "styled-components";
import { gridColSize } from "./GridUtils";
import { BreakpointProps, ColumnsProps, ColumnsRange } from "./types";

function getColSize(colSize?: ColumnsRange) {
    if (!colSize) return null;

    return gridColSize[colSize];
}

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
    /* flex-direction: column; */
    flex-wrap: wrap;

    > * {
        max-width: ${({ columns }) => columns?.xs};
        flex-basis: ${({ columns }) => columns?.xs};
    }

    @media (min-width: 650px) {
        > * {
            max-width: ${({ columns }) => columns?.sm};
            flex-basis: ${({ columns }) => columns?.sm};
        }
    }

    @media (min-width: 960px) {
        > * {
            max-width: ${({ columns }) => columns?.md};
            flex-basis: ${({ columns }) => columns?.md};
        }
    }

    @media (min-width: 1280px) {
        > * {
            max-width: ${({ columns }) => columns?.lg};
            flex-basis: ${({ columns }) => columns?.lg};
        }
    }

    @media (min-width: 1400px) {
        > * {
            max-width: ${({ columns }) => columns?.xl};
            flex-basis: ${({ columns }) => columns?.xl};
        }
    }
`;