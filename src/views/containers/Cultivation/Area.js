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
            name: "tên vùng nguyên liệu"
        },
        {
            name: "mô tả vùng nguyên liệu"
        },
        {
            name: "ngày đăng ký"
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
            areaName: "Hồ Chí Minh",
            description: "Tổng số thành viên: 43 hộ; tổng diện tích: 20,5 ha (11,7 ha cho trái và 8,8 ha trồng mới ); 32 hộ đăng ký thực hành chứng nhận vietgap 2020",
            registrationDate: "12/05/2020 10:54",
        },
        {
            image: "/images/demo.png",
            areaName: "Hồ Chí Minh",
            description: "Tổng số thành viên: 43 hộ; tổng diện tích: 20,5 ha (11,7 ha cho trái và 8,8 ha trồng mới ); 32 hộ đăng ký thực hành chứng nhận vietgap 2020",
            registrationDate: "12/05/2020 10:54",
        },
        {
            image: "/images/demo.png",
            areaName: "Hồ Chí Minh",
            description: "Tổng số thành viên: 43 hộ; tổng diện tích: 20,5 ha (11,7 ha cho trái và 8,8 ha trồng mới ); 32 hộ đăng ký thực hành chứng nhận vietgap 2020",
            registrationDate: "12/05/2020 10:54",
        },
        {
            image: "/images/demo.png",
            areaName: "Hồ Chí Minh",
            description: "Tổng số thành viên: 43 hộ; tổng diện tích: 20,5 ha (11,7 ha cho trái và 8,8 ha trồng mới ); 32 hộ đăng ký thực hành chứng nhận vietgap 2020",
            registrationDate: "12/05/2020 10:54",
        },

    ]
}

function Area(props) {
    const [isAddItem, setAddItem] = React.useState(false);
    const [item, setItem] = React.useState(undefined);
    return (
        <>
            <Layout>
                <div className="distributor">
                    <Header title="Danh sách VÙNG NGUYÊN LIỆU" />
                    <ListItem onPressAddItem={setAddItem} onPassData={setItem} data={data} title="Nhà sản xuất" type={5} />
                </div>
            </Layout>
        </>
    );
}

export default Area;