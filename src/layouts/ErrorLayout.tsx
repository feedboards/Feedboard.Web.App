import { Outlet } from 'react-router-dom';

export const ErrorLayout = (): JSX.Element => {
    return (
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 p-5">
            <Outlet />
        </main>
    );
};
