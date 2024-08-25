import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Weddings from './pages/weddings/Weddings';
import './NavbarStyles.css'
const VerticalNavbar = () => {
  return (
    <BrowserRouter>
      <Container fluid style={{
        display: 'flex',
        padding: 0,
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),url(/backgrounds/rings_bg.jpg)`,
        backgroundSize: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <Container className='nav-bar'>
          <Navbar className="flex-column" >

            <Nav className="flex-column">
              <Nav.Link
                as={NavLink}
                to="/"
                className="nav-button">

                Weddings
              </Nav.Link>

            </Nav>

          </Navbar>
        </Container>
        <Container fluid className='scrollable-container' style={{ flex: 1, padding: '12px' }}>
          <Routes>
            <Route path="/" element={<Weddings />} />
          </Routes>
        </Container>
      </Container>
    </BrowserRouter>
  );
};

export default VerticalNavbar;
