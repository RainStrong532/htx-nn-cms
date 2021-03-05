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
            name: "tên quy trình"
        },
        {
            name: "số văn bằng"
        },
        {
            name: "nội dung"
        },
        {
            name: "ngày cấp"
        },
        {
            name: "sửa"
        },
        {
            name: "xóa"
        }
    ],
    listItem: [
        {
            image: "/images/demo.png",
            procedureName: "Hợp tác xã Bưởi da xanh Bến tre ",
            certificateNumber: "00083-HTVPT-0002",
            content: "594 ấp Phú Ngãi, xã Phú An Hòa, huyện Châu Thành, Bến Tre",
            date: "Hạnh Nguyễn Hồng"
        },
        {
            image: "/images/demo.png",
            procedureName: "Hợp tác xã Bưởi da xanh Bến tre ",
            certificateNumber: "00083-HTVPT-0002",
            content: "594 ấp Phú Ngãi, xã Phú An Hòa, huyện Châu Thành, Bến Tre",
            date: "Hạnh Nguyễn Hồng"
        },
        {
            image: "/images/demo.png",
            procedureName: "Hợp tác xã Bưởi da xanh Bến tre ",
            certificateNumber: "00083-HTVPT-0002",
            content: "594 ấp Phú Ngãi, xã Phú An Hòa, huyện Châu Thành, Bến Tre",
            date: "Hạnh Nguyễn Hồng"
        },
        {
            image: "/images/demo.png",
            procedureName: "Hợp tác xã Bưởi da xanh Bến tre ",
            certificateNumber: "00083-HTVPT-0002",
            content: "594 ấp Phú Ngãi, xã Phú An Hòa, huyện Châu Thành, Bến Tre",
            date: "Hạnh Nguyễn Hồng"
        },
        {
            image: "/images/demo.png",
            procedureName: "Hợp tác xã Bưởi da xanh Bến tre ",
            certificateNumber: "00083-HTVPT-0002",
            content: "594 ấp Phú Ngãi, xã Phú An Hòa, huyện Châu Thành, Bến Tre",
            date: "Hạnh Nguyễn Hồng"
        },
    
    ]
}

function Procedure(props) {
    const [isAddItem, setAddItem] = React.useState(false);
    const [item, setItem] = React.useState(undefined);
    return (
        <>
            <Layout>
                <div className="distributor">
                    <Header title="Danh sách QUY TRÌNH SẢN XUẤT" />
                    <ListItem onPressAddItem={setAddItem} onPassData={setItem} data={data} title="Nhà sản xuất" type={3} />
                </div>
            </Layout>
        </>
    );
}

export default Procedure;
