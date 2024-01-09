import { FC } from 'react';
interface ResizeHandlerProps {
    rotate: number;
    onRotateStart: (e: TouchEvent | MouseEvent) => void;
}
declare const RotateHandle: FC<ResizeHandlerProps>;
export default RotateHandle;
