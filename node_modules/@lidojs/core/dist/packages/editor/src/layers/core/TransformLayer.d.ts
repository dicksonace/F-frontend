import React from 'react';
import { BoxSize, Delta } from '@lidojs/core';
interface TransformLayerProps {
    boxSize: BoxSize;
    rotate: number;
    position: Delta;
    transparency?: number;
}
declare const _default: React.ForwardRefExoticComponent<TransformLayerProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
export default _default;
