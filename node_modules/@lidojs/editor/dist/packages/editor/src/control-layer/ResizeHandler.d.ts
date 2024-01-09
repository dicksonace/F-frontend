import { FC } from 'react';
import { BoxSize } from '@lidojs/core';
import { Direction, EdgeDirection } from '@lidojs/editor';
export declare const HANDLER_SIZE = 16;
interface ResizeHandlerProps {
    top?: number;
    left?: number;
    right?: number;
    boxSize: BoxSize;
    width?: number | string;
    height?: number | string;
    isActive: boolean;
    bottom?: number;
    rotate: number;
    direction: EdgeDirection;
    onResizeStart: (e: TouchEvent | MouseEvent, direction: Direction) => void;
}
declare const ResizeHandler: FC<ResizeHandlerProps>;
export default ResizeHandler;
