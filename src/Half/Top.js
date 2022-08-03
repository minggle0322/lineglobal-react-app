

import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import $ from 'jquery'

import 'Top.css'
import './TopAddOn.css'
import Toplogob from 'assets/logo-b.png'
import Toplogow from 'assets/logo-w.png'

function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update state to force render
    // An function that increment 👆🏻 the previous state like here 
    // is better than directly setting `value + 1`
}
function HalfTop() {


    const forceUpdate = useForceUpdate();
    useEffect(() => {
        const hsub3 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {

                    $('.logo-w').addClass('none');
                    $('.logo-b').removeClass('none');

                    $('.menu>a').addClass('black');
                }
                else {
                    $('.logo-b').addClass('none');
                    $('.logo-w').removeClass('none');

                    $('.menu>a').removeClass('black');
                }

            })
        }, { threshold: [0.5] });
        hsub3.observe(document.querySelector('.h-sub3'));

    }, [])
    return (
        <div className="Top half-top">
            <div className='top-logo-cont'>
                <Link to='/#main' onClick={forceUpdate}>
                    <img className="top-logo logo-w " src={Toplogow} alt="logo"></img>
                    <img className="top-logo logo-b none" src={Toplogob} alt="logo"></img>
                </Link>
            </div>
            <ol className='menu'>
                <Link to='/#gallery' onClick={forceUpdate}>GALLERY</Link>

                <Link to='/halfandhalf/#half'>HALF&HALF</Link>

                <Link to='/notice' onClick={forceUpdate}>NOTICE</Link>

                <Link to='/visit' onClick={forceUpdate}>VISIT US</Link>

                <Link to='/en/halfandhalf' onClick={forceUpdate}>ENG</Link>
            </ol>
        </div >

    )
}

export default HalfTop;