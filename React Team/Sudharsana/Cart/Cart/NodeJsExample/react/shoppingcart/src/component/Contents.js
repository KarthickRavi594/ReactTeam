import React, { Component  } from 'react'
import {Row,Column} from 'simple-flexbox'
import { createStore } from 'redux';
import { counterReducer } from './Reducer';
import axios from "axios";
import Cart from './Cart';
 class Contents extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
            count:0,

            ProductDetails: [] ,
            cart:[]
        
         }
         this.addToCart = this.addToCart.bind(this);
         this.Count = this.Count.bind(this);
         this.removeToCart = this.removeToCart.bind(this);
     }
     RemoveCar(e){
         let flag =1
     }
     addToCart(e) {
        let flag = 0;
      
        this.state.cart.map(cartvalue => {
          
            if (cartvalue.Id === parseInt(e.target.value)) {
                flag = 1;
                console.log('connect');
            }

            else {
            }
        })
        if (flag === 0) {
            this.state.ProductDetails.map(productList => {
                if (productList.Id == e.target.value) {
                    const obj = [...this.state.cart];
                    obj[this.state.cart.length] = productList;
                    this.setState({ cart: obj })
                }
            })
        }
        console.log(this.state.cart)
    }
    Count(e){
        let flag = 0;
        let decryptValue = e.target.value.split(' ');
        let countValue = decryptValue[2]
        const store = createStore(counterReducer);
        store.subscribe(function(){
            countValue = store.getState();
            flag=1;
        })
        const Action = {
            type: decryptValue[0],
            user_input : decryptValue[2],
            default_value : this.state.ProductDetails[decryptValue[1]-1].Quantity
        }
        store.dispatch(Action);
        if (flag === 1) {
            const newItems = [...this.state.ProductDetails];
            newItems[decryptValue[1] - 1].product_default = countValue;
            this.setState({ ProductDetails: newItems });
        }
    }
    removeToCart(e){

        let value = e.target.value

        console.log('To Remove Cart -> ',value)

        let data = this.state.cart

        data = data.filter(function(removeValue){return removeValue.Id != value})

        console.log('Deleted Value -> ', data)

        this.setState({cart : data})

    }
    
    


    componentDidMount() {

        axios.get("http://localhost:5000/")

            .then(res => {
                this.setState({ ProductDetails : res.data })
                console.log(this.state.ProductDetails);               
            })           

    }
     
  

    render() {
     
        console.log('Array -> ', this.state.ProductDetails);
        console.log('Arraycart -> ', this.state.cart);
         const {ProductDetails,cart, prod} = this.state
              return (
       <React.Fragment>
        
             <div className="Container-fluid">
               {/* <div className="container">  */}
                   <h1 className="mb-5">Welcome To Shopping</h1>
                  
                   <Row >  
                       <Column className="col-md-9">
                   <Row className="mt-2 container_width">
            { ProductDetails.map((x, prod) => 
           
             <div className="col-lg-4 ">
                <div className="card" style={{width:"18 rem"}}>
                         <img src={x.image} className="card-img-top imgCls1" alt="..."/>
                         <div className="card-body">
                             <h5 className="card-title">{x.Name}</h5>
              <p className="card-text">{x.Description}</p>
            <p className="text-success">Price is $ { x.price}</p>
                           
                             <div  className="input-group mr-5 ml-5">
                            <span className="input-group-btn">
                            <button type="button" className="btn btn-success mr-4" value={"INCREMENT "+x.Id+" "+x.product_default} onClick={this.Count}>+</button>
                            </span>
                            {/* <input type="text" className="form-control" disabled / > */}
                             <div>{x.product_default}</div>
                            <span className="input-group-btn">
                            <button type="button" className="btn btn-danger ml-4" value={"DECREMENT "+x.Id+" "+x.product_default} onClick={this.Count}>-</button>
                           
                            </span>
                            </div>
                 
                            <button className="btn  btn-success mt-3" onClick={this.addToCart} value={x.Id}> Add Cart </button>
                           
                         </div>
                   </div>
                   </div>
                    
                  
            )}
                   </Row>
                   </Column> 
                   <Column className="col-md-3 container_width1  bg-light">
                   <h3>My AddCart</h3>
            <div className="">
                <Cart data = {this.state.cart} toggle={this.removeToCart} />
            </div>
         
               </Column> 
          </Row>
       
         
            {/* </div> */}
            </div>
          
                      </React.Fragment>
        )
    }
}

export default Contents
