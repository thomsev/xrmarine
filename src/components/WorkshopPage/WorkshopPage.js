import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench, faEngineWarning } from "@fortawesome/free-solid-svg-icons";

// Import images (assuming you have these images in your public folder or assets)
import image2Placeholder from "./path/to/image2Placeholder.jpg";
import image3Placeholder from "./path/to/image3Placeholder.jpg";

const WorkshopPage = () => {
  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h1>Verksted</h1>
          <p>
            Vårt verksted er godt utrustet for reparasjon av båt, utenbords og
            innenbordsmotor. Vi er forhandler av Volvo Penta, samt Honda og
            Tohatsu utenbordsmotorer og fører et stort delelager. Våre
            mekanikere har bred erfaring av reparasjon av båt og motor på privat
            og næringsmarkedet.
          </p>

          <h2>Vi tilbyr:</h2>
          <ul>
            <li>
              Diagnose utstyr for nesten alle utenbordsmotorer samt innenbords
              motorer
            </li>
            <li>Service på de fleste motorer</li>
            <li>
              <FontAwesomeIcon icon={faWrench} /> Motor og gir reparasjoner
            </li>
            <li>Motor bytte, gir bytte</li>
            <li>
              Kontroll/rengjøring/justering av brennstoff injektorer, 1 trinns
            </li>
            <li>Akseltrekk</li>
            <li>Lager bytte</li>
            <li>Oppretting av motor, gir og pumper</li>
            <li>Overhaling av el-motorer</li>
            <li>Overhaling av pumper</li>
            <li>Overhaling av ventiler</li>
            <li>Hydrauliske anlegg</li>
            <li>Overbord ventiler samt gjennomføringer</li>
            <li>Bunnsmøring, polering og vedlikehold av båt</li>
            <li>
              <FontAwesomeIcon icon={faEngineWarning} /> FLIR termofotografering
              for feilsøking
            </li>
            <li>Feilsøking på mekanisk samt elektrisk marine</li>
            <li>
              Navigasjons anlegg, feilsøking, oppdatering, bytte av komponenter
              eller komplett anlegg
            </li>
            <li>+++</li>
          </ul>
          <p>
            I senere tid har vi tatt på oss en del større jobber for kunder som
            vi har hatt gode tilbakemeldinger på, både privat kunder samt
            næringskunder. Vi har stor kai kapasitet med flytebrygger samt
            dypvannskai, kan ikke kunde komme til oss, kommer vi til kunden. Vår
            service bil er godt utstyrt
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={image2Placeholder} />
            <Card.Body>
              <Card.Title>Motor og gir reparasjoner</Card.Title>
              <Card.Text>
                Detaljert informasjon om motor og gir reparasjoner.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={image3Placeholder} />
            <Card.Body>
              <Card.Title>Bunnsmøring, polering og vedlikehold</Card.Title>
              <Card.Text>
                Detaljert informasjon om bunnsmøring, polering og vedlikehold.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WorkshopPage;
