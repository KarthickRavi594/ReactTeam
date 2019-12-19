import React from 'react';
import { Row ,column} from 'simple-flexbox';
import { createStore } from 'redux';
import { counterReducer } from './Reducer';

class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state={


        }
    }
    render(){
        const data = this.props.data
        console.log('Data 12-> ',data);
        const list = data.map(x=>{
            return(
                <div>
                    <div className="container bg-lp">
                        
                        <Row>
                            <column className="col-md-6">
                    
                    <img src={x.image} className="card-img-top imgClsmin mt-2" alt="..."/>
                    <p> RS {x.price * x.product_default}</p>
                   
                    </column>
                    <column className="col-md-6">
                    <h6 className="mt-2">{x.Name}</h6>
                    <p>  { x.product_default} Qty </p>
                
                <button className="btn btn-danger mb-2" value={x.Id} onClick={this.props.toggle} >Remove</button>
                <hr></hr>
                
                    </column>
                    </Row>
                    
                    </div>
                </div>
               
            )
        }
        )
        return(
            <div>
                {list}
            </div>
        )
    }
}

export default Cart;