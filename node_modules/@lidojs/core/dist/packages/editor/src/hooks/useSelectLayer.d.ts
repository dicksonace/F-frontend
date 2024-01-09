import { RefObject } from 'react';
import { BoxData, LayerId } from '@lidojs/core';
export declare const useSelectLayer: ({ frameRef, pageListRef, selectionBoxRef, }: {
    frameRef: RefObject<HTMLDivElement | null>;
    pageListRef: RefObject<HTMLDivElement[]>;
    selectionBoxRef: RefObject<HTMLDivElement | null>;
}) => {
    tmpSelected: {
        selectedPage: number;
        selectedLayers: Record<LayerId, BoxData>;
    } | undefined;
    onSelectStart: (e: MouseEvent) => void;
};
