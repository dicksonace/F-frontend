import { MarkType, ResolvedPos } from 'prosemirror-model';
export declare function getMarkRange($pos: ResolvedPos, type: MarkType, attributes?: Record<string, unknown>): {
    from: number;
    to: number;
} | void;
