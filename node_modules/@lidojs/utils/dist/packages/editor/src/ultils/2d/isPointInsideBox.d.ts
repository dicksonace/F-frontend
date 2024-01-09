import { Delta } from '@lidojs/core';
export declare const isPointInsideBox: (point: Delta, { nw, ne, se, sw, }: {
    nw: Delta;
    ne: Delta;
    se: Delta;
    sw: Delta;
}) => boolean;
