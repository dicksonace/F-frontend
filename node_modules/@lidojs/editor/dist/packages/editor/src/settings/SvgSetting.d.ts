import { FC } from 'react';
import { Layer } from '../types';
import { SvgLayerProps } from '../layers/SvgLayer';
interface SvgSettingsProps {
    layer: Layer<SvgLayerProps>;
}
declare const SvgSettings: FC<SvgSettingsProps>;
export default SvgSettings;
