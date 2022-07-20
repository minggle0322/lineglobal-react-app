import React, { useState } from 'react'
import $ from 'jquery'

import './Gallery.css'
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


function CardBundle() {

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

    return (
        <div id="gallery" className="notice Gallery">
            <div className='notice-title'>NOTICE</div>
            <CardBundle />
        </div>

    )
}

export default Gallery;