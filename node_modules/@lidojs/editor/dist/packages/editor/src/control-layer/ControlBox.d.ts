import React from 'react';
import { BoxSize, Delta } from '@lidojs/core';
import { ResizeCallback } from '@lidojs/editor';
interface ResizeBoxProps {
    boxSize: BoxSize;
    position: Delta;
    scale?: number;
    rotate: number;
    disabled: {
        vertical: boolean;
        horizontal: boolean;
        corners: boolean;
        rotate: boolean;
        scalable: boolean;
    };
    locked: boolean;
    onResizeStart?: ResizeCallback;
    onRouteStart: (e: TouchEvent | MouseEvent) => void;
}
declare const _default: React.ForwardRefExoticComponent<ResizeBoxProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
export default _default;
