import { Nav, Navbar, NavDropdown, Container, Button, Badge } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import "../App.css";
import { logout } from "../features/userSlice";
import { CartFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

function NavBar() {
    const user = useSelector((state) => state.user);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
    };

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

                        <Container
                            onClick={() => navigate("/cart")}
                            className="d-flex flex-row justify-content-around align-items-center"
                        >
                            <CartFill color="white"></CartFill>
                            <Badge bg="secondary">{cart.cart.length}</Badge>
                        </Container>

                        {user.isLogged ? (
                            <div style={{ display: "flex" }}>
                                <Nav.Link disabled className="mx-3">
                                    {user.name}
                                </Nav.Link>
                                <Button variant="danger" href="/" onClick={handleLogout} className="mx-3">
                                    Logout
                                </Button>
                            </div>
                        ) : (
                            <Button variant="success" href="/login">
                                Login/Create
                            </Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
