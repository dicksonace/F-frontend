import { BoxSize, Delta, FrameContentProps } from '@lidojs/core';
import { LayerComponent } from '@lidojs/editor';
export interface FrameLayerProps extends FrameContentProps {
    image: {
        url: string;
        thumb: string;
        position: Delta;
        rotate: number;
        boxSize: BoxSize;
    } | null;
}
declare const FrameLayer: LayerComponent<FrameLayerProps>;
export default FrameLayer;
