import React, { Component } from 'react';
import axios from 'axios';
import { createStore } from 'redux';
import { reducer } from './Inc-Dec';
import MyCart from './MyCart'
import { Row, Column } from 'simple-flexbox';
import { Badge } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

class Containers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartData: [],
            cartItemsAdd: [],
        };
        this.addToCart = this.addToCart.bind(this);
       this.removeFromCart = this.removeFromCart.bind(this);
        this.countDisplay = this.countDisplay.bind(this);
    }
    componentDidMount() {
        axios.get('http://localhost:4004/')
            .then(res => {
                console.log('Response', res.data)
                this.setState({ cartData: res.data })
            });
        console.log("Data Inserted -> ", this.state.cartData)
    }

    addToCart(e) {
        let value = e.target.value
        let match = this.state.cartData.find(x => {
            if (x.Id == value) {
                return x
            }
        });
        console.log("event-->", match);
        console.log("value-->", value);
        var joined = this.state.cartItemsAdd.concat(match);
        this.setState({ cartItemsAdd: joined })
        console.log('Added Cart -> ',this.state.cartItemsAdd)
    }

    removeFromCart(e){
        let itemId = e.target.value;
        console.log('Remove ',itemId)
        const cartDelete = this.state.cartItemsAdd.filter(carts => carts.Id != itemId)
        this.setState({cartItemsAdd: cartDelete})
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
            quantity_default: this.state.cartData[decryptValue[1] - 1].Qty
        }

        store.dispatch(Action);
        if (flag === 1) {
            const newItems = [...this.state.cartData];
            newItems[decryptValue[1] - 1].product_default = countValue;
            this.setState({ cartData: newItems });
        } }

    render() {
        let li = this.state.cartData.map((plist, index) => (
            <div className="ProductList">
            
            <section className="container content-section">
                <div className="shop-items">
                <div className="shop-item">
                    <span className="shop-item-title">{plist.Name}</span>
                    <img className="shop-item-image" src={plist.Img}/>
                    <span className="shop-item-details">{plist.Descript}</span>
                    <Row>
                        <div className="start">
                            <h2><Badge pill variant="primary">Price: {plist.Price}</Badge></h2>
                        </div>
                        <div className="center">
                            <ButtonToolbar className="btn">
                                <Button onClick={this.countDisplay} className="btn" value={"DECREMENT " + plist.Id + " " + plist.product_default} variant="danger">-</Button>
                                <div className="quantity">{plist.product_default}</div>
                                <Button onClick={this.countDisplay} className="btn" value={"INCREMENT " + plist.Id + " " + plist.product_default} variant="success">+</Button>
                            </ButtonToolbar>
                        </div>
                        <div className="right">
                            <Form inline>
                                <Button onClick={this.addToCart} value={plist.Id} variant="info">Add to Cart</Button>
                            </Form>
                        </div>
                    </Row>
                    
                </div>
                </div>
                </section>
            </div>
        ))

        return (
            <div>
                {li}
                <div>
                    <h1>MyCart</h1>
                    <MyCart data={this.state.cartItemsAdd} remove={this.removeFromCart}/>
                </div>
            </div>
        );
    }
} 

export default Containers;