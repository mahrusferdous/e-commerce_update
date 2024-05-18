import { useState } from "react";
import { Form, InputGroup, Container, Button } from "react-bootstrap";
import NavBar from "./NavBar";
import axios from "axios";

function ProductUpdate() {
    const [updateProd, setUpdateProd] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const updateProduct = async () => {
        try {
            const response = await axios.put(`http://127.0.0.1:5000/products/${updateProd}`, {
                name: name,
                price: price,
            });
            alert(response.data.message);
            setUpdateProd("");
            setName("");
            setPrice("");
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
                        placeholder="Product ID"
                        aria-label="Product ID"
                        aria-describedby="basic-addon2"
                        value={updateProd}
                        onChange={(e) => setUpdateProd(e.target.value)}
                    />
                </InputGroup>

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
                        placeholder="Price"
                        aria-label="Price"
                        aria-describedby="basic-addon2"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </InputGroup>

                <Button
                    variant="primary"
                    onClick={updateProduct}
                    disabled={!updateProd || !name || !price}
                >
                    Update Product
                </Button>
            </Container>
        </div>
    );
}

export default ProductUpdate;
