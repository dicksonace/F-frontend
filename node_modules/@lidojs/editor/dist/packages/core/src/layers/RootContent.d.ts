import { FC, HTMLProps } from 'react';
import { LayerComponentProps } from '../types';
import { GradientStyle, ImageContentProps } from '@lidojs/core';
export interface RootContentProps extends LayerComponentProps, Omit<HTMLProps<HTMLDivElement>, 'color'> {
    color: string | null;
    gradientBackground: {
        colors: string[];
        style: GradientStyle;
    } | null;
    image?: (ImageContentProps['image'] & {
        transparency: number;
    }) | null;
}
export declare const RootContent: FC<RootContentProps>;
