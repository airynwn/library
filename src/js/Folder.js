import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Folder2 } from 'react-bootstrap-icons';

export default function Folder({id, title}) {
    return (
        <>
         {/* <Container>
             <Row>
                 <Col className=" d-flex flex-column align-items-center"> */}
                 <div className="d-inline-flex flex-column align-items-center mx-5">
                    {/* <img src={'src/svg/folder.svg'} className="icon" /> */}
                    <Folder2 className='icon' />
                    <span>{title}</span>
                 </div>
                 {/* </Col>
             </Row>
         </Container> */}
        </>
    );
}