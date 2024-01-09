import { BoxData, Delta, LayerId } from '@lidojs/core';
import { LayerDataRef } from '@lidojs/editor';
export type RotateCallbackData = {
    controlBox?: BoxData;
    layers: Record<LayerId, BoxData>;
};
export declare const useRotateLayer: ({ pageIndex, getLayerData, setLayerData, pageOffset, getControlBoxData, setControlBoxData, onRotate, }: {
    pageIndex: number;
    getLayerData: () => LayerDataRef;
    setLayerData: (data: LayerDataRef) => void;
    pageOffset: Delta;
    getControlBoxData: () => BoxData | undefined;
    setControlBoxData: (data: BoxData) => void;
    onRotate: (data: RotateCallbackData) => void;
    onRotateEnd: (data: RotateCallbackData) => void;
}) => {
    startRotate: (e: TouchEvent | MouseEvent) => void;
};
