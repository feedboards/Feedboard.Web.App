import { ReactNode } from 'react';
import { Header } from './Header';
import { Sidebar } from './SideBar';

export const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
    return (
        <>
            <Sidebar />
            <div className="lg:pl-72">
                <Header />
                <main className="p-5">{children}</main>
            </div>
        </>
    );
};
