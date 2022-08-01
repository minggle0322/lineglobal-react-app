import React, { useState } from 'react'

import 'Gallery.css'
import Default from 'assets/default.jpg'

import Photo1 from 'assets/goods/8.jpg'
import Photo2 from 'assets/goods/9.jpg'
import Photo3 from 'assets/goods/10.jpg'
import Photo4 from 'assets/goods/11.jpg'
import Photo5 from 'assets/goods/12.jpg'
import Photo6 from 'assets/goods/13.jpg'
import Photo7 from 'assets/goods/14.jpg'

function Card(props) {
    return <div className='Card'>
        <div className="thumb-cont">
            <img className='thumb' src={props.src} />
        </div>
        <div className='card-texts'>
            <div className='card-title'>{props.title}</div>
            <div className='card-content'>{props.content}</div>
        </div>


    </div>;
}


function CardBundle(props) {


    if (props.Tab === 0) {
        return (
            <div className='gallery-contents'>
                <div className='cards'>

                    <Card src={Photo1} title="Title" content="Contents." />
                    <Card src={Photo2} title="Title" content="Contents." />
                    <Card src={Photo3} title="Title" content="Contents." />
                    <Card src={Photo4} title="Title" content="Contents." />
                    <Card src={Photo5} title="Title" content="Contents." />
                    <Card src={Photo6} title="Title" content="Contents." />


                </div>
            </div>

        )
    } else if (props.Tab === 1) {
        return (
            <div className='gallery-contents'>
                <div className='cards'>

                    <Card src={Default} title="Title1" content="Contents" />
                    <Card src={Default} title="Title" content="Contents" />
                    <Card src={Default} title="Title" content="Contents" />
                    <Card src={Default} title="Title" content="Contents" />
                    <Card src={Default} title="Title" content="Contents" />
                    <Card src={Default} title="Title" content="Contents" />


                </div>
            </div>

        )
    } else if (props.Tab === 2) {
        return (
            <div className='gallery-contents'>
                <div className='cards'>

                    <Card src={Default} title="Title2" content="Contents" />
                    <Card src={Default} title="Title" content="Contents" />
                    <Card src={Default} title="Title" content="Contents" />
                    <Card src={Default} title="Title" content="Contents" />
                    <Card src={Default} title="Title" content="Contents" />
                    <Card src={Default} title="Title" content="Contents" />


                </div>
            </div>

        )
    }
    else if (props.Tab === 3) {
        return (
            <div className='gallery-contents'>
                <div className='cards'>

                    <Card src={Default} title="Title3" content="Contents" />
                    <Card src={Default} title="Title" content="Contents" />
                    <Card src={Default} title="Title" content="Contents" />
                    <Card src={Default} title="Title" content="Contents" />
                    <Card src={Default} title="Title" content="Contents" />
                    <Card src={Default} title="Title" content="Contents" />


                </div>
            </div>

        )
    }
    else if (props.Tab === 4) {
        return (
            <div className='gallery-contents'>
                <div className='cards'>

                    <Card src={Default} title="Title4" content="Contents" />
                    <Card src={Default} title="Title" content="Contents" />
                    <Card src={Default} title="Title" content="Contents" />
                    <Card src={Default} title="Title" content="Contents" />
                    <Card src={Default} title="Title" content="Contents" />
                    <Card src={Default} title="Title" content="Contents" />


                </div>
            </div>

        )
    }
    else if (props.Tab === 5) {
        return (
            <div className='gallery-contents'>
                <div className='cards'>

                    <Card src={Default} title="Title5" content="Contents" />
                    <Card src={Default} title="Title" content="Contents" />
                    <Card src={Default} title="Title" content="Contents" />
                    <Card src={Default} title="Title" content="Contents" />
                    <Card src={Default} title="Title" content="Contents" />
                    <Card src={Default} title="Title" content="Contents" />


                </div>
            </div>

        )
    }
}

function Gallery() {


    let [Tab, ChangeTab] = useState(0);
    return (
        <div id="gallery" className="Gallery">
            <div className='gallery-header'>

                <div className='gallery-title'>Gallery</div>

                <ol className='nav'>
                    <li eventKey="link-0" onClick={() => { ChangeTab(0) }}>
                        All
                    </li>

                    <li eventKey="link-1" onClick={() => { ChangeTab(1) }}>
                        Clothes
                    </li>

                    <li eventKey="link-2" onClick={() => { ChangeTab(2) }}>
                        Uniform
                    </li>
                    <li eventKey="link-2" onClick={() => { ChangeTab(3) }}>
                        Supplies
                    </li>
                    <li eventKey="link-2" onClick={() => { ChangeTab(4) }}>
                        Bag
                    </li>
                    <li eventKey="link-2" onClick={() => { ChangeTab(5) }}>
                        etc
                    </li>
                </ol>
            </div>


            <CardBundle Tab={Tab} />
        </div>

    )
}

export default Gallery;