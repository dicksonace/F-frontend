import { FC } from 'react';
import { CornerDirection } from '../../types';
interface ImageEditorHandlerProps {
    direction: CornerDirection;
    onResizeStart: (e: TouchEvent | MouseEvent, direction: CornerDirection) => void;
}
declare const ImageEditorHandler: FC<ImageEditorHandlerProps>;
export default ImageEditorHandler;
