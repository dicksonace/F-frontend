import { EditorState } from 'prosemirror-state';
import { NodeType } from 'prosemirror-model';
export declare const isNodeActive: (state: EditorState, typeOrName: NodeType | string | null, attributes?: Record<string, unknown>) => boolean;
