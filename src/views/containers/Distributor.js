import React from 'react';
import "../../styles/Distributor.scss"
import Layout from '../components/Layout';
import Header from '../components/Header';

function Distributor(props) {
    return (
        <>
            <Layout>
                <div className="distributor">
                <Header title="Danh sách đơn vị PHÂN PHỐI" />
            </div>
            </Layout>
        </>
    );
}

export default Distributor;