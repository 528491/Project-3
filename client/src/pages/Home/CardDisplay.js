import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Row, Col, Button } from 'reactstrap';

const CardDisplay = (props) => {
    return (
        <Row>
            <Col sm="4">
                <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                {/* <Button>Go somewhere</Button> */}
                </Card>
            </Col>

            <Col sm="4">
                <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                {/* <Button>Go somewhere</Button> */}
                </Card>
            </Col>

            <Col sm="4">
                <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                {/* <Button>Go somewhere</Button> */}
                </Card>
            </Col>
        </Row>
    );
};
    
export default CardDisplay;