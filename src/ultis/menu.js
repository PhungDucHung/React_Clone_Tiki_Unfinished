import icons from "./icons"

const { MdOutlineLibraryMusic } = icons
export const sidebarMenu = [
    {
        path: 'personal',
        text: 'cá nhân',
        icons: <MdOutlineLibraryMusic size={24} />
    },
    {
        path: '',
        text: 'khám phá',
        end: true,
        icons: <MdOutlineLibraryMusic size={24} />
    },
    {
        path: 'zing-chart',
        text: '#zing-chart',
        icons: <MdOutlineLibraryMusic size={24} />
    },
    {
        path: 'follow',
        text: 'theo dõi',
        icons: <MdOutlineLibraryMusic size={24} />
    },
]