import { FC, PropsWithChildren } from 'react';
import { LayerId } from '@lidojs/core';
type LayerElementProps = {
    id: LayerId;
};
declare const LayerElement: FC<PropsWithChildren<LayerElementProps>>;
export default LayerElement;
