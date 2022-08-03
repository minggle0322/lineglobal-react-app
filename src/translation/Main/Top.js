

import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import 'Top.css'
import './TopAddOn.css'
import Toplogow from 'assets/logo-w.png'

function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update state to force render
    // An function that increment 👆🏻 the previous state like here 
    // is better than directly setting `value + 1`
}
function Top() {


    const forceUpdate = useForceUpdate();
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

                        <Link to='/en/halfandhalf' onClick={forceUpdate}>HALF&HALF</Link>

                        <Link to='/en/notice' onClick={forceUpdate}>NOTICE</Link>

                        <Link to='/en/visit' onClick={forceUpdate}>VISIT US</Link>

                        <Link to='/#main' onClick={forceUpdate}>KOR</Link>
                    </ol>
                    <div className='mobile-menu-cont'>

                        <div className="mobile-menu-icon">☰</div>

                        <div className='mobile-menu-fixed'>
                            <ol className='mobile-menu'>
                                <Link to='/en/#about' >ABOUT</Link>

                                <Link to='/en/#gallery' >GALLERY</Link>

                                <Link to='/en/halfandhalf' onClick={forceUpdate}>HALF&HALF</Link>

                                <Link to='/en/notice' onClick={forceUpdate}>NOTICE</Link>

                                <Link to='/en/visit' onClick={forceUpdate}>VISIT US</Link>

                                <Link to='/#main' onClick={forceUpdate}>KOR</Link>
                            </ol>

                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}

export default Top;