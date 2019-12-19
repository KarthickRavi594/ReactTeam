import React from 'react';

const Order = (props) => {
  const {totalCost} = props;
//    const total =  props.totalCost.map(val=>
//         <p>Total = {val.Rate}</p>
//         )
    //  for(let i = 0;i < totalCost; i++){
    //      console.log(totalCost[i])
    //  }


   console.log(totalCost.map(val => val.Total))
    return ( 
        <React.Fragment>
        <button onClick={props.placeOrder} className="btn btn-primary btn-md m-3">
        place order
        </button>
        <div>
         {/* {total} */}
        </div>
        </React.Fragment>
 );
}

export default Order;