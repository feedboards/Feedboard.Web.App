import {
    CalendarIcon,
    ChartPieIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
} from '@heroicons/react/24/outline';
import { TMenu, TTeam } from '../types';

export const userNavigation = [
    { name: 'Your profile', href: '#' },
    { name: 'Sign out', href: '#' },
];

export const menu: TMenu[] = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
    { name: 'Projects', href: '#', icon: FolderIcon, current: false },
    { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
    { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
    { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
];

export const teams: TTeam[] = [
    { id: 1, name: 'Heroicons', href: '#', current: false },
    { id: 2, name: 'Tailwind Labs', href: '#', current: false },
    { id: 3, name: 'Workcation', href: '#', current: false },
    { id: 4, name: 'Torkc', href: '#', current: false },
];
