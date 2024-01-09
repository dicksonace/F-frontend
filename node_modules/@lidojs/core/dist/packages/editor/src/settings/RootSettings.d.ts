import { FC } from 'react';
import { Layer } from '@lidojs/editor';
import { RootLayerProps } from '../layers/RootLayer';
interface RootSettingsProps {
    layer: Layer<RootLayerProps>;
}
declare const RootSettings: FC<RootSettingsProps>;
export default RootSettings;
