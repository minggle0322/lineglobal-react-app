
import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import '../Top.css'
import './TopAddOn.css'
import Toplogow from '../assets/logo-w.png'

function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update state to force render
    // An function that increment 👆🏻 the previous state like here 
    // is better than directly setting `value + 1`
}

function Top() {
    useEffect(() => {

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

    }, [])


    const forceUpdate = useForceUpdate();

    return (
        <div className='top-cont'>
            <div className="Top main-top">
                <div className='top-logo-cont'>
                    <Link to='/#main'>
                        <img className="top-logo logo-w" src={Toplogow} alt="logo"></img>
                    </Link>
                </div>
                <ol className='menu'>
                    <Link to='/#about' >ABOUT</Link>

                    <Link to='/#gallery' >GALLERY</Link>

                    <Link to='/halfandhalf' onClick={forceUpdate}>HALF&HALF</Link>

                    <Link to='/notice' onClick={forceUpdate}>NOTICE</Link>

                    <Link to='/visit' onClick={forceUpdate}>VISIT US</Link>

                    <Link to='/en' onClick={forceUpdate}>ENG</Link>
                </ol>
                <div className='mobile-menu-cont'>

                    <div className="mobile-menu-icon">☰</div>

                    <div className="mobile-close-icon">X</div>
                    <div className='mobile-menu-fixed'>
                        <ol className='mobile-menu'>
                            <Link to='/#about' >ABOUT</Link>

                            <Link to='/#gallery' >GALLERY</Link>

                            <Link to='/halfandhalf' onClick={forceUpdate}>HALF&HALF</Link>

                            <Link to='/notice' onClick={forceUpdate}>NOTICE</Link>

                            <Link to='/visit' onClick={forceUpdate}>VISIT US</Link>
                        </ol>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top;