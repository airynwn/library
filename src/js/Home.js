import React from 'react';
import Folder from './Folder.js';
import { Button, Col, Container, Form, Nav, NavDropdown, Row } from 'react-bootstrap';
import { BookmarkHeartFill, ChevronRight, Filter, FolderFill, Pen, PencilFill, PenFill, Plus, Trash, Trash3Fill, TrashFill, X } from 'react-bootstrap-icons';

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
    <Nav className="navbar text-white">
      <Container fluid className="mx-5">
        <Nav.Item>
          <Nav.Link href="">Home</Nav.Link>
        </Nav.Item>
        <div className="d-flex">
        <NavDropdown title="Manage" id="basic-nav-dropdown">
          <NavDropdown.Item href="">Favorites</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="">Delete</NavDropdown.Item>
        </NavDropdown>
        <Nav.Item>
          <Nav.Link href="">Customize</Nav.Link>
        </Nav.Item>
        </div>
        <Nav.Item>
          <Nav.Link href="">Login</Nav.Link>
        </Nav.Item>
      </Container>
    </Nav>
    );
}

function Sidebar() {
  return (
    <>
    {/* > 991 */}
    <Col className="col-2 d-flex flex-lg-column p-3 sidebar sidebar-width">
      <Container className="sidebar-icons">
        <Row className='text-center'>
          <Col>
            <Filter size={32} />
          </Col>
          <Col>
            <BookmarkHeartFill size={32} />
          </Col>
          <Col>
            <Plus size={32} />
          </Col>
        </Row>
      </Container>
      <hr/>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <div className="folder-group">
            <div>
              <FolderFill />
              <span className='ms-2'>Group 1</span>
            </div>
            <div>
              <PencilFill />
              <Trash3Fill className='ms-2' />
            </div>
          </div>
          <ul className='my-3'>
            <li>
              <ChevronRight />
              <span className='ms-2'>Folder 1</span>
            </li>
          </ul>
        </li>
      </ul>
  </Col>
    </>
  );
}


// TODO: self-referencing relationship / recursive relationship:
// --    folder: title, icon, (...), parent_id references folder(id) nullable

export default function Home() {
    return (
        <Container fluid className='p-0'> 
            {/* <Header /> */}
            <Navbar />
            <Row className='flex-nowrap flex-column flex-lg-row m-0'>
              <Sidebar />
              <Col className="text-center">
                <Container fluid>
                  <Col className="mx-5 my-5 flex-grow-0">
                    <Button variant="outline-success">Search</Button>
                  </Col>
                  <Col className='my-5'>
                    <Folder id='1' title='Test' />
                    <Folder id='2' title='Test2' />
                    <Folder id='3' title='Test3' />
                    <Folder id='4' title='Test4' />
                    <Folder id='1' title='Test' />
                    <Folder id='2' title='Test2' />
                    <Folder id='3' title='Test3' />
                    <Folder id='4' title='Test4' />
                    <Folder id='1' title='Test' />
                    <Folder id='2' title='Test2' />
                    <Folder id='3' title='Test3' />
                    <Folder id='4' title='Test4' />
                    <Folder id='1' title='Test' />
                    <Folder id='2' title='Test2' />
                    <Folder id='3' title='Test3' />
                    <Folder id='4' title='Test4' />
                    <Folder id='1' title='Test' />
                    <Folder id='2' title='Test2' />
                    <Folder id='3' title='Test3' />
                    <Folder id='4' title='Test4' />
                  </Col>
                </Container>
              </Col>
            </Row>
        </Container>
    );
}
