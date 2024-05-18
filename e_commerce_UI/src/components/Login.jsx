import React, { useState } from "react";
import NavBar from "./NavBar";

function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    // create a login page
    return (
        <div>
            <NavBar />
            <Container className="customer-add">
                <InputGroup className="mb-3 px-5">
                    <Form.Control
                        placeholder="Name"
                        aria-label="Name"
                        aria-describedby="basic-addon2"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </InputGroup>

                <InputGroup className="mb-3 px-5">
                    <Form.Control
                        placeholder="Password"
                        aria-label="Password"
                        aria-describedby="basic-addon2"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </InputGroup>

                <Button onClick={addProduct} variant="success" disabled={!name || !price}>
                    Login
                </Button>
            </Container>
        </div>
    );
}

export default Login;
