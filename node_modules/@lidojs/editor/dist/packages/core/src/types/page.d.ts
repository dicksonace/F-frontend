import { SerializedLayers } from './layer';
export type PageSize = {
    width: number;
    height: number;
};
export type SerializedPage = {
    locked: boolean;
    layers: SerializedLayers;
};
