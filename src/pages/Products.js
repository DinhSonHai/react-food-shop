import React, { Component } from 'react';
import { createStore } from 'redux';
import axios from 'axios';
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { CartContext } from '../contexts/Cart';

class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
          products: [],
        }
    }
    componentDidMount() {
      axios.get('http://localhost:8080/products')
        .then(res => {
          this.setState({
            products: res.data
          });
        })
    }
    render() {
        const { products } = this.state;
        return (
            <Container>
                <h2>Products</h2>
                <Row>
                    { products.map((product) => (
                        <Col sm="4">
                            <Card onClick={ this.onClick }>
                                <CardImg top width="100%" src={ product.imageUrl } alt="Card image cap" />
                                <CardBody>
                                <CardTitle>{ product.name }</CardTitle>
                                <CardText>{ product.description }</CardText>
                                <CartContext.Consumer>
                                    { ({addToCart }) => (
                                        <Button onClick={ () => addToCart(product) }>Add to cart</Button>
                                        )}
                                </CartContext.Consumer>
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