import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

import aidalo from "./assets/aidalo.jpeg";
import meteo from "./assets/meteo.png";
import restau from "./assets/restau.jpg";
import image from "./assets/image.png";


function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Aida Lo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#accueil">Accueil</Nav.Link>
              <Nav.Link href="#apropos">À propos</Nav.Link>
              <Nav.Link href="#competences">Compétences</Nav.Link>
              <Nav.Link href="#projets">Projets</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section id="accueil" className="min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="align-items-center">
            <Col md={12} className="text-center text-white">
              <h1 className="display-4 fw-bold mb-3">
                <Typewriter
                  options={{
                    strings: ['Hello World!', 'Je suis Aida Lo', 'Développeuse Full Stack'],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                  }}
                />
              </h1>
              <p className="lead mb-4">
                Passionnée par la création d'applications web innovantes
              </p>
              <Button variant="primary" href="#contact" className="me-3">
                Me Contacter
              </Button>
              <Button variant="outline-light" href="#projets">
                Voir mes Projets
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="apropos">
        <Container>
          <h2 className="text-center mb-5">À Propos de Moi</h2>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <h3 className="mb-4">Qui suis-je ?</h3>
              <p className="lead">
                Je suis une développeuse Full Stack passionnée par la création d'applications web modernes et innovantes.
              </p>
              <p>
                Avec une solide expérience en développement front-end et back-end, je m'efforce de créer des solutions élégantes et performantes qui répondent aux besoins des utilisateurs.
              </p>
              <p>
                <span className="text-highlight">Ma mission :</span> Transformer vos idées en réalité numérique avec des solutions sur mesure et innovantes.
              </p>
            </Col>
            <Col md={6} className="text-center">
              <img
                src={aidalo}
                alt="Aida Lo"
                className="profile-image"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section id="competences" className="py-5">
        <Container>
          <h2 className="text-center mb-5">Mes Compétences</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <FaCode className="display-4 mb-3 text-primary" />
                  <Card.Title>Front-end</Card.Title>
                  <Card.Text>
                    React, HTML5, CSS3, JavaScript, Bootstrap, Taildwin CSS
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <FaCode className="display-4 mb-3 text-success" />
                  <Card.Title>Back-end</Card.Title>
                  <Card.Text>
                    Node.js, Express, MongoDB, API REST
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <FaCode className="display-4 mb-3 text-info" />
                  <Card.Title>Outils</Card.Title>
                  <Card.Text>
                    Git, VS Code, Postman, Trello,Linux
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="projets" className="py-5">
        <Container>
          <h2 className="text-center mb-5">Mes Projets</h2>
          <Row>
            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={meteo} />
                <Card.Body>
                  <Card.Title>Projet 1</Card.Title>
                  <Card.Text>
                 applications de bulltin  Météo avec les technologies apiREST, Taildwincss , JavaScript.
                  </Card.Text>
                  <Button variant="primary" size="sm">Voir le Projet</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={restau} />
                <Card.Body>
                  <Card.Title>Projet 2</Card.Title>
                  <Card.Text>
                    Gestion  restaurant avec html css , bootstrap
                  </Card.Text>
                  <Button variant="primary" size="sm">Voir le Projet</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>Projet 3</Card.Title>
                  <Card.Text>
                     Gestion Hospital  avec authentification,  react , reat bootstrap  , bootstrap Node.js, Express, MongoDB.
                  </Card.Text>
                  <Button variant="primary" size="sm">Voir le Projet</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="contact" className="py-5">
        <Container>
          <h2 className="text-center mb-5">Contact</h2>
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <div className="d-flex justify-content-center gap-4 mb-4 social-links">
                <a href="#" className="fs-2"><FaGithub /></a>
                <a href="#" className="fs-2"><FaLinkedin /></a>
                <a href="#" className="fs-2"><FaEnvelope /></a>
              </div>
              <Card className="shadow-sm">
                <Card.Body>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Nom</label>
                      <input type="text" className="form-control" id="name" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" className="form-control" id="email" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea className="form-control" id="message" rows="5" required></textarea>
                    </div>
                    <Button variant="primary" type="submit" className="w-100">
                      Envoyer
                    </Button>
                  </form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="bg-dark text-white py-4">
        <Container className="text-center">
          <p className="mb-0">© 2023 Aida Lo - Développeuse Full Stack</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;