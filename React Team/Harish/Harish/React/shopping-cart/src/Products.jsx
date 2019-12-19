import React, { Component } from 'react';
import axios from 'axios';
import Addtocart from './Addtocart';
import Dropdown from './Dropdown';
import Cart from './Cart';
// import Order from './Order';


class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      cart: [],
      addCart:[],
      final:[]
    }
    
  }

  componentDidMount() {
    axios.get("http://localhost:9000/")
      .then(res => {
        this.setState({ items: res.data })
      });
  }

  click = (e) => {
    const {cart} = this.state;
    let value = e.target.value;
    let match = this.state.items.find(x => {
      if(x.ProductID == value){
        return x
      }
    });
    let joined = cart.concat(match);
    this.setState({cart:joined}) 
  }
   
  removeProducts=(item)=>{
      const cart = this.state.cart.filter(x => x.ProductID !== item.ProductID);
      this.setState({cart})
  }

  incrementQty=(item)=>{
     let Rate = item.Rate * 2
     let items = item.Quantity++
     let obj = {Rate,items}
     let cart = Object.assign(this.state.cart,obj)
     this.setState({cart})
  }

  decrementQty=(item)=>{
    let items = item.Quantity--
    let cart = Object.assign(this.state.cart,items)
    this.setState({cart})
 }

 addtoCart=()=>{
   let addCart = Object.assign(this.state.addCart,this.state.cart)
   this.setState({addCart})
 }

 placeOrder = () => {
   const {addCart,final} = this.state;
   let Rate = addCart.map(val => val.Rate);

  if(Rate.length === 0){
    return Rate;
  }else{
    let Total = Rate.reduce((a,b)=>a+b);
    let obj= {Total}
    let price = Object.assign(final,obj);
    this.setState({final:price});
  }
   
 }
  
  render() {
    return (
     <React.Fragment>
           
        <Dropdown
       items={this.state.items}
       click={this.click}
        />
        
      <Cart
         cart = {this.state.cart}
         decrementQty = {this.decrementQty}
         incrementQty = {this.incrementQty}
         removeProducts = {this.removeProducts}
         addtoCart={this.addtoCart}
      />

       <Addtocart
        toCart={this.state.addCart}
        placeOrder = {this.placeOrder}
        final = {this.state.final}
         />
        
      </React.Fragment>
       
    );
    
  }
 
}

export default Products;