import React, { FC, PropsWithChildren } from 'react';
export declare const PageContext: React.Context<{
    pageIndex: number;
}>;
type PageProviderProps = {
    pageIndex: number;
};
declare const PageProvider: FC<PropsWithChildren<PageProviderProps>>;
export default PageProvider;
