import iconHeader from './iconHeader';

const { CiCircleCheck , RiRefund2Fill, RiExchangeBoxLine, FaShippingFast , FaTags } = iconHeader;
export const camketMenu = [
    {
        path: 'doi-tra',
        text: '100% hàng thật',
        icons: <CiCircleCheck/>,
    },
    {
        path: 'doi-tra',
        text: 'Hoàn 200% nếu hàng giả',
        icons: <RiRefund2Fill/>,   
    },
    {
        path: 'doi-tra',
        text: '30 ngày đổi trả',
        icons: <RiExchangeBoxLine/>,
    },
    {
        path: 'doi-tra',
        text: 'Giao nhanh 2h',
        icons: <FaShippingFast/>,   
    },
    {
        path: 'doi-tra',
        text: 'Giá siêu rẻ',
        icons: <FaTags/>,   
    },
]