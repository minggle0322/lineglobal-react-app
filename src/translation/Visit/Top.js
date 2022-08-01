

import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import 'Top.css'
import './TopAddOn.css'
import Toplogob from 'assets/logo-b.png'


class Top extends React.Component {

    render() {
        return (
            <div className="Top">
                <div className='top-logo-cont'>
                    <Link to='/en/#main'>
                        <img className="top-logo logo-b" src={Toplogob} alt="logo"></img>
                    </Link>
                </div>
                <ol className='menu'>
                    <Link to='/en/#about' >ABOUT</Link>

                    <Link to='/en/#gallery' >GALLERY</Link>

                    <Link to='/en/halfandhalf' onClick={this.forceUpdate}>HALF&HALF</Link>

                    <Link to='/en/notice' onClick={this.forceUpdate}>NOTICE</Link>

                    <Link to='/en/visit' onClick={this.forceUpdate}>VISIT US</Link>

                    <Link to='/visit' onClick={this.forceUpdate}>KOR</Link>
                </ol>
            </div >

        )
    }
}

export default Top;