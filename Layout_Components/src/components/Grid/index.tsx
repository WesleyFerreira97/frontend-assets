import { ReactNode } from "react";
import { GridWrap } from "./styles";
import { GridItem } from "./GridItem";

type Breakpoints = "xs" | "sm" | "md" | "lg" | "xl";
type GridSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type BreakpointProps = {
	[Key in Breakpoints]: GridSizes;
}

type ColumnsProps = {
	columns: Partial<BreakpointProps>;
}

interface GridProps extends Partial<ColumnsProps> {
	children?: ReactNode | ReactNode[];
}

function Grid({ children, ...props }: GridProps) {
	console.log(props.columns);

	return (
		<GridWrap breakpoints={props.columns}>
			{children}
		</GridWrap>
	);
}

Grid.Item = GridItem;

export { Grid };