import styled from "styled-components";
import { gridColSize } from "./GridUtils";
import { BreakpointProps, ColumnsProps } from "./types";

function getColSize(colSize: number | undefined) {
    return colSize;
}

export const GridWrap = styled.div.attrs(({ columns }: ColumnsProps) => ({
    columns: {
        xs: getColSize(columns.xs) || 0,
        sm: columns.sm,
        md: getColSize(columns.md),
    }
}))`
    
    width: ${({ columns }) => columns?.xs};

    @media (maxWidth: 650px) {
        * > {
        }
    }
`;
