import React from 'react';

const Dropdown = (props) => {
    const {items } = props
   // console.log("display items -->",items)
    return ( 
      <div className="container">
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Products
        </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {items.map((item,index) =>
        <button className="dropdown-item" onClick={props.click}  key={index} href="#" value={item.ProductID} >{item.ProductName} </button>)}   
      </div>
      </div> 
       </div>
     );
}
export default Dropdown;