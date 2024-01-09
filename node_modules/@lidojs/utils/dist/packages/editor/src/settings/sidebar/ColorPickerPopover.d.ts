import { FC, PropsWithChildren } from 'react';
interface ColorPickerProps {
    color: string;
    onChange: (color: string) => void;
    event: 'click' | 'doubleClick';
}
declare const ColorPickerPopover: FC<PropsWithChildren<ColorPickerProps>>;
export default ColorPickerPopover;
