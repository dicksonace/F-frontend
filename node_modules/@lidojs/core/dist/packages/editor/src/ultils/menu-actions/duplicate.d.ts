import { EditorActions, EditorState } from '@lidojs/editor';
import { LayerId } from '@lidojs/core';
export declare const duplicate: (state: EditorState, { pageIndex, layerIds, actions, }: {
    pageIndex: number;
    layerIds: LayerId[];
    actions: EditorActions;
}) => void;
