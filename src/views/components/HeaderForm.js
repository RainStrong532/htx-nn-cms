import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import Input from 'react-validation/build/input';
import Textarea from 'react-validation/build/textarea'
import Form from 'react-validation/build/form';
import Select from 'react-validation/build/select'
import SelectComponent from './SelectComponent';

const productNames = [
    {
        name: "Gỗ",
        value: "wood"
    }, {
        name: "Hải sản",
        value: "seafood"
    },
    {
        name: "Muối",
        value: "salt"
    }
    ,
    {
        name: "Nước sạch",
        value: "water"
    }
]


function HeaderForm(props) {
    const [productName, setProductName] = useState("");
    return (
        <>
            <div className="header-traceability">
                <div className="title">
                    <div className="number-mark">
                        <img src="/images/number-marker-1.png" alt="icon" />
                    </div>
                    <span>Chọn sản phẩm</span>
                </div>
                <Form>
                    <Row>
                        <Col>
                            <SelectComponent
                                value={productName}
                                onChange={setProductName}
                                label="Tên sản phẩm"
                                required={true}
                                placeholder="Chọn sản phẩm"
                                options={productNames}
                            />
                        </Col>
                        <Col>
                            <div className="inputContainer">
                                <label htmlFor="groupProduct">
                                    <div>
                                        <div className="dot"></div>
                                    </div>
                                Nhóm sản phẩm
                                <span>*</span>
                                </label>
                                <div className="select">
                                    <div>
                                        <img src="/images/chevron-down.png" alt="icon" />
                                    </div>
                                    <Select
                                        name="gido"
                                        value=""
                                        className={`input`}
                                    >
                                        <option className="option" value=''>Chọn gì đó</option>
                                        <option className="option" value='A'>A</option>
                                    </Select>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    );
}

export default HeaderForm;
