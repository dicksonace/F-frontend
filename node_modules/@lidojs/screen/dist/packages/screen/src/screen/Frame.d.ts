import { FC } from 'react';
import { SerializedPage } from '@lidojs/core';
export interface FrameProps {
    width: number;
    height: number;
    data: SerializedPage[];
}
export declare const Frame: FC<FrameProps>;
