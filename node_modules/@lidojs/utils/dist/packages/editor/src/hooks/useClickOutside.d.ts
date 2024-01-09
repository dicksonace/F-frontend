import { RefObject } from 'react';
type Handler = (event: MouseEvent) => void;
export declare const useClickOutside: <T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: Handler, mouseEvent?: 'mousedown' | 'mouseup', options?: AddEventListenerOptions) => void;
export default useClickOutside;
