import React from 'react';
import Order from  "./Order"
const Addtocart = (props) => {
   const {toCart,final} =props
 
    return ( 
        toCart.length === 0 ? "":
        <div>
            <h1>You have added</h1>
        {toCart.map(x => 
        
        <p>Product: {x.ProductName}, Rate: {x.Rate}, Qty: {x.Quantity}</p>
       
        )}     
         <Order
        placeOrder = {props.placeOrder}
        totalCost = {final}
        />
        </div>
     );
}
 
export default Addtocart;