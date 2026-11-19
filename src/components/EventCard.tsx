"use client";

import Card from 'react-bootstrap/Card';
import styles from "./EventCard.module.css";
import { Image } from 'react-bootstrap';

function EventCard() {
  return (
    <div className="d-flex flex-column align-items-center gap-5 py-4">
      {[1, 2, 3].map((i) => (
        <Card key={i} className={`w-100 shadow-sm border-0 ${styles.card}`}>
          <div className="d-flex h-100">
            <Image src="./party.jpg" alt="Event" className={styles.image} />
          </div>
          <Card.Body>
            <Card.Title className={styles.title}>Event Title</Card.Title>
            <Card.Subtitle className={`mb-2 ${styles.subtitle}`}>Event Subtitle</Card.Subtitle>
            <Card.Text>
              Event description goes here. This is a brief summary of the event details.
            </Card.Text>
            <Card.Link href="#" className={styles.link}>Event Link</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default EventCard;