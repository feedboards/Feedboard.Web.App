import classNames from 'classnames';
import { IButtonProps } from '../interfaces';
import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export const Button = ({
    className,
    children,
    appearance = 'primary',
    to,
    onClick,
    ...props
}: IButtonProps): JSX.Element => {
    const navigate = useNavigate();

    const handleClick = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void => {
        if (onClick !== undefined && to === undefined) {
            onClick(event);
        }

        if (to !== undefined) {
            navigate(to);
        }
    };

    return (
        <>
            <button
                type="button"
                className={classNames('text-sm font-semibold px-3.5 py-2.5 rounded-md shadow-sm', {
                    ['bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600']:
                        appearance === 'primary',
                    ['bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50']: appearance === 'light',
                })}
                onClick={handleClick}
                {...props}>
                {children}
            </button>
        </>
    );
};
