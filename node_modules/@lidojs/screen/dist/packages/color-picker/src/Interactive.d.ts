import React from 'react';
export interface Interaction {
    left: number;
    top: number;
}
interface Props {
    onMoveStart?: (interaction: Interaction) => void;
    onMove: (interaction: Interaction) => void;
    onMoveEnd?: () => void;
    onKey: (offset: Interaction) => void;
    children: React.ReactNode;
}
export declare const Interactive: React.MemoExoticComponent<({ onMove, onMoveStart, onMoveEnd, onKey, ...rest }: Props) => import("@emotion/react/jsx-runtime").JSX.Element>;
export {};
