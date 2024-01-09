import { EditorState } from '../../types';
import { LayerId } from '@lidojs/core';
export declare const copy: (state: EditorState, { pageIndex, layerIds }: {
    pageIndex: number;
    layerIds: LayerId[];
}) => Promise<void>;
