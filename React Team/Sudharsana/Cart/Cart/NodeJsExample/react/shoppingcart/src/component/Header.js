import React, { Component } from 'react'
import Modal from './Modal';

 class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-primary navbar-dark">

  <a className="navbar-brand " href="#"> <img src="img/logo1.png" className="imgCls" /></a>
  
 
  <ul className="navbar-nav ml-auto">
    <li className="nav-item">
     <button className="btn  btn-success"> <i class="fa fa-cart-plus" aria-hidden="true" data-toggle="modal" data-target="#exampleModalCenter"> My Cart </i>  </button>
   <Modal />
    </li>

  </ul>
</nav>
               
            </div>



        )
        
    }
}

export default Header
