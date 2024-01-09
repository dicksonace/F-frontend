import { Plugin, Command } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
export declare function keymap(bindings: {
    [key: string]: Command;
}): Plugin;
export declare function keydownHandler(bindings: {
    [key: string]: Command;
}): (view: EditorView, event: KeyboardEvent) => boolean;
