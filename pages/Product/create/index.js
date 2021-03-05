import React from 'react';
import CreateProduct from '../../../src/views/containers/Product/CreateProduct';
import Layout from "../../../src/views/components/Layout"
import Header from '../../../src/views/components/Header';

const Product = () => {
    return (
        <Layout>
            <Header title="Thêm SẢN PHẨM" add={true} />
            <CreateProduct></CreateProduct>
        </Layout>
    )
}

export default Product;