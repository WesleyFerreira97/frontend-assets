import { PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";
import { GridItem } from "./GridItem";

type GridProps = {
	children: ReactNode | ReactNode[] | undefined;
}

const GridWrap = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	/* flex-direction: column; */

	> * {
		flex-basis: 33.33%;
		max-width: 33.33%;
	}
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
