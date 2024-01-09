export declare const useRotate: ({ getData, onRotateStart, onRotate, onRotateEnd, }: {
    getData: () => {
        centerX: number;
        centerY: number;
    };
    onRotateStart: () => void;
    onRotate: (degrees: number) => void;
    onRotateEnd?: ((degrees: number) => void) | undefined;
}) => {
    startRotate: () => void;
};
