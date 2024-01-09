/// <reference types="react" />
import { LayerComponentProps, SerializedPage } from '@lidojs/core';
export declare const renderPages: (serializedPages: SerializedPage[]) => import("react").FunctionComponentElement<LayerComponentProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>[];
