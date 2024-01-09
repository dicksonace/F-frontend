/// <reference types="react" />
import { EditorActions, EditorQuery, EditorState, GetFontQuery } from '@lidojs/editor';
import { FontData } from '@lidojs/core';
export type EditorConfig = {
    assetPath: string;
    frame: {
        defaultImage: {
            width: number;
            height: number;
            url: string;
        };
    };
};
export type EditorContext = {
    getState: () => EditorState;
    query: EditorQuery;
    actions: EditorActions;
    getFonts: (query: GetFontQuery) => Promise<FontData[]>;
    config: EditorConfig;
};
export declare const EditorContext: import("react").Context<EditorContext>;
