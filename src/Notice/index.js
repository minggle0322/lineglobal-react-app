import React, { useEffect } from 'react';
import $ from 'jquery'
import Gallery from './Gallery';

import Top from './Top';

function Notice() {

    useEffect(() => {
    }, [])

    return (
        <>
            <Top />
            <Gallery />
        </>
    )
}

export default Notice;