import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import { Card } from "react-bootstrap";
import picture from "../assets/people.svg";
import { useQuery } from "react-query";

function Product() {
    const fetchData = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:5000/products");
            return response.data;
        } catch (error) {
            throw new Error("Network response was not ok");
        }
    };

    const { data: products, error, isLoading } = useQuery("products", fetchData);

    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>{error}</div>;

    return (
        <div>
            <NavBar />
            <div className="customer-page">
                {products.map((product, index) => (
                    <Card key={index} style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={picture} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{product.product_id}</Card.Subtitle>
                            <Card.Text>Price: {product.price}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Product;
