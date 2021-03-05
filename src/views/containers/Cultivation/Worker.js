import React from 'react';
import Layout from '../../components/Layout';
import ListItem from '../../components/ListItem';
import Header from '../../components/Header';

const data = {
    header: [
        {
            name: "hình ảnh"
        },
        {
            name: "tên nhân công"
        },
        {
            name: "ngày sinh"
        },
        {
            name: "địa chỉ nhà"
        },
        {
            name: "số điện thoại"
        },
        {
            name: "sửa"
        }
        ,
        {
            name: "xóa"
        }
    ],
    listItem: [
        {
            image: "/images/demo.png",
            name: "Đào Văn Minh ",
            birthday: "23/12/1956",
            address: "86 - Xã Qưới Sơn - Huyện Châu Thành - Tỉnh Bến Tre",
            phoneNumber: "0967895059"
        },
        {
            image: "/images/demo.png",
            name: "Đào Văn Minh ",
            birthday: "23/12/1956",
            address: "86 - Xã Qưới Sơn - Huyện Châu Thành - Tỉnh Bến Tre",
            phoneNumber: "0967895059"
        },
        {
            image: "/images/demo.png",
            name: "Đào Văn Minh ",
            birthday: "23/12/1956",
            address: "86 - Xã Qưới Sơn - Huyện Châu Thành - Tỉnh Bến Tre",
            phoneNumber: "0967895059"
        },
        {
            image: "/images/demo.png",
            name: "Đào Văn Minh ",
            birthday: "23/12/1956",
            address: "86 - Xã Qưới Sơn - Huyện Châu Thành - Tỉnh Bến Tre",
            phoneNumber: "0967895059"
        },
    ]
}

function Worker(props) {
    const [isAddItem, setAddItem] = React.useState(false);
    const [item, setItem] = React.useState(undefined);
    return (
        <>
            <Layout>
                <div className="distributor">
                    <Header title="Danh sách NHÂN CÔNG" />
                    <ListItem onPressAddItem={setAddItem} onPassData={setItem} data={data} title="Nhà sản xuất" type={7} />
                </div>
            </Layout>
        </>
    );
}

export default Worker;