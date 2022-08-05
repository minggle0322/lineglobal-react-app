import React, { useEffect } from 'react';
import PanelSnap from 'panelsnap';
import './index.css'
import BgLine from '../assets/bgline.png'
import BgPpl from '../assets/bgppl.png'
import HalfThumb from '../assets/halfthumb.png'

import Down from '../assets/h-down.png'

import Top from 'Top/TopW';

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
            <Top />
            <div id="half">
                <section className="h-main Slide">
                    <span className='title'>HALF&HALF</span>

                    <span className='m-title'>HALF<br />&<br />HALF</span>
                </section>
                <section className='h-sub1 Slide'>
                    <div className='bg-line-cont'>
                        <img src={BgLine} />
                    </div>
                    <div className='texts'>

                        <div className='title'>하프앤하프와 함께<br />
                            만들어가는 라이프스토리</div>

                        <div className='content'>공간을 공간답게, 생활을 생활답게<br />하프앤하프는 고객과 함께 스토리를 만들어나갑니다.</div>
                    </div>
                </section>
                <section className='h-sub2 Slide'>

                    <div className='bg-cont'>
                        <img src={BgPpl} />
                    </div>
                    <div className='texts'>

                        <div className='title'>하프앤하프에서 <br />
                            찾아가는 나의 절반  </div>

                        <div className='content'>HALF & HALF 는 라이프에 아름다운 가치를 제공하고,<br />
                            그 가치가 진정한 마음에서 나온다는 기준을 지키고자 합니다.
                        </div>
                    </div>
                </section >

                <section id="sub3" className='h-sub3 Slide'>

                    <div className='text-cont'>
                        <div className='texts'>

                            <div className='title'>공간의 아름다움과 가치는 작은 것으로부터 <br />
                                표현할 수 있음을 증명합니다.
                            </div>

                            <div className='content'>HALF & HALF 는 모든 사람의 니즈를 존중하고, 만족시키기 위해 그 어떤 패턴도 고집하지 않으며 <br />
                                선택의 자유, 그 안에서 자신의 가치를 찾아가는 하프앤하프입니다.
                            </div>

                        </div>

                        <div className='m-texts'>

                            <div className='title'>공간의 아름다움과 가치는 작은 것으로부터 표현할 수 있음을 증명합니다.
                            </div>

                            <div className='content'>HALF & HALF 는 모든 사람의 니즈를 존중하고, 만족시키기 위해 그 어떤 패턴도 고집하지 않으며, 선택의 자유 그 안에서 자신의 가치를 찾아가는 하프앤하프입니다.
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