import { CornerDirection } from '../../types';
import { FC } from 'react';
interface ResizeIconProps {
    direction: CornerDirection;
    onResizeStart: (e: TouchEvent | MouseEvent, direction: CornerDirection) => void;
}
declare const ResizeHandler: FC<ResizeIconProps>;
export default ResizeHandler;
