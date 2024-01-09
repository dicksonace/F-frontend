import { ColorModel, ColorPickerBaseProps } from './types';
interface Props<T extends string> extends Partial<ColorPickerBaseProps<T>> {
    colorModel: ColorModel<T>;
}
export declare const BaseColorPicker: ({ colorModel, color, onChange, enableAlpha, ...rest }: Props<string>) => import("@emotion/react/jsx-runtime").JSX.Element;
export {};
