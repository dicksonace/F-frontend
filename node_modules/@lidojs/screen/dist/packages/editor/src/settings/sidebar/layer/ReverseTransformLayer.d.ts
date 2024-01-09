import { FC } from 'react';
import { Layer } from '../../../types';
import { LayerComponentProps } from '@lidojs/core';
interface ReverseTransformLayerProps {
    layer: Layer<LayerComponentProps>;
    hiddenChild?: boolean;
}
declare const ReverseTransformLayer: FC<ReverseTransformLayerProps>;
export default ReverseTransformLayer;
