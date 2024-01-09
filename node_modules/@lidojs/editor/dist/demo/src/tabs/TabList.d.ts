import React, { FC, ReactNode } from 'react';
interface SidebarTabProps {
    tabs: {
        name: string;
        icon: ReactNode;
    }[];
    active: string | null;
    onChange: (e: React.MouseEvent, tab: string) => void;
}
declare const SidebarTab: FC<SidebarTabProps>;
export default SidebarTab;
