import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useDebugValue, useState } from "react";
import "./App.css";

import Modal from "react-bootstrap/Modal";

function Navigationbar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/movielogo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            BookmyShow
          </Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              htmlSize="55"
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search for "
            />
            <Button variant="outline-success">Search </Button>
          </Form>
          <Button variant="danger" onClick={handleShow}>
            Signin{" "}
          </Button>

          <SigninModal
            show={show}
            handleClose={handleClose}
            handleShow={handleShow}
          />
        </Container>
      </Navbar>
    </>
  );
}

function SigninModal({ show, handleClose }) {
  return (
   
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignUpForm />
        </Modal.Body>
      </Modal>
   
  );
}

function SignUpForm() {
  const initialUsers = [{ email: "asdf@gmail.com", password: "asdf" }];
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [users, setUsers] = useState(initialUsers);
  console.log(users);

  const newUser = {
    email: email,
    password: password,
  };
  const handleSigninDetails = () => {
    setUsers([...users, newUser]);
  };

  return (
    <>
      <Form.Group
        className="mb-3"
        controlId="formEmail"
        value="shyamini@gmail.com"
      >
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSigninDetails}>
        Submit
      </Button>
    </>
  );
}
export default Navigationbar;
