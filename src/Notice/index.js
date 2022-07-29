import React, { useEffect } from 'react';
import Gallery from './Gallery';

import Top from './Top';

function Notice() {

    useEffect(() => {
    }, [])

    return (
        <div className="notice">
            <Top />
            <Gallery />
        </div>
    )
}

export default Notice;