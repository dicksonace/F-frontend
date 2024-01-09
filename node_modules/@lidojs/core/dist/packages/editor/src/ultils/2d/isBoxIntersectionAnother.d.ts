import { Delta } from '@lidojs/core';
export declare const isBoxIntersectionAnother: (rect1: {
    nw: Delta;
    ne: Delta;
    se: Delta;
    sw: Delta;
}, rect2: {
    nw: Delta;
    ne: Delta;
    se: Delta;
    sw: Delta;
}) => Record<string, string[]>;
