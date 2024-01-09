import React from 'react';
import { Delta } from '@lidojs/core';
type PopoverPlacement = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';
export interface PopoverProps {
    open: boolean;
    anchorEl: HTMLElement | null;
    placement: PopoverPlacement;
    onClose: () => void;
    offsets?: {
        [K in PopoverPlacement]?: Delta;
    };
}
declare const _default: React.ForwardRefExoticComponent<PopoverProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
export default _default;
