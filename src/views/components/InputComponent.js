import React from 'react';
import { Row, Col } from 'reactstrap';
import Input from 'react-validation/build/input';
import Textarea from 'react-validation/build/textarea'
import Form from 'react-validation/build/form';
import Select from 'react-validation/build/select'
import CheckButton from 'react-validation/build/button';

function InputComponent({ required, title, placeholder, type, showTitle }) {
    return (
        <>
            <Form>
                {
                    type === 'textare'
                        ?
                        <div className="inputContainer">
                            {
                                showTitle === false
                                    ?
                                    <div className="untittle"></div>
                                    :
                                    <label htmlFor={title}>
                                        <div>
                                            <div className="dot"></div>
                                        </div>
                                        {title}
                                        {
                                            required.length > 0
                                                ?
                                                <span>*</span>
                                                :
                                                <>
                                                </>
                                        }
                                    </label>
                            }
                            <Textarea
                                type="textarea"
                                name={title}
                                onChange={(text) => {
                                }}
                                placeholder={placeholder}
                                className="input textarea"
                                validations={[required]}
                            ></Textarea>
                        </div>
                        :
                        <div className="inputContainer">
                            {
                                showTitle === false
                                    ?
                                    <div className="untittle"></div>
                                    :
                                    <label htmlFor={title}>
                                        <div>
                                            <div className="dot"></div>
                                        </div>
                                        {title}
                                        {
                                            required.length > 0
                                                ?
                                                <span>*</span>
                                                :
                                                <>
                                                </>
                                        }
                                    </label>
                            }
                            <Input
                                name="title"
                                onChange={(text) => {
                                }}
                                placeholder={placeholder}
                                className="input"
                                validations={required}
                            ></Input>
                        </div>
                }
                <CheckButton className="checkBtn" />
            </Form>
        </>
    );
}

export default InputComponent;
