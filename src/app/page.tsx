import { Button, Col, Container, NavLink, Row, Stack } from 'react-bootstrap';
import './style.css';

/** The Home page. */
const Home = () => (
  <main>
    <Container id="landing-page" fluid className="py-3">
      <div className="text-center">
        <h1 style={{ fontFamily: 'Agency FB', fontSize: '7rem' }} className="py-5"><strong>Welcome!</strong></h1>
        <h4 className="pb-5" style={{ fontSize: '2rem' }}>
          Find the Function helps you find UH events that might be relevant to you.
        </h4>
        <h4 className="pb-0" style={{ fontSize: '2rem' }}>Please sign in to get started:</h4>
        <Button href="/auth/signin" className="align-middle text-center py-2"><h4>Sign In</h4></Button>
        <h4 className="pt-3" style={{ fontSize: '2rem' }}>Don't have an account? Register here:</h4>
        <Button href="/auth/signup" className="align-middle text-center py-2"><h4>Sign Up</h4></Button>
      </div>
    </Container>
  </main>
);

export default Home;
