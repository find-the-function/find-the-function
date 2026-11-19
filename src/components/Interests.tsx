"use client";
import { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

const INTERESTS = [
  { name: 'Food', icon: '🍜', description: 'Restaurants, eating, and cooking' },
  { name: 'Music', icon: '🎵', description: 'Concerts, open mics, and jam sessions' },
  { name: 'Computers', icon: '💻', description: 'Technology, coding, and gaming' },
  { name: 'Parties', icon: '🎉', description: 'Mixers, bonfires, and nights out' },
];

function Interests() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (name: string) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((i) => i !== name) : [...prev, name],
    );
  };

  return (
    <Container id="landing-page" fluid className="py-4" style={{ minHeight: '100vh' }}>
      <h1 className="text-center mb-2">Interests</h1>
      <p className="text-center mb-4">Pick everything you&apos;re into.</p>

      {/* Interest cards */}
      <Row className="g-4 justify-content-center mb-5 px-md-5">
        {INTERESTS.map(({ name, icon, description }) => {
          const active = selected.includes(name);
          return (
            <Col xs={12} sm={6} lg={3} key={name}>
              <Card
                role="button"
                onClick={() => toggle(name)}
                className={`h-100 text-center p-4 shadow-sm ${
                  active ? 'bg-light border-info border-3' : 'bg-info'
                }`}
              >
                <div style={{ fontSize: '4rem' }}>{icon}</div>
                <h4 className="mt-3">{name}</h4>
                <p className="mb-0 small">{description}</p>
              </Card>
            </Col>
          );
        })}
      </Row>

      {/* Your picks panel */}
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="shadow-sm text-center p-4">
            <h3 className="mb-3">Your picks</h3>

            {selected.length === 0 ? (
              <p className="text-muted mb-0">
                Nothing selected yet. Tap a card above to get started.
              </p>
            ) : (
              <>
                <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
                  {selected.map((name) => (
                    <Badge
                      key={name}
                      bg="info"
                      text="dark"
                      className="fs-6 py-2 px-3"
                      role="button"
                      onClick={() => toggle(name)}
                    >
                      {name} ✕
                    </Badge>
                  ))}
                </div>
                <div className="d-flex justify-content-center gap-2">
                  <Button variant="outline-secondary" onClick={() => setSelected([])}>
                    Clear all
                  </Button>
                  <Button variant="success" size="lg">
                    Continue
                  </Button>
                </div>
              </>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Interests;