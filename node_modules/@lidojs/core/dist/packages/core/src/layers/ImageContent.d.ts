import { FC } from 'react';
import { BoxSize, Delta, LayerComponentProps } from '../types';
export interface ImageContentProps extends LayerComponentProps {
    image: {
        url: string;
        position: Delta;
        rotate: number;
        boxSize: BoxSize;
        transparency?: number;
    };
}
export declare const ImageContent: FC<ImageContentProps>;
