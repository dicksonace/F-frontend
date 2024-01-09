/// <reference types="lodash" />
import React, { RefObject } from 'react';
export declare const useZoomPage: (frameRef: RefObject<HTMLDivElement | null>, pageListRef: RefObject<HTMLDivElement[]>, pageContainerRef: RefObject<HTMLDivElement | null>) => {
    pageTransform: {
        x: number;
        y: number;
        scale: number;
    };
    onZoomStart: (e: React.TouchEvent) => void;
    onZoomMove: import("lodash").DebouncedFunc<(e: React.TouchEvent) => void>;
    onZoomEnd: (e: React.TouchEvent) => void;
    onMoveStart: (e: TouchEvent) => void;
    onMove: (e: React.TouchEvent) => void;
    onMoveEnd: () => void;
    onMovePage: (e: React.TouchEvent) => void;
    onMovePageEnd: () => void;
};
