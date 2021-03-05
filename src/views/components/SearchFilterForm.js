import React, { useState } from 'react';
import { Input, Button, Col, Row } from 'reactstrap'
import SelectComponent from './SelectComponent';

const groupProduct = [
    {
        name: "Gỗ",
    },
    {
        name: "Hải sản đánh bắt và qua sơ chế",
    },
    {
        name: "Lâm sản ngoài gỗ",
    },
    {
        name: "Muối",
    },
    {
        name: "Nước sạch",
    },
    {
        name: "Rau - củ - quả",
    },
    {
        name: "Sản phẩm chăn nuôi (thịt - cá trứng)",
    }
]

const productStatus = [
    {
        name: "Tất cả"
    },
    {
        name: "Đã duyệt"
    },
    {
        name: "Chưa duyệt"
    }
]

function SearchFilterForm({}) {
    const [product, setProduct] = useState(undefined);
    const [status, setStatus] = useState(undefined);
    return (
        <>
            <div className="filter-search">
                <div className="search">
                    <img src="/images/search.png" alt="icon" />
                    <input type="text"
                        placeholder="Tìm kiếm theo tên, địa chỉ, số điện thoại, ..."
                    />
                </div>
                <Row className="filter">
                    <Col className="filter-cnt" xl={6}>
                        <Row>
                            <Col xl={6}>
                                <SelectComponent className="filter-item" value={product} onChange={(val) => setProduct(val)} label="Nhóm sản phẩm" id="group-product" type="filter" options={groupProduct}/>
                            </Col>
                            <Col xl={6}>
                                <SelectComponent className="filter-item" value={status} label="Trạng thái" id="status" type="filter" onChange={(val) => setStatus(val)} options={productStatus}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="btn-controls" xl={2}>
                        <Button className="refresh-btn">Làm mới</Button>
                        <Button className="search-btn">Tìm kiếm</Button>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default SearchFilterForm;