import { Nav, Navbar, NavDropdown, Container, Button } from "react-bootstrap";
import "../App.css";

function NavBar() {
    return (
        <Navbar variant="dark" expand="lg" className="navbar-color">
            <Container>
                <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Customer Dropdown" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/customer">Customer</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/customer/add">Add Customer</NavDropdown.Item>
                            <NavDropdown.Item href="/customer/delete">Delete Customer</NavDropdown.Item>
                            <NavDropdown.Item href="/customer/update">Update Customer</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Product Dropdown" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/product">Product</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/product/add">Add Product</NavDropdown.Item>
                            <NavDropdown.Item href="/product/delete">Delete Product</NavDropdown.Item>
                            <NavDropdown.Item href="/product/update">Update Product</NavDropdown.Item>
                        </NavDropdown>
                        <Button variant="success">Login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
