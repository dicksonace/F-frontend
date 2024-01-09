import React from 'react';
import { BoxSize, Delta } from '@lidojs/core';
interface LayerBorderBoxProps {
    boxSize: BoxSize;
    position?: Delta;
    rotate: number;
    type?: 'dashed' | 'solid';
}
declare const _default: React.ForwardRefExoticComponent<LayerBorderBoxProps & React.RefAttributes<HTMLDivElement>>;
export default _default;
