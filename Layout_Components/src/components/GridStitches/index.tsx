import React from 'react'
import { GridItem } from './GridItem';
import { GridWrap } from './styles';
import { GridProps } from './types';

function Grid({ children }: GridProps) {
    return (
        <GridWrap>
            {children}
        </GridWrap>
    )
}

GridItem.Item = GridItem;

export { Grid }