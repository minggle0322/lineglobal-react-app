

import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import '../Top.css'
import './TopAddOn.css'
import Toplogow from '../assets/logo-w.png'


class Top extends React.Component {

    render() {
        return (
            <>
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

                            <Link to='/halfandhalf' onClick={this.forceUpdate}>HALF&HALF</Link>

                            <Link to='/notice' onClick={this.forceUpdate}>NOTICE</Link>

                            <Link to='/visit' onClick={this.forceUpdate}>VISIT US</Link>
                        </ol>
                        <div className='mobile-menu-cont'>

                            <div className="mobile-menu-icon">☰</div>
                            <div className='mobile-menu-fixed'>
                                <ol className='mobile-menu'>
                                    <Link to='/#about' >ABOUT</Link>

                                    <Link to='/#gallery' >GALLERY</Link>

                                    <Link to='/halfandhalf' onClick={this.forceUpdate}>HALF&HALF</Link>

                                    <Link to='/notice' onClick={this.forceUpdate}>NOTICE</Link>

                                    <Link to='/visit' onClick={this.forceUpdate}>VISIT US</Link>
                                </ol>

                            </div>
                        </div>
                    </div >
                </div>
            </>
        )
    }
}

export default Top;