import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { useMutation } from "react-query";
import { Form, InputGroup, Container, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [customer_id, setCustomer_id] = useState("");
    const [account, setAccount] = useState("");
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");

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
                if (acc.username == username && acc.password == pass) {
                    dispatch(login({ name: acc.username, isLogged: true }));
                    alert("Login successful");
                    navigate("/");
                    setUsername("");
                    setPass("");
                }
            });
        }
    }, [username, pass, account]);

    return (
        <div>
            <NavBar />
            <div style={{ display: "flex" }}>
                <Container className="customer-add m-5">
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
                            // id="inputPassword5"
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

                <Container className="customer-add m-5">
                    <InputGroup className="mb-3 px-5">
                        <Form.Control
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon2"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </InputGroup>

                    <InputGroup className="mb-3 px-5">
                        <Form.Control
                            type="password"
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                            placeholder="Password"
                            aria-label="Password"
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                        />
                    </InputGroup>

                    <Button onClick={() => findAccount.mutate()} variant="primary" disabled={!username || !pass}>
                        Login
                    </Button>
                </Container>
            </div>
        </div>
    );
}

export default Login;
