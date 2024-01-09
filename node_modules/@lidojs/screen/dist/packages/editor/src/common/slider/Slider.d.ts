import { FC } from 'react';
interface SliderProps {
    label?: string;
    min?: number;
    max?: number;
    step?: number;
    hideLabel?: boolean;
    hideInput?: boolean;
    defaultValue?: number;
    value?: number;
    onChange?: (value: number) => void;
}
declare const Slider: FC<SliderProps>;
export default Slider;
