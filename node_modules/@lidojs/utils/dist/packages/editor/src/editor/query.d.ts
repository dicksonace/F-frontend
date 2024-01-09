import { EditorState } from '../types/editor';
import { LayerComponentProps, LayerId } from '@lidojs/core';
import { Layer } from '@lidojs/editor';
export declare const QueryMethods: (state: EditorState) => {
    serialize(): import("@lidojs/core").SerializedPage[];
    getLayers(pageIndex: number): import("@lidojs/editor").Layers;
    getLayer<P extends LayerComponentProps>(pageIndex: number, layerId: LayerId): Layer<P> | undefined;
};
