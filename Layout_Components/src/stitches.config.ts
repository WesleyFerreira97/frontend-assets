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

export const { styled, getCssText, config } = createStitches({
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
        breakpoints: (value: any) => {
            const { breakpointValues, cssProps } = value;
            const finalStyle: any = {};

            // Create object with stitcher breakpoint pattern
            Object.keys(breakpointValues).forEach((item) => {
                const currentValue = breakpointValues[item];
                const ex1 = spacing[currentValue as GapValues];

                return finalStyle[`@${item}`] =
                    { setValuesProps: { cssProps, ex1 } };
            })

            return finalStyle;
        },
        setValuesProps: (values: any) => {
            const finalStyle = {};

            Object.keys(values.values).forEach(item => {
                return
            })

            return finalStyle;
        },
        gapXY: (value: GapValues) => {
            // When input number
            if (typeof value === 'number') {
                return { gap: value }
            }

            // When input object with Breakpoints
            return {
                breakpoints: { value, cssProps: ['gap'] }
            }
        },
        columns: (value: ColumnsRange) => ({
            display: 'grid',
            gridTemplateColumns: `repeat(${value}, 1fr)`
        })
    }
});


// 1 - Checar tipagens
// 2 - Util breakpointns ter uma implementação generica para outros usos
// 3 - Implementar utils setValuesProps