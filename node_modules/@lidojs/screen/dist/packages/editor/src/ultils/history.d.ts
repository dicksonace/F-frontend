import { Patch } from 'immer';
import { EditorState } from '../types';
type Timeline = {
    patches: Patch[];
    inversePatches: Patch[];
    timestamp: number;
}[];
export declare const HISTORY_ACTIONS: {
    UNDO: string;
    REDO: string;
    THROTTLE: string;
    IGNORE: string;
    MERGE: string;
    CLEAR: string;
    NEW: string;
    BACK: string;
};
export declare class History {
    timeline: Timeline;
    pointer: number;
    add(patches: Patch[], inversePatches: Patch[]): void;
    throttleAdd(patches: Patch[], inversePatches: Patch[], throttleRate?: number): void;
    back(): void;
    merge(patches: Patch[], inversePatches: Patch[]): void;
    clear(): void;
    canUndo(): boolean;
    canRedo(): boolean;
    undo(state: EditorState): EditorState | undefined;
    redo(state: EditorState): EditorState | undefined;
}
export {};
