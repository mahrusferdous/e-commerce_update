import { useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import { Form, InputGroup, Container, Button } from "react-bootstrap";
import { useMutation } from "react-query";

function ProductDelete() {
    const [deleteProd, setDeleteProd] = useState("");

    const deleteProduct = useMutation(async (id) => {
        try {
            const response = await axios.delete(`http://127.0.0.1:5000/products/${id}`);
            alert(response.data.message);
            setDeleteProd("");
        } catch (error) {
            console.log(error.response.data.message);
        }
    });

    return (
        <div>
            <NavBar />
            <Container className="customer-delete">
                <InputGroup className="mb-3 px-5">
                    <Form.Control
                        placeholder="Product ID"
                        aria-label="Product ID"
                        aria-describedby="basic-addon2"
                        value={deleteProd}
                        onChange={(e) => setDeleteProd(e.target.value)}
                    />
                </InputGroup>
                <Button variant="danger" onClick={() => deleteProduct.mutate(deleteProd)} disabled={!deleteProd}>
                    Delete Product
                </Button>
            </Container>
        </div>
    );
}

export default ProductDelete;
