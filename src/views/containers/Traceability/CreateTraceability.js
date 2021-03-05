import React from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Textarea from 'react-validation/build/textarea'
import Select from 'react-validation/build/select'
import CheckButton from 'react-validation/build/button';
import { isEmpty } from 'validator'
import { Button, Row, Col } from 'reactstrap'
import InputComponent from '../../components/InputComponent';
import HeaderForm from '../../components/HeaderForm';
import SelectComponent from '../../components/SelectComponent';
import _ from 'lodash';

const required = (value) => {
    if (isEmpty(value)) {
        return <small className="form-text text-danger">This field is required</small>;
    }
}

function CreateTraceability(props) {
    let form = React.useRef(null);
    let checkBtn = React.useRef(null);
    const onSubmit = (e) => {
        e.preventDefault();
        form.validateAll();

        if (checkBtn.context._errors.length === 0) {
            // alert('success');
        }
    }
    return (
        <>
            <div className="traceability">
                <HeaderForm />
                <div className="content">
                    <div className="section">
                        <div className="title">
                            <div className="number-mark">
                                <img src="/images/number-marker-2.png" alt="icon" />
                            </div>
                            <span>Thông tin cho sản phẩm</span>
                        </div>
                        <div className="inputForm">
                            <Form onSubmit={e => onSubmit(e)} ref={c => { form = c }} method="POST">
                                <Row>
                                    <Col lg={6}>
                                        <InputComponent
                                            title="Tên sản phẩm"
                                            placeholder="Nhập tên sản phẩm"
                                            required={[required]}
                                        />

                                        <SelectComponent/>

                                        <div className="inputContainer">
                                            <label htmlFor="nameProduct">
                                                <div>
                                                    <div className="dot"></div>
                                                </div>
                                                Tên sản phẩm
                                                <span>*</span>
                                            </label>
                                            <Textarea
                                                type="textarea"
                                                name="nameProduct"
                                                onChange={(text) => {
                                                }}
                                                placeholder="Nhập tên sản phẩm"
                                                className="input textarea"
                                                validations={[required]}
                                            ></Textarea>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="inputContainer">
                                            <label htmlFor="groupProduct">
                                                <div>
                                                    <div className="dot"></div>
                                                </div>
                                                Nhóm sản phẩm
                                                <span>*</span>
                                            </label>
                                            <Input
                                                name="groupProduct"
                                                onChange={(text) => {
                                                }}
                                                placeholder="Nhập tên nhóm sản phẩm"
                                                className="input"
                                            ></Input>
                                        </div>

                                        <div className="inputContainer">
                                            <label htmlFor="groupProduct">
                                                <div>
                                                    <div className="dot"></div>
                                                </div>
                                                Nhóm sản phẩm
                                                <span>*</span>
                                            </label>
                                            <Input
                                                name="groupProduct"
                                                onChange={(text) => {
                                                }}
                                                placeholder="Nhập tên nhóm sản phẩm"
                                                className="input"
                                            ></Input>
                                        </div>

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
                                                    validations={[required]}
                                                >
                                                    <option className="option" value=''>Chọn gì đó</option>
                                                    <option className="option" value='A'>A</option>
                                                </Select>
                                            </div>
                                        </div>
                                    </Col>
                                    <Row>
                                        <Col>
                                            <div className="image-add">
                                                <div className="inputContainer">
                                                    <label htmlFor="groupProduct">
                                                        <div>
                                                            <div className="dot"></div>
                                                        </div>
                                                Nhóm sản phẩm
                                                {/* <span>*</span> */}
                                                    </label>
                                                    <Button className="addImage btn-outline">
                                                        <img src="/images/plus_green.png" alt="icon" />
                                                        <span>Thêm ảnh</span>
                                                    </Button>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Row>
                                <div className="btn-container">
                                    <Button className="btn-outline">
                                        <img src="/images/refresh.png" alt="icon" />
                                        <span>Làm mới</span>
                                    </Button>
                                    <Button className="btn-fill">
                                        <img src="/images/save.png" alt="icon" />
                                        <span>Lưu lại</span>
                                    </Button>
                                </div>
                                <CheckButton className="checkBtn" ref={c => { checkBtn = c }} />
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateTraceability;
