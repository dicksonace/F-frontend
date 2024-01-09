import { MarkType } from 'prosemirror-model';
import { Command } from 'prosemirror-state';
export declare const toggleMark: (typeOrName: string | MarkType, attributes?: Record<string, string>, options?: {
    extendEmptyMarkRange?: boolean;
}) => Command;
