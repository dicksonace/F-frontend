import { Command } from 'prosemirror-state';
import { Attrs, NodeType, Node } from 'prosemirror-model';
export declare const splitBlockKeepMarks: Command;
export declare function splitBlockAs(splitNode?: (node: Node, atEnd: boolean) => {
    type: NodeType;
    attrs?: Attrs;
} | null): Command;
