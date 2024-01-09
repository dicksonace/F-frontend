import { RefObject } from 'react';
import { Delta, LayerId } from '@lidojs/core';
export type DragCallbackData = {
    controlBox?: Delta;
    layers: Record<LayerId, Delta>;
};
export declare const useDragLayer: ({ frameRef, pageListRef, }: {
    frameRef: RefObject<HTMLDivElement>;
    pageListRef: RefObject<HTMLDivElement[]>;
}) => {
    onDragStart: (e: TouchEvent | MouseEvent) => void;
};
