/// <reference types="react" />
import { HsvaColor } from './types';
interface Props {
    hsva: HsvaColor;
    onChange: (newAlpha: {
        a: number;
    }) => void;
}
declare const Alpha: ({ hsva, onChange }: Props) => JSX.Element;
export default Alpha;
