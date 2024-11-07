import React from 'react';
import Folder from './Folder.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { NavDropdown } from 'react-bootstrap';
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
      <Nav fill defaultActiveKey="/home" className="flex-lg-row">
        <Nav.Item>
        <Nav.Link href="">Home</Nav.Link>
      </Nav.Item>
      <NavDropdown title="Manage" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Favorites</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Delete</NavDropdown.Item>
            </NavDropdown>
      <Nav.Item>
        <Nav.Link href="">Customize</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="">
          Login
        </Nav.Link>
      </Nav.Item>
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
          <ul>
            <li>
              <ChevronRight />
              <span className='ms-2'>Folder 1</span>
            </li>
          </ul>
        </li>
      </ul>
  </Col>
    {/* <Col className="sidebar">
      <Container>
        <Row className="d-flex flex-column">
          <Col>
            <img src={'src/svg/chevron-double-right.svg'}/>
          </Col>
          <Col>
            <img src={'src/svg/filter.svg'}/>
          </Col>
          <Col>
            <img src={'src/svg/bookmark-heart-fill.svg'}/>
          </Col>
        </Row>
      </Container>
    </Col> */}
    {/* <Col>
    <div class="container-fluid">
    <div class="row flex-nowrap flex-column flex-lg-row">
            <div class="col-3 d-flex flex-lg-column p-3 sidebar sidebar-width">
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                  <h4>Portal de administración</h4>
                </a>
                <hr/>
                <ul class="nav nav-pills flex-column mb-auto">
                  <li class="nav-item">
                    <a href="" class="nav-link text-white">
                      Users
                    </a>
                  </li>
                </ul>
            </div>
            <div class="col py-3 overflow-y-scroll" id="tabla-container">
            </div>
        </div>
    </div>
    </Col> */}
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
            <Row className='flex-nowrap flex-column flex-lg-row'>
              <Sidebar />
              <Col className='my-5'>
                <Folder id='1' title='Test' />
                <Folder id='2' title='Test2' />
                <Folder id='3' title='Test3' />
                <Folder id='4' title='Test4' />
                {/* <Folder id='1' title='Test' />
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
                <Folder id='4' title='Test4' /> */}
              </Col>
              {/* <Col>
                <Folder id='1' title='Test' />
              </Col>
              <Col>
                <Folder id='2' title='Test2' />
              </Col>
              <Col>
                <Folder id='3' title='Test3' />
              </Col>
              <Col>
                <Folder id='4' title='Test4' />
              </Col>
              <Col>
                <Folder id='1' title='Test' />
              </Col>
              <Col>
                <Folder id='2' title='Test2' />
              </Col>
              <Col>
                <Folder id='3' title='Test3' />
              </Col>
              <Col>
                <Folder id='4' title='Test4' />
              </Col>
              <Col>
                <Folder id='1' title='Test' />
              </Col>
              <Col>
                <Folder id='2' title='Test2' />
              </Col>
              <Col>
                <Folder id='3' title='Test3' />
              </Col>
              <Col>
                <Folder id='4' title='Test4' />
              </Col> */}
            </Row>
            {/* <Row>
              <Col className="d-flex justify-content-center">
                <Button variant="outline-primary">Test</Button>{' '}
              </Col>
            </Row> */}
        </Container>
    );
}
