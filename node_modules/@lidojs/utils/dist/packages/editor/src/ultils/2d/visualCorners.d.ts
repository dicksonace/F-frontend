import { BoxSize, Delta } from '@lidojs/core';
export declare const visualCorners: (size: BoxSize, matrix: WebKitCSSMatrix, position: Delta) => {
    nw: {
        x: number;
        y: number;
    };
    ne: {
        x: number;
        y: number;
    };
    sw: {
        x: number;
        y: number;
    };
    se: {
        x: number;
        y: number;
    };
};
