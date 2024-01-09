import { PropsWithChildren } from 'react';
import { LayerComponentProps } from '@lidojs/core';
import { LayerComponent } from '@lidojs/editor';
export interface GroupLayerProps extends LayerComponentProps {
    scale: number;
}
declare const GroupLayer: LayerComponent<PropsWithChildren<GroupLayerProps>>;
export default GroupLayer;
