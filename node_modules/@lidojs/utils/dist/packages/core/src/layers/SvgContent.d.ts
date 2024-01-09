import { FC } from 'react';
import { LayerComponentProps } from '../types';
export interface SvgContentProps extends LayerComponentProps {
    image: string;
    colors: string[];
}
export declare const SvgContent: FC<SvgContentProps>;
