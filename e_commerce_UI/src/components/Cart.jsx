import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./NavBar";
import { Card, Button } from "react-bootstrap";
import picture from "../assets/food.svg";
import { removeFromCart } from "../features/cartSlice";

function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleDispatch = (product) => {
        dispatch(removeFromCart(product));
    };

    return (
        <div>
            <NavBar />
            <div className="customer-page">
                {cart.cart.length !== 0 &&
                    cart.cart.map((product, index) => (
                        <Card key={index} style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={picture} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{product.product_id}</Card.Subtitle>
                                <Card.Text>Price: {product.price}</Card.Text>
                                <Button variant="danger" onClick={() => handleDispatch(product)}>
                                    Delete
                                </Button>
                            </Card.Body>
                        </Card>
                    ))}
            </div>
        </div>
    );
}

export default Cart;
