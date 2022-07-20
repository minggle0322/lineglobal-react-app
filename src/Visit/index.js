import React, { useEffect } from 'react';
import $ from 'jquery'
import Top from './Top';

import './index.css';
import logo from '../assets/visit-logo.png'

function List(props) {
    return (
        <div className='v-list'>
            <div className='v-title'>
                {props.title}
            </div>
            <div className='v-content'>

                {props.content}
            </div>
        </div>
    );
}

function Notice() {

    useEffect(() => {
    }, [])

    return (
        <>
            <Top />
            <div className="body-wrap">
                <div className='visit-wrap'>
                    <div className='v-logo-wrap'>
                        <img src={logo} />
                    </div>
                    <div className='visit'>
                        <List title="CONTACT" content="02-3453-9939" />
                        <List title="EMAIL" content="lineglobal2010@naver.com" />
                        <List title="ADDRESS" content="경기 구리시 아차산로506번길 22 3F" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notice;