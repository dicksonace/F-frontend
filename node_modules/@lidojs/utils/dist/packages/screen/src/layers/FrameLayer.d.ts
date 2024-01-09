import { FC } from 'react';
import { BoxSize, Delta, FrameContentProps } from '@lidojs/core';
export interface FrameLayerProps extends FrameContentProps {
    image: {
        url: string;
        thumb: string;
        position: Delta;
        rotate: number;
        boxSize: BoxSize;
    } | null;
}
declare const FrameLayer: FC<FrameLayerProps>;
export default FrameLayer;
