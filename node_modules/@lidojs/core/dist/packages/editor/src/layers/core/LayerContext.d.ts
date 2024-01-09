import React, { FC, PropsWithChildren } from 'react';
import { LayerId } from '@lidojs/core';
export declare const LayerContext: React.Context<{
    id: LayerId;
}>;
type LayerProviderProps = {
    id: LayerId;
};
declare const LayerProvider: FC<PropsWithChildren<LayerProviderProps>>;
export default LayerProvider;
