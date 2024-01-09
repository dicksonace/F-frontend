import { FC, PropsWithChildren } from 'react';
type GradientStyle = 'leftToRight' | 'topToBottom' | 'topLeftToBottomRight' | 'circleCenter' | 'circleTopLeft';
interface GradientPickerProps {
    selectedColor: string;
    event: 'click' | 'doubleClick';
    gradient?: {
        colors: string[];
        style: GradientStyle;
    } | null;
    onChangeGradient: (gradient: {
        colors: string[];
        style: GradientStyle;
    }) => void;
    onChangeColor: (color: string) => void;
}
declare const GradientPicker: FC<PropsWithChildren<GradientPickerProps>>;
export default GradientPicker;
