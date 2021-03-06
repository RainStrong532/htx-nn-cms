import React from 'react';
import { Container, Row, Col, ModalHeader, ModalBody, ModalFooter, Modal, Button } from 'reactstrap';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmpty } from 'validator'
import { useAuth } from '../../contexts/auth';
import LoadingOverlay from '../components/LoadingOverlay';

const required = (value) => {
    if (isEmpty(value)) {
        return <small className="form-text text-danger">This field is required</small>;
    }
}


function Login() {
    const { login } = useAuth();
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    let form = React.useRef(null);
    let checkBtn = React.useRef(null);

    const [isLoading, setLoading] = React.useState(false);
    const [modal, setModal] = React.useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        form.validateAll();

        if (checkBtn.context._errors.length === 0) {
            setLoading(true);
                try{
                await login(username, password);
                }catch(err){
                    toggle();
                }
                setLoading(false);
                toggle();
        }
    }
    return (
        <>
            <div className="login login-v2">
                <Container>
                    <Row>
                        <Col xs={12} sm={3} xl={7} className="leftHorizontal">
                            <div className="image">
                                <img src="/images/loginBackground.png" alt="image" />
                            </div>
                        </Col>
                        <Col xs={12} sm={6} xl={5} className="horizontal-align">
                            <div className="login-section" >
                                <div className="login-header">
                                    <div className="loginContent">
                                        <h1>
                                            Ch??o m???ng ?????n v???i
                                        </h1>
                                        <h1>
                                            h??? th???ng qu???n l?? truy xu???t ngu???n g???c n??ng s???n
                                        </h1>
                                    </div>
                                </div>
                                <div className="form-box login-action">
                                    <Form onSubmit={e => onSubmit(e)} ref={c => { form = c }} method="POST">
                                        <div className="inputContainer">
                                            <p>T??n ????ng nh???p</p>
                                            <Input
                                                name="username"
                                                value={username}
                                                onChange={(e) => {
                                                    setUsername(e.target.value);
                                                }}
                                                type="text"
                                                placeholder="T??n ????ng nh???p"
                                                // className="form-control"
                                                validations={[required]}
                                            />
                                            <img src="/images/user.png" alt="user" />
                                        </div>
                                        <div className="inputContainer">
                                            <p>M???t kh???u</p>
                                            <Input
                                                name="password"
                                                value={password}
                                                onChange={(e) => {
                                                    setPassword(e.target.value);
                                                }}
                                                type="password"
                                                placeholder="M???t kh???u"
                                                // className="form-control"
                                                validations={[required]}
                                            />
                                            <img src="/images/lock.png" alt="lock" />
                                        </div>
                                        <div className="fpContainer">
                                            <div></div>
                                            <button className="fogot-password-btn"> Qu??n m???t kh???u? </button>
                                        </div>
                                        <div className="btnContainer">
                                            <div className="homeBtn btn">
                                                <div className="icon">
                                                    <img src="/images/home.png" alt="icon" />
                                                </div>
                                                Trang ch???
                                            </div>
                                            <button className="btn btn-info btn-block login loginBtn" type="submit"
                                                onClick={onSubmit}
                                            >
                                                <div className="icon">
                                                    <img src="/images/check.png" alt="icon" />
                                                </div>
                                                ????ng nh???p
                                            </button>
                                        </div>
                                        <CheckButton className="checkBtn" ref={c => { checkBtn = c }} />
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <LoadingOverlay open={isLoading} />
                <Modal isOpen={modal} toggle={toggle} centered={true}>
                    <ModalHeader toggle={toggle}>Th??ng b??o</ModalHeader>
                    <ModalBody>
                        <p>????ng nh???p th???t b???i!</p>
                        <p>M???t kh???u ho???c t??i kho???n kh??ng ch??nh x??c!</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={toggle}>OK</Button>
                    </ModalFooter>
                </Modal>
            </div>
        </>
    );
}

export default Login;
