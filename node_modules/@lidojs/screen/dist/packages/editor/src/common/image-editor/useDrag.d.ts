export declare const useDrag: ({ getData, onDragStart }: {
    getData: () => number;
    onDragStart: () => void;
}) => {
    startDrag: (e: React.MouseEvent | React.TouchEvent) => void;
};
