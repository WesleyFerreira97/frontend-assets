import { PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";
import { GridItem } from "./GridItem";

type GridProps = {
	children: ReactNode | ReactNode[] | undefined;
}

const GridWrap = styled.div`
	
`;

function Grid({ children }: GridProps) {
	return (
		<GridWrap>
			{children}
		</GridWrap>
	);
}

Grid.Item = GridItem;

export { Grid };
