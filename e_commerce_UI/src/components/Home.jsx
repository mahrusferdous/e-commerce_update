import NavBar from "./NavBar";
import { Image, Container } from "react-bootstrap";
import "../App.css";
import picture from "../assets/e-commerce.svg";

function Home() {
    return (
        <div>
            <NavBar />
            <div className="home">
                <Image src={picture} alt="E-commerce" fluid />
                <Container className="home-page">
                    <h1 style={{ fontSize: "100px" }}>Welcome!</h1>
                    <h2 style={{ fontSize: "50px" }}>To E-commerce Site</h2>
                    <h3>Here you can find all the products you need</h3>
                </Container>
            </div>
        </div>
    );
}

export default Home;
