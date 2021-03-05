import React from 'react';
import NavBar from "../components/NavBar";
import "../../styles/OverView.scss"
import Layout from '../components/Layout';
import Header from '../components/Header';

function OverView(props) {
    return (
        <>
            <Layout>
                <div className="overView">
                    <Header title="TỔNG QUAN" />
                </div>
            </Layout>
        </>
    );
}

export default OverView;