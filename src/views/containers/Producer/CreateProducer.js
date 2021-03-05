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

function CreateProducer(props) {
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
            <div className="traceability producer-create">
                <div className="content">
                    <Form onSubmit={e => onSubmit(e)} ref={c => { form = c }} method="POST">
                        <div>
                            <Row>
                                <Col lg={6}>
                                    <InputComponent
                                        title="Tên nhà sản xuất"
                                        placeholder="Nhập tên nhà sản xuất"
                                        required={[required]}
                                    />

                                    <InputComponent
                                        title="Số điện thoại"
                                        placeholder="Nhập số điện thoại"
                                        required={[]}
                                    />

                                    <InputComponent
                                        title="Người đại diện"
                                        placeholder="Nhập tên người đạ diện"
                                        required={[]}
                                    />

                                </Col>
                                <Col lg={6}>
                                    <InputComponent
                                        title="Email"
                                        placeholder="Nhập email"
                                        required={[required]}
                                    />

                                    <InputComponent
                                        title="Quốc gia"
                                        placeholder="Nhập tên quốc gia"
                                        required={[required]}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <div className="inputContainer">
                                        <label htmlFor="">
                                            <div>
                                                <div className="dot"></div>
                                            </div>
                                            Địa chỉ
                                        </label>
                                    </div>
                                    <Row>
                                        <Col>
                                            <div className="display-flex">
                                                <SelectComponent
                                                    title={false}
                                                    placeholder="Chọn Tỉnh/Thành phố"
                                                    id="city"
                                                />

                                                <SelectComponent
                                                    title={false}
                                                    placeholder="Chọn Quận/Huyện"
                                                    id="district"
                                                />
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="display-flex">
                                                <SelectComponent
                                                    title={false}
                                                    placeholder="Chọn Phường/Xã"
                                                    id="commune"
                                                />
                                                <InputComponent
                                                    placeholder="Nhập số nhà"
                                                    showTitle={false}
                                                    required={[]}
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                        <div>
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
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default CreateProducer;
