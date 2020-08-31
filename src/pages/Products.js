import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class Products extends Component {
    constructor(props) {
        super(props);

        
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