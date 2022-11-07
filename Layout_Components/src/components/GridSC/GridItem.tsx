import React, { PropsWithChildren } from 'react'
import styled from 'styled-components';

type GridItemProps = {

}

const GridItemWrap = styled.div`
    
`;

const GridItem = ({ children }: PropsWithChildren<GridItemProps>) => {
    return (
        <GridItemWrap>
            {children}
        </GridItemWrap>
    )
}

export { GridItem };