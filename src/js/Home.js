import React from 'react';
import Folder from './Folder.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function Header() {
    return (
        <Row>
            <Col>
                <h1>Header</h1>
                {/* <img src={'src/img/header-test.png'} /> */}
            </Col>
        </Row>
    );
}


function Navbar() {
    return (
        <Nav fill variant="tabs" defaultActiveKey="/home" className="flex-column flex-lg-row">
      <Nav.Item>
        <Nav.Link href="">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="">Manage</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="">Customize</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>Search</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Login
        </Nav.Link>
      </Nav.Item>
    </Nav>
    );
}


// TODO: self-referencing relationship / recursive relationship:
// --    folder: title, icon, (...), parent_id references folder(id) nullable

export default function Home() {
    return (
        <Container fluid>
            <Header />
            <hr />
            <Navbar />
            <hr />
            <Row>
              <Col>
                <Folder id='1' title='Test' />
              </Col>
              <Col>
                <Folder id='2' title='Test2' />
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center">
                <Button variant="outline-primary">Test</Button>{' '}
              </Col>
            </Row>
        </Container>
    );
}
