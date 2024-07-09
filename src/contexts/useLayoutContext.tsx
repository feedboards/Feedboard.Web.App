import { createContext, useContext, useState } from 'react';
import { IContextProviderProps, ILayoutContext } from '../interfaces';

const LayoutContext = createContext<ILayoutContext | undefined>(undefined);

export const useLayout = (): ILayoutContext => {
    const context = useContext(LayoutContext);

    if (!context) {
        throw new Error('useLayout must be used within a LayoutProvider');
    }

    return context;
};

export const LayoutProvider: React.FC<IContextProviderProps> = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const [is404Error, setIs404Error] = useState<boolean>(false);

    return (
        <LayoutContext.Provider value={{ sidebarOpen, setSidebarOpen, setIs404Error, is404Error }}>
            {children}
        </LayoutContext.Provider>
    );
};
