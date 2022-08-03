

import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import $ from 'jquery'

import 'Top.css'
import './TopAddOn.css'
import Toplogob from 'assets/logo-b.png'
import Toplogow from 'assets/logo-w.png'
class HalfTop extends React.Component {

    componentDidMount(
    ) {

        document.querySelector(".mobile-menu-icon").addEventListener("click", function () {
            document.querySelector(".mobile-menu-fixed").style.display = "inline";
            document.querySelector(".mobile-menu-icon").style.display = "none";

            document.querySelector(".mobile-close-icon").style.display = "inline";
        });

        document.querySelector(".mobile-close-icon").addEventListener("click", function () {
            document.querySelector(".mobile-menu-fixed").style.display = "none";
            document.querySelector(".mobile-menu-icon").style.display = "inline";

            document.querySelector(".mobile-close-icon").style.display = "none";
        });
    }

    render() {
        return (
            <div className='top-cont'>
                <div className="Top main-top">
                    <div className='top-logo-cont'>
                        <Link to='/#main'>
                            <img className="top-logo logo-w" src={Toplogow} alt="logo"></img>
                        </Link>
                    </div>
                    <ol className='menu'>
                        <Link to='/#gallery' >GALLERY</Link>

                        <Link to='/halfandhalf' onClick={this.forceUpdate}>HALF&HALF</Link>

                        <Link to='/notice' onClick={this.forceUpdate}>NOTICE</Link>

                        <Link to='/visit' onClick={this.forceUpdate}>VISIT US</Link>

                        <Link to='/en' onClick={this.forceUpdate}>ENG</Link>
                    </ol>
                    <div className='mobile-menu-cont'>

                        <div className="mobile-menu-icon">☰</div>

                        <div className="mobile-close-icon">X</div>
                        <div className='mobile-menu-fixed'>
                            <ol className='mobile-menu'>

                                <Link to='/#gallery' >GALLERY</Link>

                                <Link to='/halfandhalf' onClick={this.forceUpdate}>HALF&HALF</Link>

                                <Link to='/notice' onClick={this.forceUpdate}>NOTICE</Link>

                                <Link to='/visit' onClick={this.forceUpdate}>VISIT US</Link>
                            </ol>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default HalfTop;