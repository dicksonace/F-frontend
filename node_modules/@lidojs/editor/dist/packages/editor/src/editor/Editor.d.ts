import { FC, PropsWithChildren } from 'react';
import { EditorConfig } from './EditorContext';
import { GetFontQuery } from '@lidojs/editor';
import { FontData } from '@lidojs/core';
export type EditorProps = {
    config: EditorConfig;
    getFonts: (query: GetFontQuery) => Promise<FontData[]>;
};
declare const Editor: FC<PropsWithChildren<EditorProps>>;
export default Editor;
