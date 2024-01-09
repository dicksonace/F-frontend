import { Direction } from '../../types';
import { visualCorners } from './visualCorners';
type Corner = ReturnType<typeof visualCorners>;
export declare const getPositionChangesBetweenTwoCorners: (oldCorners: Corner, newCorners: Corner, direction: Direction) => {
    changeX: number;
    changeY: number;
};
export {};
