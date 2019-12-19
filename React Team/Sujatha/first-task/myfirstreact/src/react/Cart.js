import React, { Component } from 'react';
import { Row, Column } from 'simple-flexbox';
import { Image } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          item: this.props.item
        };
    }

  render() {
        const {data} = this.props
        const dataShown = data.map(item=>{
            console.log('Price -> ',item.Product_Price * item.product_default)
            let priceValue = item.Product_Price.split('.');
            let itemPrice = parseInt(priceValue[1])
                return(
            <div className="ProductList">
                <div class="container-fluid" className="card1">
                <Card style={{ width: '30%' }}>
                        <Card.Img variant="top" src={item.Product_Image} />
                        <Card.Body>
                            <Card.Title>{item.Product_Name}</Card.Title>
                            <Card.Text>
                                {item.Product_Description}
                            </Card.Text>
                            <Button variant="danger">Rs.{itemPrice * item.product_default}</Button> <br /> <br />
                            <Row>
                                <div className="count"><b>Quantity: {item.product_default}</b></div>
                                <Button variant="primary" className="add" value={item.Product_id} onClick={()=>this.props.removecart(item)}>Remove Cart</Button> <br />
                            </Row>
                        </Card.Body>
                    </Card>
            </div>
            </div>
                )}
    )

      //  console.log('Inside MyCart -> ',cartNewData)
        return(
        <div>
            {dataShown}
        </div>
        )
    }
}
// const mapDispatchToProps = (dispatch)=>{
//     return{
//         removeItem: (id)=>{dispatch(removeItem(id))},
//     }
// }
export default Cart;