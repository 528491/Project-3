import React from "react";
import { Card, CardText,
    CardTitle,  Row, Col } from 'reactstrap';

const CardDisplay = (props) => {
    return (
        <Row>
            <Col sm="4">
                <Card body>
                <CardTitle>One Calendar for the Whole Family</CardTitle>
                <CardText>Keep all calendar events in a single place</CardText>
                {/* <Button>Go somewhere</Button> */}
                </Card>
            </Col>

            <Col sm="4">
                <Card body>
                <CardTitle>Seamless Event Scheduling</CardTitle>
                <CardText>Easily schedule events without back and forths about time and place</CardText>
                {/* <Button>Go somewhere</Button> */}
                </Card>
            </Col>

            <Col sm="4">
                <Card body>
                <CardTitle>Effortless Messaging</CardTitle>
                <CardText>Keep all Family-Related conversations in one place</CardText>
                {/* <Button>Go somewhere</Button> */}
                </Card>
            </Col>
        </Row>
    );
};
export default CardDisplay;
