import React from 'react';
import "../../styles/Traceability.scss"
import Layout from '../components/Layout';
import Header from '../components/Header';

function Traceability(props) {
    return (
        <>
            <Layout>
                <div className="traceability">
                <Header title="Danh sách TRUY XUẤT NGUỒN GỐC" />
                </div>
            </Layout>
        </>
    );
}

 export default Traceability;