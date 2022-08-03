import React, { useEffect } from 'react';


import mainUseEffect from 'mainUseEffect'
import List from './listloop'
import Gallery from './Gallery';
import './index.css'
import './GalleryAddOn.css'

import mainvid from 'assets/mainvid.mp4'
import down from 'assets/down.svg'

import Top from './Top';



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

                        <div className='about'>about us</div>

                        <div className='about-mobile'>about us</div>
                        <h1 className='Sub1-title'>Lineglobal is growing<br />as a trusted business. </h1>

                        <h3 className='Sub1-content'>LINEGLOBAL is a consulting firm that plans and fosters brands by signing partnerships, and establishes an online / offline distribution network by planning / developing / manufacturing products. Each department is responsible for planning and manufacturing to produce results with high satisfaction. </h3>

                        <h3 className='Sub1-content-mobile'>LINEGLOBAL is a consulting firm that plans and fosters brands by signing partnerships, and establishes an online / offline distribution network by planning / developing / manufacturing products. Each department is responsible for planning and manufacturing to produce results with high satisfaction.</h3>

                    </div>
                </section>


                <section className='Sub2 Slide'>
                    <h1 className='Sub2-title'>Lineglobal creates a vision<br />with its customers<br />through experience and trust. </h1>
                    <h1 className='Sub2-title-mobile'>Lineglobal<br />creates a vision<br />with its customers through experience<br />and trust. </h1>

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
                            <h1 className='Sub3-title'>Systematic planning</h1>
                            <h3 className='Sub3-content'></h3>
                        </div>
                        <div className='Sub3-box box1 Sub3-box-before'>
                            <h1 className='Sub3-title'>Optimized production system</h1>
                            <h3 className='Sub3-content'></h3>
                        </div>
                        <div className='Sub3-box box2 Sub3-box-before'>
                            <h1 className='Sub3-title'>Guaranteed quality</h1>
                            <h3 className='Sub3-content'></h3>
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