import { FC, PropsWithChildren } from 'react';
import { GradientStyle } from '@lidojs/core';
interface ColorSettingsProps {
    colors: string[];
    gradient?: {
        colors: string[];
        style: GradientStyle;
    } | null;
    useGradient?: boolean;
    onChange: (color: string) => void;
    onChangeGradient?: (gradient: {
        colors: string[];
        style: GradientStyle;
    }) => void;
}
declare const ColorSettings: FC<PropsWithChildren<ColorSettingsProps>>;
export default ColorSettings;
