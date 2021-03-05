import React from 'react';
import NavBar from './NavBar';
import { Col, Row } from 'reactstrap';
import '../../styles/Layout.scss';

const Layout = ({ children }) => {
    return (
        <>
            <div className="navBar">
                <NavBar />
            </div>
            <div className="layout">
                <div className="layout-content">
                    {children}
                </div>
            </div>
        </>
    )
}
export default Layout;