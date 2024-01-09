import { FC } from 'react';
import { LayerComponentProps, ShapeBorderStyle } from '../types';
import { GradientStyle, ShapeType } from '@lidojs/core';
export interface ShapeContentProps extends LayerComponentProps {
    shape: ShapeType;
    roundedCorners: number;
    color: string | null;
    gradientBackground: {
        colors: string[];
        style: GradientStyle;
    } | null;
    border: {
        style: ShapeBorderStyle;
        weight: number;
        color: string;
    } | null;
    scale: number;
}
export declare const ShapeContent: FC<ShapeContentProps>;
