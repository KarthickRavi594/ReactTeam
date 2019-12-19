import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Row, Column } from 'simple-flexbox';
import axios from 'axios';
import { createStore } from 'redux';
import { Reducers } from './Reducers';
import Cart from './Cart';


class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResponse: [],
            cart:[]
        }
        
        this.addToCart = this.addToCart.bind(this);
        this.quantityCount = this.quantityCount.bind(this);
        //this.removeItemFromBasket=this.removeItemFromBasket.bind(this);
    }
    // addToCart(e) {
    //     let flag = 0;
    //     this.state.cart.map(cartValue => {
    //         if (cartValue.Product_Id == parseInt(e.target.value)) {
    //             flag = 1;
    //         }
    //         else {
    //         }
    //     })
    //     if (flag === 0) {
    //         this.state.apiResponse.map(productList => {
    //             if (productList.Product_Id == e.target.value) {
    //                 const obj = [...this.state.cart];
    //                 obj[this.state.cart.length] = productList;
    //                 this.setState({ cart: obj })
    //             }
    //         })
    //     }
    // }
    addToCart(e) {
        let value = e.target.value
        let match = this.state.apiResponse.find(x => {
            if (x.Product_id == value) {
                return x
            }
        });
        console.log("event-->", match);
        console.log("value-->", value);
        var joined = this.state.cart.concat(match);
        this.setState({ cart: joined })
    }
    removeItemFromBasket=(itemId)=> {
        const cart = this.state.cart.filter(cart => cart.Product_id !== itemId.Product_id)
        this.setState({cart})
      }

    quantityCount(e) {
        let flag = 0;
        let decryptValue = e.target.value.split(' ');
        console.log(decryptValue)
        let countValue = decryptValue[2]
        const store = createStore(Reducers);
        store.subscribe(function () {
            countValue = store.getState();
            flag = 1;
        });
        const Action = {
            type: decryptValue[0],
            count_Value: decryptValue[2],
            quantity_default: this.state.apiResponse[decryptValue[1]-1].Product_Quantity
        }
        store.dispatch(Action);
        if (flag === 1) {
            const newItems = [...this.state.apiResponse];
            newItems[decryptValue[1] - 1].product_default = countValue;
            this.setState({ apiResponse: newItems });
        }
    }
    componentDidMount() {
        axios.get("http://localhost:5001/")
            .then(res => {
                console.log('Response -> ', res.data);
                this.setState({ apiResponse: res.data })
                console.log('Array -> ', this.state.apiResponse);
            })
    }
    render() {
        let li = this.state.apiResponse.map((item, index) => {
            const a = item.Product_Image
            console.log('Path -> ', a);
            return (
                <div className="list1" >
                    <div class="container-fluid" className="card1" >
                        <Card style={{ width: '30%' }}>
                            <Card.Img variant="top" src={item.Product_Image} />
                            <Card.Body>
                                <Card.Title>{item.Product_Name}</Card.Title>
                                <Card.Text>
                                    {item.Product_Description}
                                </Card.Text>
                                <Button variant="danger">{item.Product_Price}</Button> <br /> <br />
                                <Row>
                                    <Button type="button" class="btn btn-info btn-sm" className="btn" onClick={this.quantityCount} value={"DECREMENT " + item.Product_id + " " + item.product_default}>
                                        -
                                    </Button>
                                    <div className="count">{item.product_default}</div>
                                    <Button type="button" class="btn btn-info btn-sm" className="btn" onClick={this.quantityCount} value={"INCREMENT " + item.Product_id + " " + item.product_default}>
                                        +
                                    </Button>
                                    <Button variant="primary" className="add" value={item.Product_id} onClick={this.addToCart}>Add Cart</Button> <br />
                                </Row>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

            )
        })
        return (
            
            <div>
                <div className="List">
                    {li}
                   <h1>My Cart</h1> 
                </div>
                
                {/* {this.state.apiResponse} */}
                {/* <h1>{this.state.apiResponse}</h1> */}
                <div className="cartList">
                <Cart data={this.state.cart} removecart={this.removeItemFromBasket}/>
                </div>
            </div>
        )
    }
}
export default Shop
