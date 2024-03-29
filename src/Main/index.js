import React, { useEffect } from 'react';

import mainUseEffect from 'mainUseEffect'
import List from './listloop'
import Gallery from './Gallery';
import './index.css'
import './GalleryAddOn.css'

import mainvid from '../assets/mainvid.mp4'
import down from '../assets/down.svg'
import img from 'assets/bgmain.png'

import Top from 'Top/TopW';

function Main() {
    useEffect(() => {

        mainUseEffect();


    }, [])

    return (
        <>
            <Top />
            <div id="Main" class="main-cont">


                <section id="main" className="main Slide">

                    <div className='imgcont'>
                        <video className="logo" muted autoPlay loop playsInline>
                            <source src={mainvid} type="video/mp4" />
                        </video>
                    </div>



                    <div className='downcont'>
                        <img className="down" src={down} alt="downward arrow"></img>
                    </div>

                </section>
                <section id="about" className='Sub1 Slide'>
                    <div className='headingcont'>

                        <div className='about'>ABOUT US</div>

                        <div className='about-mobile'>ABOUT US</div>
                        <h1 className='Sub1-title'>신뢰받는 라인글로벌로<br />성장해나가고 있습니다. </h1>

                        <h3 className='Sub1-content'>LINEGLOBAL은 파트너십을 체결하여 브랜드를 기획 육성하고, <br /> 제품을 기획/개발/제조하여 온오프라인 유통망을 구축하는 컨설팅 업체입니다.<br /> 각 사업 부서에서 기획과 제조를 맡아 만족도 높은 결과를 만들어갑니다. </h3>

                        <h3 className='Sub1-content-mobile'>LINEGLOBAL은 파트너십을 체결하여 브랜드를 기획 육성하고, 제품을 기획/개발/제조하여 온오프라인 유통망을 구축하는 컨설팅 업체입니다. 각 사업 부서에서 기획과 제조를 맡아 만족도 높은 결과를 만들어갑니다. </h3>

                    </div>
                </section>


                <section className='Sub2 Slide'>
                    <h1 className='Sub2-title'>라인글로벌은 경험과 신뢰를 통해<br />고객과의 비전을 만들어갑니다. </h1>
                    <h1 className='Sub2-title-mobile'>라인글로벌은<br />경험과 신뢰를 통해<br />고객과의 비전을 만들어갑니다. </h1>

                    <div className='listcont'>
                        <List />
                    </div>

                    <div className='bggrad'></div>
                    <div className='listgrad'></div>
                </section >


                <section className='Sub3 Slide-img'>

                    <div className='Sub3-line'> </div>
                    <div className='Sub3-cont'>
                        <div className='Sub3-box box0 Sub3-box-before'>
                            <h1 className='Sub3-title'>체계적인 기획</h1>
                            <h3 className='Sub3-content'>systematic planning</h3>
                        </div>
                        <div className='Sub3-box box1 Sub3-box-before'>
                            <h1 className='Sub3-title'>최적화된 생산 시스템</h1>
                            <h3 className='Sub3-content'>optimized production system</h3>
                        </div>
                        <div className='Sub3-box box2 Sub3-box-before'>
                            <h1 className='Sub3-title'>보증된 품질</h1>
                            <h3 className='Sub3-content'>guaranteed quality</h3>
                        </div>


                    </div>
                    <div className='Sub3-img'>
                        <img src={img}></img>
                        </div>    

                    
                    
                </section>




                <section id='gallery' className='Sub4'>

                    <Gallery />
                </section>

            </div>
        </>
    )
}

export default Main;