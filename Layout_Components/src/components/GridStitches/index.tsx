import { css } from '@stitches/react';
import React from 'react'
import { GridItem } from './GridItem';
import { GridWrap } from './styles';
import { GridProps } from './types';


function Grid({ children, ...props }: GridProps) {
    return (
        <GridWrap
            css={{
                gapXY: props.gap || 2,
                columns: props.columns || 4,

            }}
        >
            {children}
        </GridWrap>
    )
}

Grid.Item = GridItem;

export { Grid }















 // '@xs': {
                //     gapXY: props.gap?.xs,
                //     columns: props.columns.xs,

                // },
                // '@sm': {
                //     gapXY: props.gap?.sm,
                //     columns: props.columns.sm,
                // },
                // '@md': {
                //     gapXY: props.gap?.md,
                //     columns: props.columns.md,
                // },
                // '@lg': {
                //     gapXY: props.gap?.lg,
                //     columns: props.columns.lg,
                // },
                // '@xl': {
                //     gapXY: props.gap?.xl,
                //     columns: props.columns.xl,
                // }