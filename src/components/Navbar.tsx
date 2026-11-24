'use client';

import { useSession } from 'next-auth/react'; // v5 compatible
// import { usePathname } from 'next/navigation';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BoxArrowRight, Lock, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';
import Link from 'next/link';

const NavBar: React.FC = () => {
  const { data: session, status } = useSession();
  // const pathName = usePathname();
  if (status === 'loading') return null;
  const currentUser = session?.user?.email;
  //todo: add admin link if user is admin
  // const role = session?.user?.role;
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} href="/">
          <Image src="/logo.png" alt="Find the Function" height={80} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="rounded-button">
          <Nav className="ms-auto">
            {session ? (
              <NavDropdown id="login-dropdown" title={currentUser}>
                <NavDropdown.Item as={Link} id="login-dropdown-sign-out" href="/api/auth/signout">
                  <BoxArrowRight />
                  {' '}
                  Sign Out
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} id="login-dropdown-change-password" href="/auth/change-password">
                  <Lock />
                  {' '}
                  Change Password
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
