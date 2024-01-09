import React, { HTMLProps } from 'react';
interface ColorIconProps extends Omit<HTMLProps<HTMLDivElement>, 'selected'> {
    color: string;
    selected: string | null;
}
declare const _default: React.ForwardRefExoticComponent<Omit<ColorIconProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default _default;
