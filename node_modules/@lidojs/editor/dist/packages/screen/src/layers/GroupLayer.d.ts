import { FC, PropsWithChildren } from 'react';
import { LayerComponentProps } from '@lidojs/core';
export interface GroupLayerProps extends LayerComponentProps {
    scale: number;
}
declare const GroupLayer: FC<PropsWithChildren<GroupLayerProps>>;
export default GroupLayer;
