import React, { useState, useEffect } from 'react';
import $ from 'jquery'
import PanelSnap from 'panelsnap';
import List from './listloop'
import Gallery from './Gallery';
import './index.css'
import './GalleryAddOn.css'

import mainvid from '../assets/mainvid.mp4'
import down from '../assets/down.svg'

import Top from './Top';



function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
};

// listen for scroll event


function Main() {
    useEffect(() => {

        if (window.innerWidth > 900) {

            $(function () {

                Main.panelSnapInstance = new PanelSnap({
                    panelSelector: '> #root > #App > #Main > section',
                    directionThreshold: 0,
                    delay: 0,
                    duration: 500,
                });


                // IntersectionObserver 를 등록한다.
                const sub1 = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                        // 관찰 대상이 viewport 안에 들어온 경우 'tada' 클래스를 추가
                        if (entry.intersectionRatio > 0) {
                            $('.about').addClass('fadein-ani');
                            $('.Sub1-title').addClass('fadein-ani-1');
                            $('.Sub1-content').addClass('fadein-ani-2');
                        }
                        else {
                            $('.about').removeClass('fadein-ani');
                            $('.Sub1-title').removeClass('fadein-ani-1');
                            $('.Sub1-content').removeClass('fadein-ani-2');
                        }
                    })
                }, { threshold: [0.5] });

                const sub2 = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                        if (entry.intersectionRatio > 0) {

                            $('.Sub1-content').addClass('fadein-ani-2');
                            $('.Sub2-title').addClass('fadein-ani');
                        }
                        else {
                            $('.Sub1-content').removeClass('fadein-ani-2');
                            $('.Sub2-title').removeClass('fadein-ani');
                        }

                    })
                }, { threshold: [0.5] });

                const sub3 = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                        if (entry.intersectionRatio > 0) {

                            $('.Sub3-line').addClass('line-ani');
                            $('.box0').addClass('box0-ani');
                            $('.box1').addClass('box1-ani');
                            $('.box2').addClass('box2-ani');

                            $('.Sub3-box').addClass('Sub3-box-after');
                        }
                        else {

                            $('.Sub3-line').removeClass('line-ani');
                            $('.box0').removeClass('box0-ani');
                            $('.box1').removeClass('box1-ani');
                            $('.box2').removeClass('box2-ani');

                            $('.Sub3-box').removeClass('Sub3-box-after');
                        }

                    })
                }, { threshold: [0.5] });

                // 관찰할 대상을 선언하고, 해당 속성을 관찰시킨다.
                sub1.observe($('.Sub1')[0]);
                sub2.observe($('.Sub2')[0]);
                sub3.observe($('.Sub3')[0]);

            });
        }
        window.addEventListener("resize", function () {

            if (window.innerWidth > 900) {

                Main.panelSnapInstance = new PanelSnap({
                    panelSelector: '> #root > #App > #Main > section',
                    directionThreshold: 0,
                    delay: 0,
                    duration: 500,
                });

            }
        })


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

                        <div className='about'>about us</div>

                        <div className='about-mobile'>about us</div>
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


                <section className='Sub3 Slide'>

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
                </section>




                <section id='gallery' className='Sub4'>

                    <Gallery />
                </section>

            </div>
        </>
    )
}

export default Main;