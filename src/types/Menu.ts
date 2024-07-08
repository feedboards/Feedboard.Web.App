import { HomeIcon } from '@heroicons/react/24/outline';

export type TMenu = {
    name: string;
    href: string;
    icon: typeof HomeIcon;
    current: boolean;
};
