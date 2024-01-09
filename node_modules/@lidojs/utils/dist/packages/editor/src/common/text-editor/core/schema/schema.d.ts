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
export declare const schema: Schema<"text" | "doc" | "paragraph" | "listItem" | "bulletList" | "hard_break", "link" | "color" | "bold" | "italic" | "underline">;
