import { FC } from 'react';
import { BoxSize, Delta, GradientStyle, LayerComponentProps } from '../types';
export interface FrameContentProps extends LayerComponentProps {
    clipPath: string;
    scale: number;
    color: string | null;
    gradientBackground: {
        colors: string[];
        style: GradientStyle;
    } | null;
    image: {
        url: string;
        position: Delta;
        rotate: number;
        boxSize: BoxSize;
    } | null;
}
export declare const FrameContent: FC<FrameContentProps>;
