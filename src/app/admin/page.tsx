import { Col, Container, Row, Table } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';
import { adminProtectedPage } from '@/lib/page-protection';
import { auth } from '@/lib/auth';
import { mockupEvent } from '@/lib/validationSchemas';
import Link from 'next/link';
import NewPostButton from '@/components/NewPostButton';

const AdminPage = async () => {
  const session = await auth();
  adminProtectedPage(
    session as {
      user: { email: string; id: string; name: string };
    } | null,
  );
  const users = await prisma.user.findMany({});
  const events: readonly mockupEvent[] = [
    {
      title: "Career Fair",
      date: "November 30, 2026",
      location: "Campus Center Ballroom",
      postedBy: "john@foo.com",
      eventId: "341234124",
    },
  ];
  return (
    <main>
      <Container id="list" fluid className="py-3">
        <h1>Welcome, admin!</h1>
        <Row>
          <Col>
            <h2>Manage events</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Event title</th>
                  <th>Date</th>
                  <th>Location</th>
                  <th>Posted by</th>
                  <th>Manage</th>
                </tr>
              </thead>
              <tbody>
                {events.map(event => (
                  // todo: abstract into component once event shape is set
                  <tr key={event.eventId}>
                    <td><Link href={`/event/${event.eventId}`}>{event.title}</Link></td>
                    <td>{event.date}</td>
                    <td>{event.location}</td>
                    <td>{event.postedBy}</td>
                    <td><Link href={`/event/edit/${event.eventId}`}>Edit</Link></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Manage Users</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    {/* todo: change after adding name to users */}
                    <td>John Function</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <NewPostButton />
      </Container>
    </main>
  );
};

export default AdminPage;
