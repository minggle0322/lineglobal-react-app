import React, { useState } from 'react'

import '../Gallery.css'
import Default from '../assets/default.jpg'

import Photo1 from '../assets/1.png'
import Photo2 from '../assets/2.png'
import Photo3 from '../assets/3.png'
import Photo4 from '../assets/4.png'
import Photo5 from '../assets/5.png'
import Photo6 from '../assets/6.png'
import Photo7 from '../assets/7.png'
import Photo8 from '../assets/8.png'
import Photo9 from '../assets/9.png'
import Photo10 from '../assets/10.png'

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

                    <Card src={Photo1} title="HOOD TRACK TOP" content="ENZOBLUES" />
                    <Card src={Photo2} title="TWEED JACKET&PANTS" content="OIOI" />
                    <Card src={Photo3} title="DENIM SHIRTS&PANTS" content="ANGLAN" />
                    <Card src={Photo4} title="BUSTIER&SKIRT" content="SEOUL APPAREL" />
                    <Card src={Photo5} title="PEBBLE-PRINTED RUG" content="SALTY PEBBLE" />
                    <Card src={Photo7} title="SUEDE ROUND DRESS" content="ENZOBLUES" />
                    <Card src={Photo8} title="WOOL STRAIGHT TROUSERS" content="J.RIUM" />
                    <Card src={Photo9} title="WOOL LONG SKIRT" content="J.RIUM" />
                    <Card src={Photo10} title="DENIM SET-UP" content="FRUTA"/>
                    <Card src={Photo6} title="" content="" />
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