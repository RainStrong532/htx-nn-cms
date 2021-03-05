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
            name: "tên lô sản xuất"
        },
        {
            name: "vùng nguyên liệu"
        },
        {
            name: "tên quy trình"
        },
        {
            name: "sản phẩm"
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
            productionBatchName: "Đào Văn Minh",
            area: "Giao Hòa",
            procedure: "Quy trình Globalgap",
            product: "Bưởi da xanh bến tre",
        },
        {
            image: "/images/demo.png",
            productionBatchName: "Đào Văn Minh",
            area: "Giao Hòa",
            procedure: "Quy trình Globalgap",
            product: "Bưởi da xanh bến tre",
        },
        {
            image: "/images/demo.png",
            productionBatchName: "Đào Văn Minh",
            area: "Giao Hòa",
            procedure: "Quy trình Globalgap",
            product: "Bưởi da xanh bến tre",
        },
    ]
}

function ProductionBatch(props) {
    const [isAddItem, setAddItem] = React.useState(false);
    const [item, setItem] = React.useState(undefined);
    return (
        <>
            <Layout>
                <div className="distributor">
                    <Header title="Danh sách LÔ SẢN XUẤT" />
                    <ListItem onPressAddItem={setAddItem} onPassData={setItem} data={data} title="Nhà sản xuất" type={6} />
                </div>
            </Layout>
        </>
    );
}

export default ProductionBatch;