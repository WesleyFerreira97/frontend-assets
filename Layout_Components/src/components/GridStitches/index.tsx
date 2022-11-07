import React from 'react'
import { GridItem } from './GridItem';
import { GridWrap } from './styles';
import { GridProps } from './types';

function Grid({ children, ...props }: GridProps) {
    return (
        <GridWrap
            css={{
                gapXY: props.gap
            }}
        >
            {children}
        </GridWrap>
    )
}

Grid.Item = GridItem;

export { Grid }