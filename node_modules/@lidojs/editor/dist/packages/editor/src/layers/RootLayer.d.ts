import { PropsWithChildren } from 'react';
import { LayerComponent } from '@lidojs/editor';
import { BoxSize, Delta, RootContentProps } from '@lidojs/core';
export interface RootLayerProps extends Omit<RootContentProps, 'image'> {
    image?: {
        url: string;
        thumb: string;
        position: Delta;
        rotate: number;
        boxSize: BoxSize;
        transparency: number;
    } | null;
}
declare const RootLayer: LayerComponent<PropsWithChildren<RootLayerProps>>;
export default RootLayer;
