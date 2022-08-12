import React, { useState } from 'react'

import '../Gallery.css'
import Default from '../assets/default.jpg'

import Photo1 from '../assets/goods/0801/tr3.png'
import Photo2 from '../assets/goods/0801/tr5.jpg'
import Photo3 from '../assets/goods/0803/20.jpg'
import Photo4 from '../assets/goods/0801/tr6.jpg'
import Photo5 from '../assets/goods/0810/25.jpg'
import Photo6 from '../assets/goods/0810/26.jpg'

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

                    <Card src={Photo1} title="Blue Cap" content="" />
                    <Card src={Photo2} title="Green Sweatshirts" content="" />
                    <Card src={Photo3} title="Denim Shirts" content="" />
                    <Card src={Photo4} title="White Shortsleeve" content="" />
                    <Card src={Photo5} title="Women Dress" content="" />
                    <Card src={Photo6} title="Golf glove" content="" />
                    <Card />


                </div>
            </div>

        )
    } else if (props.Tab === 1) {
        return (
            <div className='gallery-contents'>
                <div className='cards'>

                    <Card src={Default} title="제목1" content="내용" />
                    <Card src={Default} title="제목" content="내용" />
                    <Card src={Default} title="제목" content="내용" />
                    <Card src={Default} title="제목" content="내용" />
                    <Card src={Default} title="제목" content="내용" />
                    <Card src={Default} title="제목" content="내용" />


                </div>
            </div>

        )
    } else if (props.Tab === 2) {
        return (
            <div className='gallery-contents'>
                <div className='cards'>

                    <Card src={Default} title="제목2" content="내용" />
                    <Card src={Default} title="제목" content="내용" />
                    <Card src={Default} title="제목" content="내용" />
                    <Card src={Default} title="제목" content="내용" />
                    <Card src={Default} title="제목" content="내용" />
                    <Card src={Default} title="제목" content="내용" />


                </div>
            </div>

        )
    }
    else if (props.Tab === 3) {
        return (
            <div className='gallery-contents'>
                <div className='cards'>

                    <Card src={Default} title="제목3" content="내용" />
                    <Card src={Default} title="제목" content="내용" />
                    <Card src={Default} title="제목" content="내용" />
                    <Card src={Default} title="제목" content="내용" />
                    <Card src={Default} title="제목" content="내용" />
                    <Card src={Default} title="제목" content="내용" />


                </div>
            </div>

        )
    }
    else if (props.Tab === 4) {
        return (
            <div className='gallery-contents'>
                <div className='cards'>

                    <Card src={Default} title="제목4" content="내용" />
                    <Card src={Default} title="제목" content="내용" />
                    <Card src={Default} title="제목" content="내용" />
                    <Card src={Default} title="제목" content="내용" />
                    <Card src={Default} title="제목" content="내용" />
                    <Card src={Default} title="제목" content="내용" />


                </div>
            </div>

        )
    }
    else if (props.Tab === 5) {
        return (
            <div className='gallery-contents'>
                <div className='cards'>

                    <Card src={Default} title="제목5" content="내용" />
                    <Card src={Default} title="제목" content="내용" />
                    <Card src={Default} title="제목" content="내용" />
                    <Card src={Default} title="제목" content="내용" />
                    <Card src={Default} title="제목" content="내용" />
                    <Card src={Default} title="제목" content="내용" />


                </div>
            </div>

        )
    }
}

function Cards() {


    let [Tab, ChangeTab] = useState(0);
    return (
        <CardBundle Tab={Tab} />
    )
}

export default Cards;