import { useLayout } from '../contexts';
import { Outlet } from 'react-router-dom';
import { ErrorLayout } from './ErrorLayout';

export const AccountLayout = (): JSX.Element => {
    const { is404Error } = useLayout();

    return (
        <>
            {is404Error ? (
                <ErrorLayout />
            ) : (
                <main className="h-full bg-gray-50">
                    <Outlet />
                </main>
            )}
        </>
    );
};
