import React, { useEffect } from 'react';
import Gallery from './Gallery';
import DropDown from 'Top/DropDown';

import './index.css'
import Top from 'Top/TopB';

function Notice() {

    return (
        <div className="notice">
            <DropDown />
            <Top />
            <Gallery />
        </div>
    )
}

export default Notice;