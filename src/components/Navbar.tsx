'use client';

import { useSession } from 'next-auth/react'; // v5 compatible
import { usePathname } from 'next/navigation';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BoxArrowRight, Lock, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';
import React from 'react';
import Link from 'next/link';
import './search.css';

const NavBar: React.FC = () => {
  const { data: session, status } = useSession();
  const pathName = usePathname();
  if (status === 'loading') return null;
  const currentUser = session?.user?.email;
  const role = session?.user?.role;
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} href="/">Find the Function</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-start">
            {currentUser && (
              <>
                <Nav.Link as={Link} id="interests-nav" href="/interests" active={pathName === '/interests'}>
                  Interests
                </Nav.Link>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"></link>
                  <div className="row justify-content-center">
                    <div className="search-container">
                      <input type="text" className="form-control search-input" placeholder="Search..." />
                      <i className="fas fa-search search-icon"></i>
                    </div>
                  </div>
              </>
            )}
            {currentUser && role === 'ADMIN' && (
              <Nav.Link as={Link} id="admin-stuff-nav" href="/admin" active={pathName === '/admin'}>
                Admin
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {session ? (
              <NavDropdown id="login-dropdown" title={currentUser}>
                <NavDropdown.Item as={Link} id="login-dropdown-profile" href="/profile">
                  <PersonFill />
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} id="login-dropdown-change-password" href="/auth/change-password">
                  <Lock />
                  Change Password
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} id="login-dropdown-sign-out" href="/api/auth/signout">
                  <BoxArrowRight />
                  Sign Out
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown id="login-dropdown" title="Login">
                <NavDropdown.Item as={Link} id="login-dropdown-sign-in" href="/auth/signin">
                  <PersonFill />
                  Sign in
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} id="login-dropdown-sign-up" href="/auth/signup">
                  <PersonPlusFill />
                  Sign up
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
