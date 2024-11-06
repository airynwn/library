import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function Folder({id, title}) {
    return (
        <Container>
            <Row>
                <Col className=" d-flex flex-column align-items-center">
                    <img src={'src/svg/folder.svg'} className="icon" />
                    <span>{title}</span>
                </Col>
            </Row>
        </Container>
    );
}