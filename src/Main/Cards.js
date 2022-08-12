import React, { useState } from 'react'

import '../Gallery.css'
import Default from '../assets/default.jpg'

import Photo1 from '../assets/goods/0801/tr3.png'
import Photo2 from '../assets/goods/0801/tr5.jpg'
import Photo3 from '../assets/goods/0803/20.jpg'
import Photo4 from '../assets/goods/0801/tr6.jpg'
import Photo5 from '../assets/goods/0810/25.jpg'
import Photo6 from '../assets/goods/0810/26.jpg'


import Photo7 from '../assets/goods/0729/tr1.png'
import Photo8 from '../assets/goods/0801/tr2.png'
import Photo9 from '../assets/goods/0803/5.jpg'
import Photo10 from '../assets/goods/0803/6.jpg'
import Photo11 from '../assets/goods/0803/7.jpg'
import Photo12 from '../assets/goods/0803/8.jpg'
import Photo13 from '../assets/goods/0810/27.jpg'
import Photo14 from '../assets/goods/0810/28.jpg'
import Photo15 from '../assets/goods/0810/29.jpg'
import Photo16 from '../assets/goods/0810/30.jpg'
import Photo17 from '../assets/goods/0810/31.jpg'
import Photo18 from '../assets/goods/0810/32.jpg'
import Photo19 from '../assets/goods/0810/33.jpg'
import Photo20 from '../assets/goods/0810/34.jpg'
import Photo21 from '../assets/goods/0810/35.jpg'
import Photo22 from '../assets/goods/0810/36.jpg'
import Photo23 from '../assets/goods/0810/37.jpg'
import Photo24 from '../assets/goods/0803/9.jpg'

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

                    <Card src={Photo4} title="Short Sleeves" content="" />
                    <Card src={Photo2} title="Long Sleeves" content="" />
                    <Card src={Photo5} title="Dresses/Skirt" content="" />
                    <Card src={Photo3} title="Outer" content="" />
                    <Card src={Photo1} title="Accessories" content="" />
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