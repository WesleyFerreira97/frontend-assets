import { createStitches } from '@stitches/react';
import { ColumnsRange } from './components/GridSC/types';
import { GapValues } from './components/GridStitches/types';

export const spacing = {
    1: '8px',
    2: '12px',
    3: '16px',
    4: '24px',
    5: '32px',
    6: '48px',
}

export const { styled, getCssText, } = createStitches({
    theme: {
        fonts: {
            system: 'system-ui',
        },
        colors: {
            hiContrast: 'hsl(206,10%,5%)',
            loContrast: 'white',
        },
        fontSizes: {
            1: '13px',
            2: '15px',
            3: '17px',
        },
        spacing,
    },
    media: {
        xs: '(max-width: 650px)',
        sm: '(min-width: 650px)',
        md: '(min-width: 960px)',
        lg: '(min-width: 1280px)',
        xl: '(min-width: 1400px)',
    },
    utils: {
        gapXY: (value: GapValues) => ({
            gap: spacing[value],
        }),
        columns: (value: ColumnsRange) => ({
            display: 'grid',
            gridTemplateColumns: `repeat(${value}, 1fr)`
        })
    }
});