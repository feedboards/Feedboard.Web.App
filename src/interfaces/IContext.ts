import { ReactNode } from 'react';

export interface IContextProviderProps {
    children: ReactNode;
}

export interface ILayoutContext {
    sidebarOpen: boolean;
    setSidebarOpen: (value: boolean) => void;
}
