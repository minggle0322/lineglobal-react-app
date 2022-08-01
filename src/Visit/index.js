import React from 'react';
import Top from './Top';

import './index.css';

function List(props) {
    return (
        <div className='contact-list'>
            <div className='title'>
                {props.title}
            </div>
            <div className='content'>

                {props.content}
            </div>
        </div>
    );
}

function Notice() {
    return (
        <>
            <Top />
            <div className="body-wrap">
                <div className='visit'>

                    <div className='title-wrap'>
                        <div className='title'>Contact.</div>
                        <div className='content'>클라이언트와의 새로운 만남을 기다리고 있습니다. </div>
                    </div>


                    <div className='address-wrap'>
                        <div className='title'>ADDRESS</div>
                        <div className='content'>경기 구리시 아차산로506번길 22 3F 라인글로벌</div>
                    </div>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12644.373106411475!2d127.1149683488938!3d37.599963694780755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cb0a42df70d43%3A0xaac29d0b2c1b49c!2z6rK96riw64-EIOq1rOumrOyLnCDqtZDrrLjrj5kgMjAyLTY!5e0!3m2!1sko!2skr!4v1658463127181!5m2!1sko!2skr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


                    <div className='contact-info'>
                        <List title="TEL" content="02-3453-9939" />
                        <List title="EMAIL" content="info@lineglobal17.com" />
                        <List title="SNS" content="카카오톡" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notice;