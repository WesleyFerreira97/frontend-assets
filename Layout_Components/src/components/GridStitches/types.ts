import { ReactNode } from "react"
import { spacing } from "../../stitches.config";

type SpacingProps = keyof typeof spacing;

type GridProps = {
    children?: ReactNode | ReactNode[];
    gap?: SpacingProps;
}

export type {
    GridProps,
    SpacingProps
}