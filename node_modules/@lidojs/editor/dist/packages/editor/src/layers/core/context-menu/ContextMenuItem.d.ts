import { FC, PropsWithChildren, ReactElement } from 'react';
interface ContextMenuItemProps {
    name: string;
    icon: ReactElement;
    shortcut?: string;
    disabled?: boolean;
    onClick?: () => void;
}
declare const ContextMenuItem: FC<PropsWithChildren<ContextMenuItemProps>>;
export default ContextMenuItem;
