import { ReactNode } from "react";

type Breakpoints = "xs" | "sm" | "md" | "lg" | "xl";
type ColumnsRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type BreakpointProps = {
    [Key in Breakpoints]: ColumnsRange;
}

// Optional
// export type BreakpointsRecord = Record<Breakpoints, ColumnsRange>;

export interface ColumnsProps {
    columns: Partial<BreakpointProps>;
}

export interface GridProps extends Partial<ColumnsProps> {
    children?: ReactNode | ReactNode[];
}