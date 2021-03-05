import React from 'react';
import "../../styles/Producer.scss"
import Layout from '../components/Layout';
import Header from '../components/Header';
import ListItem from '../components/ListItem';
import { Col, Row } from 'reactstrap'
import SearchHeader from '../components/SearchHeader';
import { useRouter } from 'next/router';

const data = {
    header: [
        {
            name: "nhà sản xuất"
        },
        {
            name: "địa chỉ"
        },
        {
            name: "người đại diện"
        },
        {
            name: "số điện thoại"
        },
        {
            name: "website"
        },
        {
            name: "email"
        },
        {
            name: ""
        }
    ],
    listItem: [
        {
            // image: "/images/demo.png",
            name: "Hợp tác xã Bưởi da xanh Bến tre ",
            address: "594 ấp Phú Ngãi, xã Phú An Hòa, huyện Châu Thành, Bến Tre",
            person: "Hạnh Nguyễn Hồng",
            phoneNumber: "0869.145.265",
            website: "htxbuoidaxanh.com",
            email: "htxbuoidaxanh@gmail.com",
        },
        {
            // image: "/images/demo.png",
            name: "Hợp tác xã Dừa Mỹ Hòa",
            address: "Ấp Hòa Bình, xã Mỹ Hòa, Ba Tri, Bến Tre",
            person: "Hạnh Nguyễn Hồng",
            phoneNumber: "0869.145.265",
            website: "htxbuoidaxanh.com",
            email: "htxbuoidaxanh@gmail.com",
        },       
        {
            // image: "/images/demo.png",
            name: "Hợp tác xã Xoài Thạch Phong",
            address: "Ấp Đại Thôn, xã Thạch Phong, huyện Thạch Phú, Bến Tre",
            person: "Hạnh Nguyễn Hồng",
            phoneNumber: "0869.145.265",
            website: "htxbuoidaxanh.com",
            email: "htxbuoidaxanh@gmail.com",
        },        
        {
            // image: "/images/demo.png",
            name: "Hợp tác xã Bưởi da xanh Bến tre ",
            address: "Thôn Làng Giang, xã Thông Nguyên, huyện Hoàng Su Phì, tỉnh Hà Giang",
            person: "Hạnh Nguyễn Hồng",
            phoneNumber: "0869.145.265",
            website: "htxbuoidaxanh.com",
            email: "htxbuoidaxanh@gmail.com",
        },        
        {
            // image: "/images/demo.png",
            name: "Hợp tác xã Bưởi da xanh Bến tre ",
            address: "Thôn Làng Giang, xã Thông Nguyên, huyện Hoàng Su Phì, tỉnh Hà Giang",
            person: "Hạnh Nguyễn Hồng",
            phoneNumber: "0869.145.265",
            website: "htxbuoidaxanh.com",
            email: "htxbuoidaxanh@gmail.com",
        },
        {
            // image: "/images/demo.png",
            name: "Hợp tác xã Bưởi da xanh Bến tre ",
            address: "Thôn Làng Giang, xã Thông Nguyên, huyện Hoàng Su Phì, tỉnh Hà Giang",
            person: "Hạnh Nguyễn Hồng",
            phoneNumber: "0869.145.265",
            website: "htxbuoidaxanh.com",
            email: "htxbuoidaxanh@gmail.com",
        },
        {
            // image: "/images/demo.png",
            name: "Hợp tác xã Bưởi da xanh Bến tre ",
            address: "Thôn Làng Giang, xã Thông Nguyên, huyện Hoàng Su Phì, tỉnh Hà Giang",
            person: "Hạnh Nguyễn Hồng",
            phoneNumber: "0869.145.265",
            website: "htxbuoidaxanh.com",
            email: "htxbuoidaxanh@gmail.com",
        },
        {
            // image: "/images/demo.png",
            name: "Hợp tác xã Bưởi da xanh Bến tre ",
            address: "Thôn Làng Giang, xã Thông Nguyên, huyện Hoàng Su Phì, tỉnh Hà Giang",
            person: "Hạnh Nguyễn Hồng",
            phoneNumber: "0869.145.265",
            website: "htxbuoidaxanh.com",
            email: "htxbuoidaxanh@gmail.com",
        },
        {
            // image: "/images/demo.png",
            name: "Hợp tác xã Bưởi da xanh Bến tre ",
            address: "Thôn Làng Giang, xã Thông Nguyên, huyện Hoàng Su Phì, tỉnh Hà Giang",
            person: "Hạnh Nguyễn Hồng",
            phoneNumber: "0869.145.265",
            website: "htxbuoidaxanh.com",
            email: "htxbuoidaxanh@gmail.com",
        },

        {
            // image: "/images/demo.png",
            name: "Hợp tác xã Bưởi da xanh Bến tre ",
            address: "Thôn Làng Giang, xã Thông Nguyên, huyện Hoàng Su Phì, tỉnh Hà Giang",
            person: "Hạnh Nguyễn Hồng",
            phoneNumber: "0869.145.265",
            website: "htxbuoidaxanh.com",
            email: "htxbuoidaxanh@gmail.com",
        },
    ]
}

function Producer(props) {
    const [isAddItem, setAddItem] = React.useState(false);
    const [item, setItem] = React.useState(undefined);
    const router = useRouter();
    return (
        <>
            <Layout>
                <div className="producer">
                    <Header title=" Danh sách NHÀ SẢN XUẤT" onAddButton = {() => {router.push('/Producer/create')}} />
                    <div className="product-cnt">
                        <SearchHeader />
                    <ListItem onPressAddItem={setAddItem} onPassData={setItem} data={data} title="Nhà sản xuất" type={1} />
                </div>
                </div>
            </Layout>

        </>
    );
}

export default Producer;