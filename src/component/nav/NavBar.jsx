import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from '../button/Button';

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" className='border-[1px] rounded m-2 shadow-md'>
        <Container>
          <Navbar.Brand href="#home" className="  text-[#45d87d] font-weight-bold">
            
            <span  className='text-white'>{'<'}</span> <span className="  text-[#45d87d]"  style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}> Arif_Ahmmad </span><span className='text-white'>{'/>'}</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home" className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link href="#features" className="nav-link">
                About Me
              </Nav.Link>
              <Nav.Link href="#pricing" className="nav-link">
                Skills
              </Nav.Link>
              <Nav.Link href="#pricing" className="nav-link">
                Work
              </Nav.Link>
            </Nav>
            <Button value={'Contact'} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </>
  );
};

export default NavBar;
