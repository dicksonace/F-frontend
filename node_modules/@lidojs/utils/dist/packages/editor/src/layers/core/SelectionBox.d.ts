import React from 'react';
import { BoxData, LayerId } from '@lidojs/core';
interface SelectionBoxProps {
    selectedLayers?: Record<LayerId, BoxData>;
}
declare const _default: React.ForwardRefExoticComponent<SelectionBoxProps & React.RefAttributes<HTMLDivElement>>;
export default _default;
