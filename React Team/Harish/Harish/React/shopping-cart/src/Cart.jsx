import React from 'react';

const Cart = (props) => {
    return ( 
      <React.Fragment>
        {props.cart.length === 0 ? 
        <h1 className="jumbotron" style={{textAlign:'center'}}>
         Welcome to E-Cart!<br/>
         your cart is empty
          </h1>:
        
        <div className="card text-center">
         <div className="card-header">
           Shopping Cart
         </div>
         <div className="card-body">
           <h5 className="card-title">Cart</h5>
          
            {props.cart.map((item,index) =>
            <div key={index}>
            <div className="card-text"> 
            <button onClick={()=>props.removeProducts(item)} className="btn btn-danger btn-md m-3">Remove</button>
            <p style={{display:"inline"}}><strong>Product: {item.ProductName}</strong></p>
            <p style={{display:"inline"}} onClick={()=>props.incrementQty(item)} className="badge badge-primary badge-lg m-3">+</p>
            <span className="badge badge-dark badge-md m-1">Qty:{item.Quantity}</span>
            <p style={{display:"inline"}} onClick={()=>props.decrementQty(item)} className="badge badge-warning badge-lg m-1">-</p>
            <p style={{display:"inline"}}><strong>Rate: {item.Rate}</strong></p>
            </div>
            </div>
            )}
         <a href="#" onClick={props.addtoCart} className="btn btn-primary">Add to cart</a>
         </div>
       </div>}
       
    
        </React.Fragment>
     );
}
 
export default Cart;