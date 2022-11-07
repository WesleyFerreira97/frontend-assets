import { ReactNode } from "react";
import { GridWrap } from "./styles";
import { GridItem } from "./GridItem";
import { ColumnsProps, GridProps } from "./types";

function Grid({ children, columns }: Partial<GridProps>) {
	const columnsWithDefaut = columns ? columns : {};

	return (
		<GridWrap columns={columnsWithDefaut}>
			{children}
		</GridWrap>
	);
}

Grid.Item = GridItem;

export { Grid };

