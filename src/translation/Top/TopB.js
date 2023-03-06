
import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import 'Top/Top.css'
import Toplogob from 'assets/logo-b.png'
import DropDownB from 'Top/DropDownB'
class TopB extends React.Component {

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
                <div className="Top black">
                    <div className='top-logo-cont'>
                        <Link to='/en/#main'>
                            <img className="top-logo logo-b" src={Toplogob} alt="logo"></img>
                        </Link>
                    </div>
                    <ol className='menu'>
                        <Link to='/en/#gallery' >GALLERY</Link>

                        <Link to='/en/halfandhalf' onClick={this.forceUpdate}>HALF&HALF</Link>

                        <Link to='/en/notice' onClick={this.forceUpdate}>PROCESS</Link>

                        <Link to='/en/visit' onClick={this.forceUpdate}>VISIT US</Link>

                        <DropDownB/>
                    </ol>
                    <div className='mobile-menu-cont'>

                        <div className="mobile-menu-icon">☰</div>

                        <div className="mobile-close-icon">X</div>
                        <div className='mobile-menu-fixed'>
                            <ol className='mobile-menu'>

                                <Link to='/en/#gallery' >GALLERY</Link>

                                <Link to='/en/halfandhalf' onClick={this.forceUpdate}>HALF&HALF</Link>

                                <Link to='/en/notice' onClick={this.forceUpdate}>NOTICE</Link>

                                <Link to='/en/visit' onClick={this.forceUpdate}>VISIT US</Link>

                                <Link to='/' onClick={this.forceUpdate}>KOR</Link>
                            </ol>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default TopB;