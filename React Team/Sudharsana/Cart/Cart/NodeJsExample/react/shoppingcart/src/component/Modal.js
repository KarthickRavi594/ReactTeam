import React, { Component } from 'react'
import Cart from './Cart';

export class Modal extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           count:0,

           cart:[]
       
        }
    }
    render() {

        console.log('Arraycart -> ', this.state.cart);
        const {ProductDetails,cart} = this.state
        return (
            <div>
                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        

    
         <Cart data = {this.state.cart}/>
         <h1>{cart.Name}</h1>
            

      </div>
      <div className="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
            </div>
        )
    }
}

export default Modal
