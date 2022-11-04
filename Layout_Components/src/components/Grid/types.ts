import { ReactNode } from "react";

type Breakpoints = "xs" | "sm" | "md" | "lg" | "xl";
type ColumnsRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type GapRangeProps = 1 | 2 | 3 | 4 | 5 | 6;

type BreakpointProps = {
    [Key in Breakpoints]: ColumnsRange;
}

// Optional
// export type BreakpointsRecord = Record<Breakpoints, ColumnsRange>;

interface ColumnsProps {
    columns: Partial<BreakpointProps>;
}

interface GridProps extends Partial<ColumnsProps> {
    children?: ReactNode | ReactNode[];
}

export type {
    Breakpoints,
    BreakpointProps,
    GapRangeProps,
    ColumnsProps,
    ColumnsRange,
    GridProps
}