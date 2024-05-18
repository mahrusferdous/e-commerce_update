import { useState } from "react";
import { Form, InputGroup, Container, Button } from "react-bootstrap";
import NavBar from "./NavBar";
import axios from "axios";

function CustomerUpdate() {
    const [updateCust, setUpdateCust] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const updateCustomer = async () => {
        try {
            const response = await axios.put(`http://127.0.0.1:5000/customers/${updateCust}`, {
                name: name,
                email: email,
                phone: phone,
            });
            alert(response.data.message);
            setName("");
            setEmail("");
            setPhone("");
            setUpdateCust("");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <NavBar />
            <Container className="customer-update">
                <InputGroup className="mb-3 px-5">
                    <Form.Control
                        placeholder="Customer ID"
                        aria-label="Customer ID"
                        aria-describedby="basic-addon2"
                        value={updateCust}
                        onChange={(e) => setUpdateCust(e.target.value)}
                    />
                </InputGroup>
                <InputGroup className="mb-3 px-5">
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    <Form.Control
                        placeholder="Name"
                        aria-label="Name"
                        aria-describedby="basic-addon1"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </InputGroup>

                <InputGroup className="mb-3 px-5">
                    <Form.Control
                        placeholder="Email"
                        aria-label="Email"
                        aria-describedby="basic-addon2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3 px-5">
                    <InputGroup.Text id="basic-addon2">+1</InputGroup.Text>
                    <Form.Control
                        placeholder="Phone Number"
                        aria-label="Phone Number"
                        aria-describedby="basic-addon2"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </InputGroup>
                <Button
                    variant="primary"
                    onClick={updateCustomer}
                    disabled={!updateCust || !name || !email || !phone}
                >
                    Update Customer
                </Button>
            </Container>
        </div>
    );
}

export default CustomerUpdate;
