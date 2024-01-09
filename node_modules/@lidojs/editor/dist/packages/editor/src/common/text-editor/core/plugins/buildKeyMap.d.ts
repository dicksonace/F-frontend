import { Command } from 'prosemirror-state';
import { Schema } from 'prosemirror-model';
export declare function buildKeyMap(schema: Schema, mapKeys?: {
    [key: string]: false | string;
}): {
    [key: string]: Command;
};
