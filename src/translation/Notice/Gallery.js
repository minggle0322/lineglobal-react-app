import React, { useState } from 'react'

import 'Gallery.css'
import Default from 'assets/default.jpg'


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

                    <Card src={Default} title="Title" content="Contents" />
                    <Card src={Default} title="Title" content="Contents" />
                    <Card src={Default} title="Title" content="Contents" />
                    <Card src={Default} title="Title" content="Contents" />
                    <Card src={Default} title="Title" content="Contents" />
                    <Card src={Default} title="Title" content="Contents" />


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