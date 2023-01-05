import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
    render() { 
        return(<div>
                    <section className="section-one">
                        <div className="overlay" />
                        <div className="my-container">
                            <div className="header">
                            <div className="logo">PhotoM4</div>
                            <div className="header-menu">
                                <div className="menucommon social-menu">
                                <ul>
                                    <li>
                                    <a href="">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    </li>
                                    <li>
                                    <a href="">
                                        <i className="fab fa-weebly" />
                                    </a>
                                    </li>
                                    <li>
                                    <a href="">
                                        <i className="fab fa-instagram" />
                                    </a>
                                    </li>
                                    <li>
                                    <a href="">
                                        <i className="fab fa-twitter" />
                                    </a>
                                    </li>
                                </ul>
                                </div>
                                <div className="menucommon main-menu">
                                <ul>
                                    <li>
                                        <Link to='/'>Home</Link>
                                    </li>
                                    <li>
                                        <Link to='/about'>About</Link>
                                    </li>
                                    <li>
                                        <a href="#">Servies</a>
                                    </li>
                                    <li>
                                    <a href="">Buy Now</a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="image-text">
                            <h3>friendly</h3>
                            <hr />
                            <h1>Photo Workshop</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dui non
                                diam eleifend egestas id a ligula. Proin interdum vehicula neque sit
                                amet scelerisque. Nulla imperdiet mollis libero.
                            </p>
                            <button>View More</button>
                            </div>
                        </div>
                        </section>
        </div>
        );
    }    
}
 
export default Navbar;