import { FC } from 'react';
import { EffectSettings, FontData, LayerComponentProps } from '../types';
export interface TextContentProps extends LayerComponentProps {
    text: string;
    scale: number;
    fonts: FontData[];
    colors: string[];
    fontSizes: number[];
    effect: {
        name: string;
        settings: EffectSettings;
    } | null;
}
export declare const TextContent: FC<TextContentProps>;
