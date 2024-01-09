import { EditorQuery, EditorState } from '../types';
export declare const useEditor: <C>(collector?: ((s: EditorState, query: EditorQuery) => C) | undefined) => C & {
    actions: import("../types").EditorActions;
    query: EditorQuery;
    state: EditorState;
};
