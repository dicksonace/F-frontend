import { LayerComponentProps } from '@lidojs/core';
import { Layer, LayerActions } from '../types';
export declare const useLayer: <P extends LayerComponentProps, C>(collector?: ((layer: Layer<P>) => C) | undefined) => Omit<C & {
    actions: import("../types").EditorActions;
    query: import("../types").EditorQuery;
    state: import("../types").EditorState;
}, "state" | "actions"> & {
    pageIndex: number;
    id: string;
    state: import("../types").EditorState;
    actions: LayerActions;
};
