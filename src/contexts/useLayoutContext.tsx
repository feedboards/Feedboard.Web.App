import { createContext, useContext, useState } from 'react';
import { IContextProviderProps, ILayoutContext } from '../interfaces';

const LayoutContext = createContext<ILayoutContext | undefined>(undefined);

export const useLayout = () => {
    const context = useContext(LayoutContext);

    if (!context) {
        throw new Error('useLayout must be used within a LayoutProvider');
    }

    return context;
};

export const LayoutProvider: React.FC<IContextProviderProps> = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return <LayoutContext.Provider value={{ sidebarOpen, setSidebarOpen }}>{children}</LayoutContext.Provider>;
};
