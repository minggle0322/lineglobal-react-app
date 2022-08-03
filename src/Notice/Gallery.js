import React, { useState } from 'react'

import '../Gallery.css'
import './GalleryAddOn.css'
import Default from '../assets/default.jpg'


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
    return (
        <div className='gallery-contents'>
            <div className='cards'>

                <Card src={Default} title="제목" content="내용" />
                <Card src={Default} title="제목" content="내용" />
                <Card src={Default} title="제목" content="내용" />
                <Card src={Default} title="제목" content="내용" />
                <Card src={Default} title="제목" content="내용" />
                <Card src={Default} title="제목" content="내용" />


            </div>
        </div>

    )
}
function Gallery() {


    let [Tab, ChangeTab] = useState(0);
    return (
        <div id="gallery" className="Gallery notice-gallery">
            <div className='gallery-header'>

                <div className='gallery-title'>Notice</div>

            </div>


            <CardBundle />
        </div>

    )
}

export default Gallery;