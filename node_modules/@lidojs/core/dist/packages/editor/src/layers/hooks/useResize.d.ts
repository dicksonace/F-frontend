import { Direction } from '../../types';
import { BoxData, BoxSize, Delta } from '@lidojs/core';
export declare const useResize: (getData: () => BoxData) => {
    getResized: (direction: Direction, original: {
        clientX: number;
        clientY: number;
    }, newPosition: {
        clientX: number;
        clientY: number;
    }, lockAspect: boolean) => BoxData;
};
export declare const getImageSize: (box: BoxData, image: BoxData, direction: Direction, change: {
    width: number;
    height: number;
}) => {
    boxSize: BoxSize;
    position: Delta;
    rotate: number;
    scale: number | undefined;
    image: {
        boxSize: BoxSize;
        position: Delta;
        rotate: number;
    };
};
