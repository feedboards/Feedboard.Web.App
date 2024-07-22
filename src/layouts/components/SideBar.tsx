import classNames from 'classnames';
import { menu as menuData, teams as teamsData } from './data';
import { Cog6ToothIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react';
import { useLayout } from '../../contexts';
import { useEffect, useState } from 'react';
import { TMenu, TTeam } from '../../types';
import { useNavigate, useLocation } from 'react-router-dom';

export const Sidebar = (): JSX.Element => {
    const [menu, setMenu] = useState<TMenu[]>(menuData);
    const [teams, setTeam] = useState<TTeam[]>(teamsData);

    const { sidebarOpen, setSidebarOpen } = useLayout();

    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    const setMenuActive = (element: TMenu, event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();

        setTeam((team: TTeam[]) =>
            team.map((item: TTeam) => ({
                ...item,
                current: false,
            }))
        );

        setMenu((prev: TMenu[]) => {
            if (prev === undefined) {
                return prev;
            }

            return prev.map((x: TMenu) => {
                if (x.current === true) {
                    x.current = false;
                }

                if (x.name === element.name) {
                    x.current = true;
                }

                return x;
            });
        });

        navigate(element.href);
    };

    const setTeamActive = (element: TTeam, event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();

        setMenu((menu: TMenu[]) =>
            menu.map((item: TMenu) => ({
                ...item,
                current: false,
            }))
        );

        setTeam((prev: TTeam[]) => {
            if (prev === undefined) {
                return prev;
            }

            return prev.map((x: TTeam) => {
                if (x.current === true) {
                    x.current = false;
                }

                if (x.name === element.name) {
                    x.current = true;
                }

                return x;
            });
        });

        navigate(element.href);
    };

    useEffect(() => {
        if (currentPath.slice(1).includes('team')) {
            setMenu((menu: TMenu[]) =>
                menu.map((item: TMenu) => ({
                    ...item,
                    current: false,
                }))
            );

            setTeam((team: TTeam[]) =>
                team.map((item: TTeam) => ({
                    ...item,
                    current: item.href === currentPath.slice(1),
                }))
            );
        } else {
            if (currentPath === '/') {
                navigate('dashboard');
            } else {
                setTeam((team: TTeam[]) =>
                    team.map((item: TTeam) => ({
                        ...item,
                        current: false,
                    }))
                );

                setMenu((menu: TMenu[]) =>
                    menu.map((item: TMenu) => ({
                        ...item,
                        current: item.href === currentPath.slice(1),
                    }))
                );
            }
        }
    }, [currentPath, navigate]);

    return (
        <>
            <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
                />

                <div className="fixed inset-0 flex">
                    <DialogPanel
                        transition
                        className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full">
                        <TransitionChild>
                            <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                                <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                                    <span className="sr-only">Close sidebar</span>
                                    <XMarkIcon aria-hidden="true" className="h-6 w-6 text-white" />
                                </button>
                            </div>
                        </TransitionChild>
                        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                            <div className="flex h-16 shrink-0 items-center">
                                <img
                                    alt="Your Company"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                    className="h-8 w-auto"
                                />
                            </div>
                            <nav className="flex flex-1 flex-col">
                                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                    <li>
                                        <ul role="list" className="-mx-2 space-y-1">
                                            {menu.map((x: any) => (
                                                <li key={x.name}>
                                                    <a
                                                        href={x.href}
                                                        className={classNames(
                                                            'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                                                            {
                                                                ['bg-gray-50 text-indigo-600']: x.current,
                                                                ['text-gray-700 hover:bg-gray-50 hover:text-indigo-600']:
                                                                    !x.current,
                                                            }
                                                        )}>
                                                        <x.icon
                                                            aria-hidden="true"
                                                            className={classNames('h-6 w-6 shrink-0', {
                                                                ['text-indigo-600']: x.current,
                                                                ['text-gray-400 group-hover:text-indigo-600']:
                                                                    !x.current,
                                                            })}
                                                        />
                                                        {x.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                                        <ul role="list" className="-mx-2 mt-2 space-y-1">
                                            {teams?.map((x: any) => (
                                                <li key={x.name}>
                                                    <a
                                                        href={x.href}
                                                        className={classNames(
                                                            'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                                                            {
                                                                ['bg-gray-50 text-indigo-600']: x.current,
                                                                ['text-gray-700 hover:bg-gray-50 hover:text-indigo-600']:
                                                                    !x.current,
                                                            }
                                                        )}>
                                                        <span
                                                            className={classNames(
                                                                'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium',
                                                                {
                                                                    ['border-indigo-600 text-indigo-600']: x.current,
                                                                    ['border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600']:
                                                                        !x.current,
                                                                }
                                                            )}>
                                                            {x.initial}
                                                        </span>
                                                        <span className="truncate">{x.name}</span>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                    <li className="mt-auto">
                                        <a
                                            href="#"
                                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600">
                                            <Cog6ToothIcon
                                                aria-hidden="true"
                                                className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                                            />
                                            Settings
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>

            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                        <img
                            alt="Your Company"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            className="h-8 w-auto"
                        />
                    </div>
                    <nav className="flex flex-1 flex-col">
                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                            <li>
                                <ul role="list" className="-mx-2 space-y-1">
                                    {menu.map((x) => (
                                        <li key={x.name}>
                                            <a
                                                href={x.href}
                                                className={classNames(
                                                    'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                                                    {
                                                        ['bg-gray-50 text-indigo-600']: x.current,
                                                        ['text-gray-700 hover:bg-gray-50 hover:text-indigo-600']:
                                                            !x.current,
                                                    }
                                                )}
                                                onClick={(event) => setMenuActive(x, event)}>
                                                <x.icon
                                                    aria-hidden="true"
                                                    className={classNames('h-6 w-6 shrink-0', {
                                                        ['text-indigo-600']: x.current,
                                                        ['text-gray-400 group-hover:text-indigo-600']: !x.current,
                                                    })}
                                                />
                                                {x.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li>
                                <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                                <ul role="list" className="-mx-2 mt-2 space-y-1">
                                    {teams.map((x) => (
                                        <li key={x.id}>
                                            <a
                                                href={x.href}
                                                onClick={(event) => {
                                                    setTeamActive(x, event);
                                                }}
                                                className={classNames(
                                                    'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                                                    {
                                                        ['bg-gray-50 text-indigo-600']: x.current,
                                                        ['text-gray-700 hover:bg-gray-50 hover:text-indigo-600']:
                                                            !x.current,
                                                    }
                                                )}>
                                                <span
                                                    className={classNames(
                                                        'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium',
                                                        {
                                                            ['border-indigo-600 text-indigo-600']: x.current,
                                                            ['border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600']:
                                                                !x.current,
                                                        }
                                                    )}>
                                                    {x.name.charAt(0).toUpperCase()}
                                                </span>
                                                <span className="truncate">{x.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="mt-auto">
                                <a
                                    href="#"
                                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600">
                                    <Cog6ToothIcon
                                        aria-hidden="true"
                                        className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                                    />
                                    Settings
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};
