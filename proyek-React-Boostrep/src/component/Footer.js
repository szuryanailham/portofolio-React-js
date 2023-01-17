import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">japanese Culture</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="#login" className="text-decoration-none">
              CopyRight Japanese Culture 2023
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Footer;
