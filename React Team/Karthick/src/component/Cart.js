import React from 'react'
import { Column, Row } from 'simple-flexbox';
import Button from 'react-bootstrap/Button';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartObject : []
        }
    }

    render() {
        console.log('Object Value -> ',this.props.data)
        const data = this.props.data
        const cartData = data.map((cartDetails, index) => 
        (
            <div className="cartList1">
                <Row>
                    <div className="design img">
                        <img src={cartDetails.product_image_path} width="50" height="50" />
                    </div>
                    <div className="design_product">
                        <Column>
                            <div className="ProductName">{cartDetails.product_name}</div>
                            <div className="ProductDesc"></div>
                            <div className="design Price">
                                {cartDetails.product_price * cartDetails.product_default}
                            </div>
                        </Column>
                    </div>
                    <div className="Remove">
                        <Button variant="light" value={cartDetails.product_id} onClick={this.props.toggle}>Remove</Button>
                    </div>
                </Row>
            </div>
        ))
        return (
            <div className="cart">
                <Column>
                    <div className="Heading">My Cart</div>
                    {cartData}
                </Column>
            </div>
        )
    }
}

export default Cart;