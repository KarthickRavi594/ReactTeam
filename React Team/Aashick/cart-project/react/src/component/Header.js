import React, { Component } from 'react'
import Footer from './Footer'

 class Header extends Component {
    render() {
        return (
            <div>
                <header class="main-header">
                    <nav class="nav main-nav">
                        <ul>
                            <li><a href="index.html">HOME</a></li>
                            <li><a href="store.html">STORE</a></li>
                            <li><a href="about.html">ABOUT</a></li>
                        </ul>
                    </nav>
                <h1 class="band-name band-name-large">Shopping Cart</h1>
                </header>
            </div>
        )       
        
    }
}

export default Header
