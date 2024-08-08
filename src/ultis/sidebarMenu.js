import imageSidebar from "./imageSidebar";

const { nhasachTiki, nhacua, dienthoai, dochoi, phukien, diengiadung, lamdep, xemay } = imageSidebar;

export const sidebarMenu = [
    {
        path: 'nhasachtiki',
        text: 'Nhà Sách Tiki',
        image: nhasachTiki
    },
    {
        path: 'nhacuadoisong',
        text: 'Nhà cửa - Đời Sống',
        image: nhacua
    },
    {
        path: 'dtmaytinhbang',
        text: 'Điện thoại - Máy tính bảng',
        image: dienthoai
    },
    {
        path: 'dochoi',
        text: 'Đồ Chơi - Mẹ & Bé',
        image: dochoi
    },
    {
        path: 'thietbiso',
        text: 'Thiết Bị Số - Phụ Kiện Số',
        image: phukien
    },
    {
        path: 'diengiadung',
        text: 'Điện Gia Dụng',
        image: diengiadung
    },
    {
        path: 'lamdep-suckhoe',
        text: 'Làm Đẹp-Sức Khỏe',
        image: lamdep
    },
    {
        path: 'oto-xemay',
        text: 'Ô Tô-Xe Máy-Xe Đạp',
        image: xemay
    },
];
