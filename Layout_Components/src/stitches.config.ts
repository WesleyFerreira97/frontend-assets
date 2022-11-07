import { createStitches } from '@stitches/react';
import { SpacingProps } from './components/GridStitches/types';



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
    utils: {
        gapXY: (value: SpacingProps) => ({
            gap: spacing[value],
        })
    }
});