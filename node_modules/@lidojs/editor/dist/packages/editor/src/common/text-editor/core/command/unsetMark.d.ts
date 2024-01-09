import { MarkType } from 'prosemirror-model';
import { Command } from 'prosemirror-state';
export declare const unsetMark: (typeOrName: string | MarkType, options?: {
    extendEmptyMarkRange?: boolean;
}) => Command;
