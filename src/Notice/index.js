import React, { useEffect } from 'react';

import './index.css'
import Top from 'Top/TopB';
import Bg from '../assets/bgcircle.png'

function Notice() {

    return (
        <div className="notice">
            <Top />
            <section className="p-main Slide">
                <div className="bg-cont">
                    <img src={Bg}></img>
                </div>
            </section>
            <section className="p-sub1 Slide">
                <div className="cont-mid">
                    <div className="p-title">
                        <div className="p-title-sub">
                            <span>PROCESS</span>
                            <div className="vert-line"></div>
                        </div>
                        <div className="p-title-main">
                            <span>제품 제작,<br></br> 어떻게 이루어지나요?</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Notice;