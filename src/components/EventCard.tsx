"use client";

import { CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function EventCard() {
  return (
    <CardGroup style={{ width: '100rem', height: '10rem' }}>
    <Card>
      <Card.Body>
        <Card.Title>Event Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Event Subtitle</Card.Subtitle>
        <Card.Text>
          Event description goes here. This is a brief summary of the event details.
        </Card.Text>
        <Card.Link href="#">Event Link</Card.Link>
      </Card.Body>
    </Card>
    <Card>
      <Card.Body>
        <Card.Title>Event Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Event Subtitle</Card.Subtitle>
        <Card.Text>
          Event description goes here. This is a brief summary of the event details.
        </Card.Text>
        <Card.Link href="#">Event Link</Card.Link>
      </Card.Body>
    </Card>
    </CardGroup>
  );
}

export default EventCard;