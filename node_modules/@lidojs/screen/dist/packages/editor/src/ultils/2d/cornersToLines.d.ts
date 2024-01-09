import { Delta } from '@lidojs/core';
export declare const cornersToLines: ({ nw, ne, se, sw, }: {
    nw: Delta;
    ne: Delta;
    se: Delta;
    sw: Delta;
}) => [Delta, Delta][];
