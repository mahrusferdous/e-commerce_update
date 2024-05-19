import React from "react";

function Cart() {
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

export default Cart;
