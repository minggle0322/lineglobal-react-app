import React, { useState } from 'react'

import 'Gallery.css'

import Cards from './Cards'
function Gallery() {


    let [Tab, ChangeTab] = useState(0);
    return (
        <div className="Gallery white">
            <div className='gallery-header'>

                <div className='gallery-title'>Gallery</div>

                <ol className='nav'>
                    <li eventKey="link-0" onClick={() => { ChangeTab(0) }}>All</li>


                    {/* 
                    <li eventKey="link-1" onClick={() => { ChangeTab(1) }}>
                        Short Sleeves
                    </li>

                    <li eventKey="link-2" onClick={() => { ChangeTab(2) }}>
                        Long Sleeves
                    </li>
                    <li eventKey="link-3" onClick={() => { ChangeTab(3) }}>
                        Bottoms
                    </li>
                    <li eventKey="link-4" onClick={() => { ChangeTab(4) }}>
                        Dresses/Skirt
                    </li>
                    <li eventKey="link-5" onClick={() => { ChangeTab(5) }}>
                        Outer
                    </li>
                    <li eventKey="link-6" onClick={() => { ChangeTab(6) }}>Accessories
                    </li>

                    <li eventKey="link-1" onClick={() => { ChangeTab(1) }}>
                        의류
                    </li>

                    <li eventKey="link-2" onClick={() => { ChangeTab(2) }}>
                        유니폼
                    </li>
                    <li eventKey="link-2" onClick={() => { ChangeTab(3) }}>
                        용품
                    </li>
                    <li eventKey="link-2" onClick={() => { ChangeTab(4) }}>
                        가방
                    </li>
                    <li eventKey="link-2" onClick={() => { ChangeTab(5) }}>
                        기타
                    </li>
                    */}
                </ol>
            </div>


            <Cards />
        </div >

    )
}

export default Gallery;