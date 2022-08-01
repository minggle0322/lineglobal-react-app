

import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import $ from 'jquery'

import 'Top.css'
import './TopAddOn.css'
import Toplogob from 'assets/logo-b.png'
import Toplogow from 'assets/logo-w.png'


class HalfTop extends React.Component {
    componentDidMount() {
        function isScrolledIntoView(elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();

            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();

            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        };

        $(window).scroll(function () {
            // check if element is scrolled into view
            if (isScrolledIntoView($(".h-sub3"))) {


                $('.logo-w').addClass('none');
                $('.logo-b').removeClass('none');

                $('.menu>a').addClass('black');

            }

            else {
                $('.logo-b').addClass('none');
                $('.logo-w').removeClass('none');


                $('.menu>a').removeClass('black');
            }
        });
    }


    render() {
        return (
            <div className="Top half-top">
                <div className='top-logo-cont'>
                    <Link to='/#main' onClick={this.forceUpdate}>
                        <img className="top-logo logo-w " src={Toplogow} alt="logo"></img>
                        <img className="top-logo logo-b none" src={Toplogob} alt="logo"></img>
                    </Link>
                </div>
                <ol className='menu'>
                    <Link to='/#about' onClick={this.forceUpdate}>ABOUT</Link>

                    <Link to='/#gallery' onClick={this.forceUpdate}>GALLERY</Link>

                    <Link to='/halfandhalf/#half'>HALF&HALF</Link>

                    <Link to='/notice' onClick={this.forceUpdate}>NOTICE</Link>

                    <Link to='/visit' onClick={this.forceUpdate}>VISIT US</Link>

                    <Link to='/en/halfandhalf' onClick={this.forceUpdate}>ENG</Link>
                </ol>
            </div >

        )
    }
}

export default HalfTop;