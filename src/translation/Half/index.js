import React, { useEffect } from 'react';
import PanelSnap from 'panelsnap';
import './index.css'
import BgLine from 'assets/bgline.png'
import BgPpl from 'assets/bgppl.png'
import HalfThumb from 'assets/halfthumb.png'

import Down from 'assets/h-down.png'

import HalfTop from './Top';

function Half() {

    useEffect(() => {

        Half.panelSnapInstance = new PanelSnap({
            panelSelector: '> #root > #App > #half > section',
            directionThreshold: 0,
            delay: 0,
            duration: 500,
        });
    }, [])

    return (
        <>
            <HalfTop />
            <div id="half">
                <section className="h-main Slide">
                    <span className='title'>HALF&HALF</span>
                </section>
                <section className='h-sub1 Slide'>
                    <div className='bg-line-cont'>
                        <img src={BgLine} />
                    </div>
                    <div className='texts'>

                        <div className='title'>Make a Lifestory<br />
                            with HALF&HALF</div>

                        <div className='content'>Just like living in a space<br />HALF&HALF makes a story with customers.</div>
                    </div>
                </section>
                <section className='h-sub2 Slide'>

                    <div className='bg-cont'>
                        <img src={BgPpl} />
                    </div>
                    <div className='texts'>

                        <div className='title'>Finding my half <br />
                            from HALF&HALF  </div>

                        <div className='content'>>HALF&HALF provides an exclusive value to the life,<br />
                        and promises to save the value from a confession.
                        </div>
                    </div>
                </section >

                <section id="sub3" className='h-sub3 Slide'>

                    <div className='text-cont'>
                        <div className='texts'>

                            <div className='title'>We prove a beauty and a value of space <br />
                            can be expressed from a small thing.
                            </div>

                            <div className='content'>HALF&HALF respects the individuals’ needs,<br /> <br />
                            put an effort to satisfy the needs, and find a value from itself Half&Half.
                            </div>

                        </div>
                    </div>
                    <div className='goto-shop'>
                        <div className='h-thumb-cont'>
                            <img src={HalfThumb} />
                        </div>

                        <a className='h-down-cont' href='http://halfandhalf.co.kr/'>
                            <div className='h-down-title'>HALF&HALF<br />STORE</div>
                            <div className='h-down-imgcont'>
                                <img src={Down} />
                            </div>

                        </a>
                    </div>
                </section>

            </div >
        </>
    )
}

export default Half;