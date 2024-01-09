import { MarkType } from 'prosemirror-model';
import { Command } from 'prosemirror-state';
export declare const setMark: (typeOrName: string | MarkType, attributes?: Record<string, string>) => Command;
