import {
    CalendarIcon,
    ChartPieIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
} from '@heroicons/react/24/outline';
import { TMenu, TTeam } from '../../types';

const createTeamsObjct = (team: TTeam, id: string): TTeam => {
    const queryParams = new URLSearchParams();
    queryParams.set('id', id);

    return {
        ...team,
        href: `${team.href}?${queryParams.toString()}`,
    };
};

export const userNavigation = [
    { name: 'Your profile', href: '#' },
    { name: 'Sign out', href: '#' },
];

export const menu: TMenu[] = [
    { name: 'Dashboard', href: 'dashboard', icon: HomeIcon, current: true },
    { name: 'Team', href: 'team', icon: UsersIcon, current: false },
    { name: 'Projects', href: 'projects', icon: FolderIcon, current: false },
    { name: 'Calendar', href: 'calendar', icon: CalendarIcon, current: false },
    { name: 'Documents', href: 'documents', icon: DocumentDuplicateIcon, current: false },
    { name: 'Reports', href: 'reports', icon: ChartPieIcon, current: false },
];

export const teams: TTeam[] = [
    createTeamsObjct({ id: 1, name: 'Heroicons', href: 'team', current: false }, '1'),
    createTeamsObjct({ id: 2, name: 'Tailwind Labs', href: 'team', current: false }, '2'),
    createTeamsObjct({ id: 3, name: 'Workcation', href: 'team', current: false }, '3'),
    createTeamsObjct({ id: 4, name: 'Torkc', href: 'team', current: false }, '4'),
];
