import { useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import { Form, InputGroup, Container, Button } from "react-bootstrap";

function CustomerDelete() {
    const [deleteCust, setDeleteCust] = useState();

    const deleteCustomer = async () => {
        try {
            const response = await axios.delete(`http://127.0.0.1:5000/customers/${deleteCust}`);
            alert(response.data.message);
            console.log(response.data);
            setDeleteCust("");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <NavBar />
            <Container className="customer-delete">
                <InputGroup className="mb-3 px-5">
                    <Form.Control
                        placeholder="Customer ID"
                        aria-label="Customer ID"
                        aria-describedby="basic-addon2"
                        value={deleteCust}
                        onChange={(e) => setDeleteCust(e.target.value)}
                    />
                </InputGroup>
                <Button variant="danger" onClick={deleteCustomer} disabled={deleteCust === ""}>
                    Delete Customer
                </Button>
            </Container>
        </div>
    );
}

export default CustomerDelete;
