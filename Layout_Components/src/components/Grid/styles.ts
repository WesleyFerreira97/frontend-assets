import styled from "styled-components";
import { gridColSize } from "./GridUtils";
console.log(gridColSize[2]);

export const GridWrap = styled.div<any>`
    color: ${({ breakpoints }) => breakpoints.xs};
    
    @media (maxWidth: 650px) {
        * > {
        ${({ breakpoints }) => breakpoints.xs};
            max-width: ${gridColSize[2]};
        }
    }
`;

