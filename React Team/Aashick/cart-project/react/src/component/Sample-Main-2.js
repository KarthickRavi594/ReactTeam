import React, { Component } from 'react'
import axios from 'axios';
import { createStore } from 'redux';
import { reducer } from './CreateStore';
// import {connect} from 'react-redux';
import Header from './Header';
import { Row, Column } from 'simple-flexbox';


import { Form } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import MyCart from './MyCart'   
import { Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartData: [],
            cartItemsAdd: [],
            pagemove: "false",
        };
        this.mycart = this.mycart.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.countDisplay = this.countDisplay.bind(this);
    }
    mycart(e) {
        this.setState({ pagemove: true })
    }

    componentDidMount() {
        axios.get('http://localhost:6800/')
            .then(res => {
                console.log('Response', res.data)
                this.setState({ cartData: res.data })
            });
        console.log("Data Inserted -> ", this.state.cartData)
    }

    addToCart(e) {
        let value = e.target.value
        let match = this.state.cartData.find(x => {
            if (x.Pid == value) {
                return x
            }
        });
        console.log("event-->", match);
        console.log("value-->", value);
        var joined = this.state.cartItemsAdd.concat(match);
        this.setState({ cartItemsAdd: joined })
    }

    countDisplay(e) {
        let flag = 0;
        let decryptValue = e.target.value.split(' ');
        let countValue = decryptValue[2]
        const store = createStore(reducer);
        store.subscribe(function () {
            countValue = store.getState();
            flag = 1;
        })

        const Action = {
            type: decryptValue[0],
            count_Value: decryptValue[2],
            quantity_default: this.state.cartData[decryptValue[1] - 1].Quantity
        }

        store.dispatch(Action);
        if (flag === 1) {
            const newItems = [...this.state.cartData];
            newItems[decryptValue[1] - 1].product_default = countValue;
            this.setState({ cartData: newItems });
        }
    }

    render() {
        let li = this.state.cartData.map((plist, index) => (
            <section className="container content-section">
                <h2 className="section-header">Toys</h2>
                <div className="shop-items">
                <div className="shop-item">
                    <span className="shop-item-title">{plist.Name}</span>
                    <img className="shop-item-image" src="Images/thor.jpg"/>
                    <div className="shop-item-details">
                        <span className="shop-item-price">${plist.Price}</span>
                        <button className="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                    </div>
                    <Row>
                        <div className="start">
                            <h2><Badge pill variant="primary">Price: ${plist.Price}</Badge></h2>
                        </div>
                        <div className="center">
                            <ButtonToolbar>
                                <Button onClick={this.countDisplay} value={"DECREMENT " + plist.Pid + " " + plist.product_default} variant="danger">-</Button>
                                <div className="quantity">{plist.product_default}</div>
                                <Button onClick={this.countDisplay} value={"INCREMENT " + plist.Pid + " " + plist.product_default} variant="success">+</Button>
                            </ButtonToolbar>
                        </div>
                        <div className="right">
                            <Form inline>
                                <Button onClick={this.addToCart} value={plist.Pid} variant="info">Add to Cart</Button>
                            </Form>
                        </div>
                    </Row>
                </div>
                </div>
                </section>
            // <div className="ProductList">
            //     <Container>
            //         <Row>
            //             <Column xs={6} md={4}>
            //                 <Image src={apple} rounded width="270" height="190" />
            //             </Column>
            //             <Column xs={6} md={4}>
            //                 <Card border="info" >
            //                     <Card.Body>
            //                         <Card.Title>{plist.ProductName}</Card.Title>
            //                         <Card.Text>{plist.ProDesc}</Card.Text>
            //                     </Card.Body>
            //                     <Card.Footer>
            //                         <Row>
            //                             <div className="start">
            //                                 <h2><Badge pill variant="primary">Price: ${plist.Price}</Badge></h2>
            //                             </div>
            //                             <div className="center">
            //                                 <ButtonToolbar>
            //                                     <Button onClick={this.countDisplay} value={"DECREMENT " + plist.Pid + " " + plist.product_default} variant="danger">-</Button>
            //                                     <div className="quantity">{plist.product_default}</div>
            //                                     <Button onClick={this.countDisplay} value={"INCREMENT " + plist.Pid + " " + plist.product_default} variant="success">+</Button>
            //                                 </ButtonToolbar>
            //                             </div>
            //                             <div className="right">
            //                                 <Form inline>
            //                                     <Button onClick={this.addToCart} value={plist.Pid} variant="info">Add to Cart</Button>
            //                                 </Form>
            //                             </div>
            //                         </Row>
            //                     </Card.Footer>
            //                 </Card>
            //             </Column>
            //         </Row>
            //     </Container>
            // </div>
        ))

        return (
            <div>
                <Header />
                {li}
              
            </div>
        )
    }
}

export default Main
