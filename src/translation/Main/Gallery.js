import React, { useState } from 'react'

import '.../Gallery.css'
import Default from '.../assets/default.jpg'

import Photo1 from '.../assets/goods/0.png'
import Photo2 from '.../assets/goods/1.png'
import Photo3 from '.../assets/goods/2.png'
import Photo4 from '.../assets/goods/3.png'
import Photo5 from '.../assets/goods/5.png'
import Photo6 from '.../assets/goods/6.png'
import Photo7 from '.../assets/goods/7.png'

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

                    <Card src={Default} title="제목" content="설명입니다." />
                    <Card src={Default} title="제목" content="설명입니다." />
                    <Card src={Default} title="제목" content="설명입니다." />
                    <Card src={Default} title="제목" content="설명입니다." />
                    <Card src={Default} title="제목" content="설명입니다." />
                    <Card src={Default} title="제목" content="설명입니다." />


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
                </ol>
            </div>


            <CardBundle Tab={Tab} />
        </div>

    )
}

export default Gallery;