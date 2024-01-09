import { FC, PropsWithChildren } from 'react';
import { Delta } from '@lidojs/core';
interface SubMenuProps {
    transform: Delta;
}
declare const SubMenu: FC<PropsWithChildren<SubMenuProps>>;
export default SubMenu;
