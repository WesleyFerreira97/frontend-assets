import styled from "styled-components";
import { gridColSize } from "./GridUtils";
import { BreakpointProps, ColumnsProps, ColumnsRange } from "./types";

function getColSize(colSize?: ColumnsRange) {
    if (!colSize) return null;

    return gridColSize[colSize];
}

export const GridWrap = styled.div.attrs(({ columns }: ColumnsProps) => ({
    columns: {
        xs: getColSize(columns.xs) || 0,
        sm: getColSize(columns.sm) || 0,
        md: getColSize(columns.md) || 0,
        lg: getColSize(columns.lg) || 0,
        xl: getColSize(columns.xl) || 0,
    }
}))`
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;

    > * {
        max-width: ${({ columns }) => columns?.xs};
        flex-basis: ${({ columns }) => columns?.xs};
    }

    @media (maxWidth: 650px) {
        * > {
        }
    }
`;