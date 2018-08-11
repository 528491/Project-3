import React from "react";
import { Card, CardText,
    CardTitle,  Row, Col } from 'reactstrap';

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
