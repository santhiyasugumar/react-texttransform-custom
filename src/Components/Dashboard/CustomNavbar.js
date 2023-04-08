import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsArrowRightSquareFill } from "react-icons/bs";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Users from './Users';
import Input from './Input';
import Home from './Home';

function CustomNavbar({setUser}) {
  // eslint-disable-next-line
  const onClickevent = event => {
    sessionStorage.setItem("userLoggedIn" , "");
    setUser('');
  }
  
  return (
    // eslint-disable-next-line
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Text-Transformation</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="Home">Home</Nav.Link>
            <Nav.Link href="Input">Input</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text> 
              <a href="/" onClick= {onClickevent} ><BsArrowRightSquareFill/></a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Routes>
          <Route path="/Users" element={<Users />} />
          <Route path="/Input" element={<Input />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default CustomNavbar;