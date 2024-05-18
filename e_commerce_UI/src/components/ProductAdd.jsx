import { useState } from "react";
import { Form, InputGroup, Container, Button } from "react-bootstrap";
import NavBar from "./NavBar";
import axios from "axios";

function ProductAdd() {
    const [price, setPrice] = useState("");
    const [name, setName] = useState("");

    const addProduct = async () => {
        try {
            const response = await axios.post("http://127.0.0.1:5000/products", {
                name: name,
                price: price,
            });
            alert(response.data.message);

            setPrice("");
            setName("");
        } catch (error) {
            console.error(error);
        }
    };

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
                        placeholder="Price"
                        aria-label="Price"
                        aria-describedby="basic-addon2"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </InputGroup>

                <Button onClick={addProduct} variant="success" disabled={!name || !price}>
                    Add Product
                </Button>
            </Container>
        </div>
    );
}

export default ProductAdd;
