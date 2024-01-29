import React, { useEffect, useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
// import {Display} from './Display';

const LoginPage = () => {
    const [name, setName] = useState('');
    const nameRef = useRef(null);

    const [password, setPassword] = useState();
    const passwordRef = useRef(null);

    useEffect(() => {
        console.log("rendered");
    }, [name, password ]);

    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label htmlFor="name">Username:</Form.Label>
                    <Form.Control type='text' id="name" ref={nameRef} />
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="password">Password:</Form.Label>
                    <Form.Control type='password' id="password" ref={passwordRef} />
                </Form.Group>

                
            </Form>
            {/* <Display name={name} age={age} ></Display > */}
        </>
    );
};

export default LoginPage;
