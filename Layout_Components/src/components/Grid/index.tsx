import { ReactNode } from "react";
import { GridWrap } from "./styles";
import { GridItem } from "./GridItem";
import { ColumnsProps, GridProps } from "./types";

function Grid({ children, columns }: GridProps) {
	const ex1 = columns ? columns : '';
	return (
		<GridWrap columns={{ xs: 2, sm: 3 }}>
			{children}
		</GridWrap>
	);
}

Grid.Item = GridItem;

export { Grid };