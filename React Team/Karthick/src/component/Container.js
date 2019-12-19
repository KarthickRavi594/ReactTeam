import React from 'react';
import { Column, Row } from 'simple-flexbox';
import Cart from './Cart';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { createStore } from 'redux';
import { CounterReducer } from './StoreReducer';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stockDetails: [],
            cart: []
        }
        this.addToCart = this.addToCart.bind(this);
        this.quantityCount = this.quantityCount.bind(this);
        this.removeToCart = this.removeToCart.bind(this);
    }

    addToCart(e) {
        let flag = 0;
        this.state.cart.map(cartValue => {
            if (cartValue.product_id == parseInt(e.target.value)) {
                flag = 1;
            }
            else {
            }
        })
        if (flag === 0) {
            this.state.stockDetails.map(productList => {
                if (productList.product_id == e.target.value) {
                    const obj = [...this.state.cart];
                    obj[this.state.cart.length] = productList;
                    this.setState({ cart: obj })
                }
            })
        }
    }

    removeToCart(e){
        let value = e.target.value
        console.log('To Remove Cart -> ',value)
        let data = this.state.cart
        data = data.filter(function(removeValue){return removeValue.product_id != value})
        console.log('Deleted Value -> ', data)
        this.setState({cart : data})
    }

    quantityCount(e) {
        let flag = 0;
        let decryptValue = e.target.value.split(' ');
        let index = this.state.stockDetails.findIndex(i => i.product_id == decryptValue[1])
        let userValue = this.state.stockDetails[index].product_default
        const store = createStore(CounterReducer);
        store.subscribe(function () {
            userValue = store.getState();
            flag = 1;
        });
        const Action = {
            type: decryptValue[0],
            user_input: this.state.stockDetails[index].product_default,
            quantity_default: this.state.stockDetails[index].product_quantity
        }
        store.dispatch(Action);
        if (flag === 1) {
            const newItems = [...this.state.stockDetails];
            newItems[index].product_default = userValue;
            this.setState({ stockDetails: newItems });
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3456/')
            .then(res => {
                this.setState({ stockDetails: res.data })
                console.log(this.state.stockDetails);
            })
    }

    render() {

        const list = this.state.stockDetails.map((prod, index) => {
            return (<div className="List1" >
                <Row >
                    <div className="design img" >
                        <img src={prod.product_image_path} alt="img" width="50" height="50" />
                    </div>
                    <div className="design product" >
                        <Column >
                            <div className="ProductName" >{prod.product_name}</div>
                            <div className="ProductDesc" >{prod.product_description}</div>
                        </Column>
                    </div>
                    <div className="design QuantityMeasure" >
                        <Row >
                            <Button variant="light" onClick={this.quantityCount} value={"DECREMENT " + prod.product_id + " " + prod.product_default}> - </Button>
                            <div className="quantity"> {prod.product_default} </div>
                            <Button variant="light" onClick={this.quantityCount} value={"INCREMENT " + prod.product_id + " " + prod.product_default}> + </Button>

                        </Row>
                    </div>
                    <div className="design Price" >
                        {prod.product_price}
                    </div>
                    <div className="design">
                        <Button variant="light" value={prod.product_id} onClick={this.addToCart}>Add</Button>
                    </div>
                </Row>
            </div>
            )
        })
        return (
            <div >
                <Row>
                    <div className="List">
                        <Column>
                            <div className="p-2 col-example text-left Heading">Shopping Cart</div>
                            {list}
                        </Column>
                    </div>
                    <div className="cartList">
                        <Cart data={this.state.cart} toggle={this.removeToCart}/>
                    </div>
                </Row>

            </div>
        )
    }
}

export default Container;