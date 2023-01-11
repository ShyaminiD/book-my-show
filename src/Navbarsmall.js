import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navbarsmall() {
  return (
    <Navbar bg="light" variant="light">
      <Container style={{ marginLeft: "85px" }}>
        <Nav className="me-auto">
          <Nav.Link href="#Movies">Movies</Nav.Link>
          <Nav.Link href="#sports">Sports</Nav.Link>
          <Nav.Link href="#activities">Activities</Nav.Link>
        </Nav>
      </Container>

      <Container>
        <Nav className="me-auto">
          <Nav.Link href="#giftcards">Giftcards</Nav.Link>
          <Nav.Link href="#offers">Offers</Nav.Link>
          <Nav.Link href="#listyourshow">ListYourShow</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navbarsmall;
