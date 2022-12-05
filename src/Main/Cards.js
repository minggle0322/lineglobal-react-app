import React, { useState } from 'react'

import '../Gallery.css'
import Default from '../assets/default.jpg'

import Photo1 from '../assets/18.png'
import Sub1 from '../assets/18.2.png'
import Photo2 from '../assets/17.png'
import Sub2 from '../assets/17.2.png'
import Photo3 from '../assets/16.png'
import Sub3 from '../assets/16.2.png'
import Photo4 from '../assets/15.png'
import Sub4 from '../assets/15.2.png'
import Photo5 from '../assets/14.png'
import Sub5 from '../assets/14.2.png'
import Photo6 from '../assets/13.png'
import Sub6 from '../assets/13.2.png'
import Photo7 from '../assets/12.png'
import Sub7 from '../assets/12.2.png'
import Photo8 from '../assets/11.png'
import Sub8 from '../assets/11.2.png'
import Photo9 from '../assets/10.png'
import Sub9 from '../assets/10.2.png'
import Photo10 from '../assets/9.png'
import Sub10 from '../assets/9.2.png'
import Photo11 from '../assets/8.png'
import Sub11 from '../assets/8.2.png'
import Photo12 from '../assets/7.png'
import Sub12 from '../assets/7.2.png'
import Photo13 from '../assets/5.png'
import Sub13 from '../assets/5.2.png'
import Photo14 from '../assets/4.png'
import Sub14 from '../assets/4.2.png'
import Photo15 from '../assets/3.png'
import Sub15 from '../assets/3.2.png'
import Photo16 from '../assets/2.png'
import Sub16 from '../assets/2.2.png'
import Photo17 from '../assets/1.png'
import Sub17 from '../assets/1.2.png'
import Photo18 from '../assets/19.png'
import Sub18 from '../assets/19.2.png'
import Photo19 from '../assets/20.png'
import Sub19 from '../assets/20.2.png'
import Photo20 from '../assets/21.png'
import Sub20 from '../assets/21.2.png'
import Photo21 from '../assets/22.png'
import Sub21 from '../assets/22.2.png'
import Photo22 from '../assets/23.png'
import Sub22 from '../assets/23.2.png'

function Card(props) {
    return <div className='Card'>
        <div className="thumb-cont">
            <img className='thumb' src={props.src} />
            <img className='thumb1' src={props.srcs} />
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
                    <Card src={Photo22} title="STRAP LINE PANTS" content="SUU" srcs={Sub22} />
                    <Card src={Photo21} title="DOUBLE TUCK PANTS" content="SUU" srcs={Sub21} />
                    <Card src={Photo20} title="PADDED JACKET" content="SUU" srcs={Sub20} />
                    <Card src={Photo19} title ="RSA WIND-BLOCK JACKET" content="SANSANGEAR" srcs={Sub19} />
                    <Card src={Photo18} title="RSA VEST" content="SANSANGEAR" srcs={Sub18} />
                    <Card src={Photo1}  title="FLEECE JACKET" content="SANSANGEAR" srcs={Sub1} />
                    <Card src={Photo2} title="BELT BAG SUEDE JACKET" content="SUU" srcs={Sub2} />
                    <Card src={Photo3} title="FLOWER BUTTON JACKET & SKIRT" content="SUU"srcs={Sub3} />
                    <Card src={Photo4} title="LEATHER BLOUSON JACKET" content="TRWA"srcs={Sub4} />
                    <Card src={Photo5} title="WOOL BLOUSON JACKET" content="TRWA"srcs={Sub5} />
                    <Card src={Photo6} title="PARKA TRENCH COAT" content="TRWA"srcs={Sub6} />
                    <Card src={Photo7} title="CORDUROY SET-UP" content="AJOBYAJO"srcs={Sub7} />
                    <Card src={Photo8} title="LOOSEFIT CARGO PANTS" content="MNGU" srcs={Sub8}/>
                    <Card src={Photo9} title="DENIM SET-UP" content="FRUTA"srcs={Sub9} />
                    <Card src={Photo10} title="WOOL LONG SKIRT" content="J.RIUM" srcs={Sub10}/>
                    <Card src={Photo11} title="WOOL STRAIGHT TROUSERS" content="J.RIUM" srcs={Sub11}/>
                    <Card src={Photo12} title="SEUDE ROUND DRESS" content="ENZOBLUES" srcs={Sub12}/>
                    <Card src={Photo13} title="PEBBLE-PRINTED RUG" content="SALTY PEBBLE"srcs={Sub13} />
                    <Card src={Photo14} title="BUSTIER&SKIRT" content="SEOUL APPAREL"srcs={Sub14} />
                    <Card src={Photo15} title="DENIM SHIRTS & PANTS" content="ANGLAN"srcs={Sub15} />
                    <Card src={Photo16} title="TWEED JACKET & PANTS" content="OIOI"srcs={Sub16} />
                    <Card src={Photo17} title="HOOD TRACK TOP" content="ENZOBLUES"srcs={Sub17}/>
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