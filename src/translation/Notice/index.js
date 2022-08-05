import React, { useEffect } from 'react';
import Gallery from './Gallery';

import 'Notice/index.css'
import Top from '../Top/TopB';

function Notice() {

    return (
        <div className="notice">
            <Top />
            <Gallery />
        </div>
    )
}

export default Notice;