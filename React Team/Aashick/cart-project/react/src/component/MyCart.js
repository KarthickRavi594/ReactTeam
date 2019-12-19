import React, { Component } from 'react'
import { Row, Column } from 'simple-flexbox';
import { Image } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

 

import { Form } from 'react-bootstrap';

export class MyCart extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const newMyCart = this.props.data;
        const dataShow = newMyCart.map(cart=>{
        return (
            <div>
            <div className="ProductList">
            
            <section className="container content-section">
                <div className="shop-items">
                <div className="shop-item">
                    <span className="shop-item-title">{cart.Name}</span>
                    <img className="shop-item-image" src={cart.Img}/>
                    <span className="shop-item-details">{cart.Descript}</span>
                    <Row>
                        <div className="start">
                            <h2><Badge pill variant="primary">Price: ${cart.Price * cart.product_default }</Badge></h2>
                        </div>
                        <div className="right">
                            <Form inline>
                                <Button  onClick={this.props.remove} value={cart.Id}  variant="danger">Remove  From Cart</Button>
                            </Form>
                        </div>
                    </Row>
                </div>
                </div>
            </section>
            </div>
        
            </div>
        );
    });
    return (
        <div>
            {dataShow}
        </div>
    );
    }
}

export default MyCart
