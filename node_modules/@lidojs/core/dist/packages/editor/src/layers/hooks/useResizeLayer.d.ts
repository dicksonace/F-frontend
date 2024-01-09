import { Direction, LayerDataRef } from '../../types';
import { BoxData, LayerId } from '@lidojs/core';
export type ResizeCallbackData = {
    controlBox: BoxData;
    layers: Record<LayerId, BoxData>;
    direction: Direction;
    lockAspect: boolean;
};
export declare const useResizeLayer: ({ options: { scalable }, getLayerData, setLayerData, controlBox, getControlBoxData, setControlBoxData, onResize, onResizeStop, }: {
    options: {
        scalable: boolean;
    };
    getLayerData: () => LayerDataRef;
    setLayerData: (data: LayerDataRef) => void;
    controlBox: BoxData | undefined;
    getControlBoxData: () => BoxData | undefined;
    setControlBoxData: (data: BoxData) => void;
    onResize: (data: ResizeCallbackData) => void;
    onResizeStop: (data: ResizeCallbackData) => void;
}) => {
    startResizing: (e: MouseEvent | TouchEvent, direction: Direction) => void;
};
