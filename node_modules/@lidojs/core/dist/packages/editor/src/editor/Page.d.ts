import React from 'react';
export interface PageProps {
    pageIndex: number;
    isActive: boolean;
    width: number;
    height: number;
    scale: number;
}
declare const _default: React.ForwardRefExoticComponent<PageProps & React.RefAttributes<HTMLDivElement>>;
export default _default;
