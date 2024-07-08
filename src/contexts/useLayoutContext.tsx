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
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const [disableLayout, setDisableLayout] = useState<boolean>(false);

    return (
        <LayoutContext.Provider value={{ sidebarOpen, setSidebarOpen, setDisableLayout, disableLayout }}>
            {children}
        </LayoutContext.Provider>
    );
};
