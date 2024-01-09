import { EditorProps } from 'prosemirror-view';
import { TextEditor } from '../../interfaces';
export declare const createEditor: ({ content, ele, handleDOMEvents, }: {
    content: string;
    ele?: HTMLDivElement | null | undefined;
    handleDOMEvents?: EditorProps['handleDOMEvents'];
}) => TextEditor;
