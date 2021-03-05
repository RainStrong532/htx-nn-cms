import React from 'react';
import "../../styles/Product.scss"
import Layout from '../components/Layout';
import Header from '../components/Header';
import ListItem from '../components/ListItem';
import SearchHeader from '../components/SearchHeader';
import SearchFilterForm from '../components/SearchFilterForm';

const data = {
    header: [
        {
            name: "hình ảnh"
        },
        {
            name: "tên sản phẩm"
        },
        {
            name: "nhóm sản phẩm"
        },
        {
            name: "cơ sở sản xuất"
        },
        {
            name: "giá bán"
        },
        {
            name: "trạng thái"
        },
        {
            name: "sl in tem"
        },
        {
            name: ""
        }
    ],
    listItem: [
        {
            image: "/images/demo.png",
            productName: "Bưởi da xanh Bến tre ",
            type: "Rau - Củ - Trái cây",
            manufacturer: "Hợp tác xã Nông nghiệp bưởi da xanh Bến Tre",
            cost: "25.000 VND/ Trái",
            status: "chưa duyệt",
            countTemp: "1246",
        },
        {
            image: "/images/demo.png",
            productName: "Bưởi da xanh Bến tre ",
            type: "Rau - Củ - Trái cây",
            manufacturer: "Hợp tác xã Nông nghiệp bưởi da xanh Bến Tre",
            cost: "25.000 VND/ Trái",
            status: "chưa duyệt",
            countTemp: "1246",
        },
        {
            image: "/images/demo.png",
            productName: "Bưởi da xanh Bến tre ",
            type: "Rau - Củ - Trái cây",
            manufacturer: "Hợp tác xã Nông nghiệp bưởi da xanh Bến Tre",
            cost: "25.000 VND/ Trái",
            status: "chưa duyệt",
            countTemp: "1246",
        },
        {
            image: "/images/demo.png",
            productName: "Bưởi da xanh Bến tre ",
            type: "Rau - Củ - Trái cây",
            manufacturer: "Hợp tác xã Nông nghiệp bưởi da xanh Bến Tre",
            cost: "25.000 VND/ Trái",
            status: "chưa duyệt",
            countTemp: "1246",
        },
        {
            image: "/images/demo.png",
            productName: "Bưởi da xanh Bến tre ",
            type: "Rau - Củ - Trái cây",
            manufacturer: "Hợp tác xã Nông nghiệp bưởi da xanh Bến Tre",
            cost: "25.000 VND/ Trái",
            status: "chưa duyệt",
            countTemp: "1246",
        },
        {
            image: "/images/demo.png",
            productName: "Bưởi da xanh Bến tre ",
            type: "Rau - Củ - Trái cây",
            manufacturer: "Hợp tác xã Nông nghiệp bưởi da xanh Bến Tre",
            cost: "25.000 VND/ Trái",
            status: "chưa duyệt",
            countTemp: "1246",
        },
        {
            image: "/images/demo.png",
            productName: "Bưởi da xanh Bến tre ",
            type: "Rau - Củ - Trái cây",
            manufacturer: "Hợp tác xã Nông nghiệp bưởi da xanh Bến Tre",
            cost: "25.000 VND/ Trái",
            status: "chưa duyệt",
            countTemp: "1246",
        },
        {
            image: "/images/demo.png",
            productName: "Bưởi da xanh Bến tre ",
            type: "Rau - Củ - Trái cây",
            manufacturer: "Hợp tác xã Nông nghiệp bưởi da xanh Bến Tre",
            cost: "25.000 VND/ Trái",
            status: "chưa duyệt",
            countTemp: "1246",
        },
        {
            image: "/images/demo.png",
            productName: "Bưởi da xanh Bến tre ",
            type: "Rau - Củ - Trái cây",
            manufacturer: "Hợp tác xã Nông nghiệp bưởi da xanh Bến Tre",
            cost: "25.000 VND/ Trái",
            status: "chưa duyệt",
            countTemp: "1246",
        },

        {
            image: "/images/demo.png",
            productName: "Bưởi da xanh Bến tre ",
            type: "Rau - Củ - Trái cây",
            manufacturer: "Hợp tác xã Nông nghiệp bưởi da xanh Bến Tre",
            cost: "25.000 VND/ Trái",
            status: "chưa duyệt",
            countTemp: "1246",
        },
    ]
}

function Product(props) {
    const [isAddItem, setAddItem] = React.useState(false);
    const [item, setItem] = React.useState(undefined);
    return (
        <>
            <Layout>
                <div className="product">
                    <Header title="Danh sách SẢN PHẨM" />
                    <div className="product-cnt">
                        <SearchFilterForm/>
                        <ListItem onPressAddItem={setAddItem} onPassData={setItem} data={data} title="Nhà sản xuất" type={2} />
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Product;