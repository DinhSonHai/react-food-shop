import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [
              {
                "id": "15eac636-31f0-4c06-8c9a-35a61bd06ffb",
                "name": "Wine - Dubouef Macon - Villages",
                "description": "tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "ac74ec63-984d-4a89-a733-a6ee7919ea28",
                "name": "Bagels Poppyseed",
                "description": "sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "2b293735-efb3-47b7-ac21-4073ff5475b8",
                "name": "Wine - Harrow Estates, Vidal",
                "description": "est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": "128499be-a443-472f-b59b-59f43bfddd51",
                "name": "Cheese - Mozzarella, Buffalo",
                "description": "etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": "4c2ebf91-a170-46a0-b43f-b6eeac5c37de",
                "name": "Table Cloth 144x90 White",
                "description": "semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": "508175d8-32de-4700-b92e-a20eace8537f",
                "name": "Muffin Batt - Carrot Spice",
                "description": "imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "84586948-4797-4215-afa5-073cb4618956",
                "name": "Cup - Paper 10oz 92959",
                "description": "nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": "45297763-2349-4f9d-b010-1c61a90cb516",
                "name": "Mousse - Mango",
                "description": "proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": "101099e2-f37b-4eda-bd26-b6327ab35340",
                "name": "Veal - Slab Bacon",
                "description": "non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "bbb95e60-9ef8-4b7b-9dc3-da48807c255a",
                "name": "Sesame Seed Black",
                "description": "luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
              }, {
                "id": "ef8f94ca-b975-4b0a-9537-67c0bd37dd55",
                "name": "Rice - Jasmine Sented",
                "description": "non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
              }, {
                "id": "d615541a-4de2-47a4-9a4c-b3aa24fd4068",
                "name": "Sage Ground Wiberg",
                "description": "erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": "2e5333de-8164-4fa6-84d1-565c168fef6c",
                "name": "Pepper - White, Ground",
                "description": "neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": "9f5f2088-538d-4432-a83e-5e4970e9739e",
                "name": "Snapple Raspberry Tea",
                "description": "suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": "8080f97f-c281-4f3b-8800-c53d0d38307e",
                "name": "Beef - Tenderloin",
                "description": "justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
              }, {
                "id": "5ca45396-79f3-46f4-a163-f0baaf6bbd72",
                "name": "Crackers - Water",
                "description": "donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": "8426f97d-9ac3-4ee0-9759-f1b1be7afc95",
                "name": "Beets - Golden",
                "description": "adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
              }, {
                "id": "4b00560f-a71f-456b-bc29-953c2750e95a",
                "name": "Halibut - Steaks",
                "description": "volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": "de84717a-f41b-46ed-aa20-1c76024175c5",
                "name": "Mountain Dew",
                "description": "fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": "04e1e29b-54ee-4025-8bc9-aafa2d4277e3",
                "name": "Bacardi Mojito",
                "description": "amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }
            ],
        };
    }
    render() {
        const { products } = this.state;
        return (
            <Container>
                <h2>Products</h2>
                <Row>
                    { products.map((product) => (
                        <Col sm="4">
                            <Card>
                                <CardImg top width="100%" src={ product.imageUrl } alt="Card image cap" />
                                <CardBody>
                                <CardTitle>{ product.name }</CardTitle>
                                <CardText>{ product.description }</CardText>
                                <Button>Add to cart</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default Products;