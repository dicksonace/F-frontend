import { Schema, NodeSpec, MarkSpec } from 'prosemirror-model';
export declare const nodes: {
    doc: NodeSpec;
    paragraph: NodeSpec;
    listItem: NodeSpec;
    bulletList: NodeSpec;
    text: NodeSpec;
    hard_break: NodeSpec;
};
export declare const marks: {
    link: MarkSpec;
    italic: MarkSpec;
    bold: MarkSpec;
    underline: MarkSpec;
    color: MarkSpec;
};
export declare const schema: Schema<"doc" | "paragraph" | "listItem" | "bulletList" | "text" | "hard_break", "link" | "italic" | "bold" | "underline" | "color">;
