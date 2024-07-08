import { ReactNode } from 'react';
import { Header } from './Header';
import { Sidebar } from './SideBar';
import { useLayout } from '../contexts';

export const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
    const { disableLayout } = useLayout();

    return (
        <>
            {disableLayout ? (
                children
            ) : (
                <>
                    <Sidebar />
                    <div className="lg:pl-72">
                        <Header />
                        <main className="p-5">{children}</main>
                    </div>
                </>
            )}
        </>
    );
};
