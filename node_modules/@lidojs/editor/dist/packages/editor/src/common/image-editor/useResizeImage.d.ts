import { CornerDirection } from '../../types';
import { BoxData, CursorPosition } from '@lidojs/core';
export declare const useResizeImage: ({ getData, onResizeStart, onResize, onResizeEnd, lockAspect, }: {
    getData: () => BoxData;
    onResizeStart: (e: MouseEvent | TouchEvent, direction: CornerDirection) => void;
    onResize: (data: BoxData, direction: CornerDirection, oldPos: CursorPosition, newPos: CursorPosition) => void;
    onResizeEnd?: ((data: BoxData) => void) | undefined;
    lockAspect?: boolean | undefined;
}) => {
    startResize: (e: MouseEvent | TouchEvent, direction: CornerDirection) => void;
};
