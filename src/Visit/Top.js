

import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import $ from 'jquery'

import './Top.css'
import Toplogob from '../assets/logo-b.png'
import Toplogow from '../assets/logo-w.png'


class Top extends React.Component {
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
            if (isScrolledIntoView($('.main'))) {


                $('.logo-w').addClass('none');
                $('.logo-b').removeClass('none');

                $('.menu>a').removeClass('white');
            }

            else {
                $('.logo-b').addClass('none');
                $('.logo-w').removeClass('none');


                $('.menu>a').addClass('white');

            }
        });
        $('.downcont').click(function () {
            $(window).scrollTop($(window).scrollTop() + 1);
        });
    }

    render() {
        return (
            <div className="Top">
                <div className='top-logo-cont'>
                    <Link to='/#main'>
                        <img className="top-logo logo-w none" src={Toplogow} alt="logo"></img>
                        <img className="top-logo logo-b" src={Toplogob} alt="logo"></img>
                    </Link>
                </div>
                <ol className='menu'>
                    <Link to='/#about' >ABOUT</Link>

                    <Link to='/#gallery' >GALLERY</Link>

                    <Link to='/halfandhalf' onClick={this.forceUpdate}>HALF&HALF</Link>

                    <Link to='/notice' onClick={this.forceUpdate}>NOTICE</Link>

                    <Link to='/visit' onClick={this.forceUpdate}>VISIT US</Link>
                </ol>
            </div >

        )
    }
}

export default Top;