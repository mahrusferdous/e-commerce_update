import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { useMutation } from "react-query";
import { Form, InputGroup, Container, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [customer_id, setCustomer_id] = useState("");
    const [account, setAccount] = useState("");

    const addAccount = useMutation(async () => {
        try {
            const response = await axios.post(`http://127.0.0.1:5000/accounts`, {
                username: name,
                password: password,
                customer_id: customer_id,
            });
            alert(response.data.message);
            setName("");
            setPassword("");
            setCustomer_id("");
        } catch (error) {
            console.log(error.response.data.message);
        }
    });

    const findAccount = useMutation(async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:5000/accounts`);
            setAccount(response.data);
        } catch (error) {
            console.log(error.response.data.message);
        }
    });

    useEffect(() => {
        if (account) {
            account.map((acc) => {
                if (acc.username == name && acc.password == password) {
                    navigate("/");
                    alert("Login successful");
                } else {
                    alert("Login failed");
                }
            });
        }
    }, [account]);

    // create a login page
    return (
        <div>
            <NavBar />
            <Container className="customer-add">
                <InputGroup className="mb-3 px-5">
                    <Form.Control
                        placeholder="Customer Id"
                        aria-label="Customer Id"
                        aria-describedby="basic-addon2"
                        value={customer_id}
                        onChange={(e) => setCustomer_id(e.target.value)}
                    />
                </InputGroup>

                <InputGroup className="mb-3 px-5">
                    <Form.Control
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon2"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </InputGroup>

                <InputGroup className="mb-3 px-5">
                    <Form.Control
                        type="password"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        placeholder="Password"
                        aria-label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </InputGroup>

                <Button
                    onClick={() => addAccount.mutate()}
                    variant="success"
                    disabled={!name || !password || !customer_id}
                >
                    Create Account
                </Button>
            </Container>
            <Container className="customer-add">
                <InputGroup className="mb-3 px-5">
                    <Form.Control
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon2"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </InputGroup>

                <InputGroup className="mb-3 px-5">
                    <Form.Control
                        type="password"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        placeholder="Password"
                        aria-label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </InputGroup>

                <Button onClick={() => findAccount.mutate()} variant="primary" disabled={!name || !password}>
                    Login
                </Button>
            </Container>
        </div>
    );
}

export default Login;
