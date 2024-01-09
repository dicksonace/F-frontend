import { FC } from 'react';
import { ShapeLayerProps } from '../layers/ShapeLayer';
import { Layer } from '@lidojs/editor';
interface ShapeSettingsProps {
    layers: Layer<ShapeLayerProps>[];
}
declare const ShapeSettings: FC<ShapeSettingsProps>;
export default ShapeSettings;
