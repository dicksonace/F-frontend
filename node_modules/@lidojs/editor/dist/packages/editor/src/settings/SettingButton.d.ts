import React, { HTMLProps } from 'react';
interface SettingButtonProps extends HTMLProps<HTMLDivElement> {
    isActive?: boolean;
}
declare const _default: React.ForwardRefExoticComponent<Omit<React.PropsWithChildren<SettingButtonProps>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default _default;
