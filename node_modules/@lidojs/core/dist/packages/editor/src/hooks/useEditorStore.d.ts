import { EditorActions, EditorQuery, EditorState } from '../types';
export declare const useEditorStore: () => {
    getState: () => EditorState;
    actions: EditorActions;
    query: EditorQuery;
};
