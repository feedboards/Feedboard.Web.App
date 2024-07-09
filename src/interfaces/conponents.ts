import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    appearance?: 'primary' | 'light';
    to?: string;
    children: ReactNode;
}

export interface RequireQueryParamProps {
    children: React.ReactNode;
    paramName: string;
}
