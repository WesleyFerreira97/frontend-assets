import { css } from "styled-components";
import { ColumnsRange } from "./types";

const spacing = {
    1: '8px',
    2: '12px',
    3: '16px',
    4: '24px',
    5: '32px',
    6: '48px',
}

const gridColSize = {
    1: '8.33333333%',
    2: '16.66666667%',
    3: '25%',
    4: '33.33333333%',
    5: '41.66666667%',
    6: '50%',
    7: '58.33333333%',
    8: '66.66666667%',
    9: '75%',
    10: '83.33333333%',
    11: '91.66666667%',
    12: '100%',
}

function getColSize(colSize?: ColumnsRange) {
    if (!colSize) return null;

    return gridColSize[colSize];
}

const defineColumnCss = (columnSize: string | number) => {
    if (!columnSize) return null;

    return css`
        max-width: ${columnSize}; 
        flex-basis: ${columnSize};
    `
};

function getGapSize(colSize?: ColumnsRange) {
    if (!colSize) return null;

    return gridColSize[colSize];
}


export {
    spacing,
    getGapSize,
    gridColSize,
    getColSize,
    defineColumnCss
}