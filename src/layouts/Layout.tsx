import { Header, Sidebar } from './components';
import { useLayout } from '../contexts';
import { Outlet } from 'react-router-dom';
import { ErrorLayout } from './ErrorLayout';

export const Layout = (): JSX.Element => {
    const { is404Error } = useLayout();

    return (
        <>
            {is404Error ? (
                <ErrorLayout />
            ) : (
                <>
                    <Sidebar />
                    <div className="lg:pl-72">
                        <Header />
                        <main className="p-5">
                            <Outlet />
                        </main>
                    </div>
                </>
            )}
        </>
    );
};
