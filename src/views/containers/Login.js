import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmpty } from 'validator'

const required = (value) => {
    if (isEmpty(value)) {
        return <small className="form-text text-danger">This field is required</small>;
    }
}


function Login() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
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
            <div className="login">
                <Container>
                    <Row>
                        <Col xs={12} sm={3} xl={7}></Col>
                        <Col xs={12} sm={6} xl={5} className="horizontal-align">
                            <div className="login-section" >
                                <div className="login-header">
                                    <img src="./ntm-logo.png" alt="logo" />
                                    <div className="loginContent">
                                        <h1>
                                            HỆ THỐNG QUẢN LÝ VÀ GIÁM SÁT
                                </h1>
                                        <h1>
                                            SẢN PHẨM OCOP QUỐC GIA
                                </h1>
                                    </div>
                                </div>
                                <div className="form-box login-action">
                                    <Form onSubmit={e => onSubmit(e)} ref={c => { form = c }} method="POST">
                                        <div className="inputContainer">
                                            <p>Tên đăng nhập</p>
                                            <Input
                                                name="username"
                                                onChange={(text) => {
                                                    setUsername(text);
                                                }}
                                                type="text"
                                                placeholder="Tên đăng nhập"
                                                // className="form-control"
                                                validations={[required]}
                                            />
                                            <img src="/images/user.png" alt="user" />
                                        </div>
                                        <div className="inputContainer">
                                            <p>Mật khẩu</p>
                                            <Input
                                                name="password"
                                                onChange={(text) => {
                                                    setPassword(text);
                                                }}
                                                type="password"
                                                placeholder="Mật khẩu"
                                                // className="form-control"
                                                validations={[required]}
                                            />
                                            <img src="/images/lock.png" alt="lock" />
                                        </div>
                                        <div className="fpContainer">
                                            <div></div>
                                            <button className="fogot-password-btn"> Quên mật khẩu? </button>
                                        </div>
                                        <button className="btn btn-info btn-block login loginBtn" type="submit">Đăng nhập</button>
                                        <CheckButton className="checkBtn" ref={c => { checkBtn = c }} />
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Login;