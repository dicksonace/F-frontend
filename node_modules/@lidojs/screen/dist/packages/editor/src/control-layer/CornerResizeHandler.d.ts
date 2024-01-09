import { FC } from 'react';
import { CornerDirection, Direction } from '../types';
export declare const HANDLER_CORNER_SIZE = 16;
interface CornerResizeHandlerProps {
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
    isActive: boolean;
    direction: CornerDirection;
    rotate: number;
    onResizeStart: (e: TouchEvent | MouseEvent, direction: Direction) => void;
}
declare const CornerResizeHandler: FC<CornerResizeHandlerProps>;
export default CornerResizeHandler;
