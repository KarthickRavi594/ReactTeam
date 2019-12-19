import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div>
                <footer class="main-footer">
                    <div class="container main-footer-container">
                        <h3 class="band-name">Enjoy your Shopping!</h3>
                        <ul class="nav footer-nav">
                            <li>
                                <a title="Youtube" href="https://www.youtube.com" target="_blank">
                                    <img src="Images/YoutubeLogo.png"/>
                                </a>
                            </li>
                            <li>
                                <a title="Instagram" href="https://www.instagram.com" target="_blank">
                                    <img src="Images/InstagramLogo.png"/>
                                </a>
                            </li>
                            <li>
                                <a title="Facebook" href="https://www.facebook.com" target="_blank">
                                    <img src="Images/FacebookLogo.png"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer
