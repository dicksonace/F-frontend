import React from 'react';
export interface PageProps {
    pageIndex: number;
    width: number;
    height: number;
    transform: {
        x: number;
        y: number;
        scale: number;
    };
}
declare const _default: React.ForwardRefExoticComponent<PageProps & React.RefAttributes<HTMLDivElement>>;
export default _default;
