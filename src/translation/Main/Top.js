

import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import 'Top.css'
import './TopAddOn.css'
import Toplogow from 'assets/logo-w.png'


function Top() {

    return (
        <>
            <div className='top-cont'>
                <div className="Top main-top">
                    <div className='top-logo-cont'>
                        <Link to='/en/#main'>
                            <img className="top-logo logo-w" src={Toplogow} alt="logo"></img>
                        </Link>
                    </div>
                    <ol className='menu'>
                        <Link to='/en/#about' >ABOUT</Link>

                        <Link to='/en/#gallery' >GALLERY</Link>

                        <Link to='/en/halfandhalf' onClick={this.forceUpdate}>HALF&HALF</Link>

                        <Link to='/en/notice' onClick={this.forceUpdate}>NOTICE</Link>

                        <Link to='/en/visit' onClick={this.forceUpdate}>VISIT US</Link>

                        <Link to='/#main' onClick={this.forceUpdate}>KOR</Link>
                    </ol>
                    <div className='mobile-menu-cont'>

                        <div className="mobile-menu-icon">☰</div>

                        <div className='mobile-menu-fixed'>
                            <ol className='mobile-menu'>
                                <Link to='/en/#about' >ABOUT</Link>

                                <Link to='/en/#gallery' >GALLERY</Link>

                                <Link to='/en/halfandhalf' onClick={this.forceUpdate}>HALF&HALF</Link>

                                <Link to='/en/notice' onClick={this.forceUpdate}>NOTICE</Link>

                                <Link to='/en/visit' onClick={this.forceUpdate}>VISIT US</Link>

                                <Link to='/#main' onClick={this.forceUpdate}>KOR</Link>
                            </ol>

                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}

export default Top;