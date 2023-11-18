import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../Styles/Navbar.css";

function ColorSchemesExample() {
  return (
    <>
      <nav>
        <Navbar data-bs-theme="dark" sticky="top" className="Navbar">
          <Container>
            <Navbar.Brand href="/">Weather Station 🌥️</Navbar.Brand>
            <Nav className="Nav">
              <Nav.Link href="/" style={{ color: "white" }}>
                Sensor Data
              </Nav.Link>
              <Nav.Link href="/Graphs" style={{ color: "white" }}>
                Graphs
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </nav>
    </>
  );
}

export default ColorSchemesExample;
