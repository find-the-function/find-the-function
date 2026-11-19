"use client";

import Card from 'react-bootstrap/Card';

function EventCard() {
  return (
 <div className="d-flex flex-column align-items-center gap-5 py-4">
      {[1, 2, 3].map((i) => (
        <Card
          key={i}
          className="w-100 shadow-sm border-0"
          style={{ maxWidth: '600px', borderRadius: '16px', height: '175px' }}
        >
          <Card.Body>
            <Card.Title>Event Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Event Subtitle</Card.Subtitle>
            <Card.Text>
              Event description goes here. This is a brief summary of the event details.
            </Card.Text>
            <Card.Link href="#">Event Link</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default EventCard;