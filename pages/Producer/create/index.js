import React from 'react';
import CreateProducer from '../../../src/views/containers/Producer/CreateProducer';
import Layout from "../../../src/views/components/Layout"
import Header from '../../../src/views/components/Header';

const Producer = () => {
    return (
        <Layout>
            <Header title="Thêm NHÀ SẢN XUẤT" add={true}/>
            <CreateProducer></CreateProducer>
        </Layout>
    )
}

export default Producer;