import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './Main/index.js';
import Half from './Half/index.js';
import Notice from './Notice/index.js';

import Visit from './Visit/index.js';
import NotFound from './NotFound';
import Translation from './translation/Main/index.js';

function App() {
    return (
        <div id="App">

            <BrowserRouter>
                <Routes>
                    <Route path="" element={<Main />} />
                    <Route path="/halfandhalf" element={<Half />} />
                    {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}

                    <Route path="/notice" element={<Notice />} />

                    <Route path="/visit" element={<Visit />} />
                    <Route path="/en" element={<Translation/>} />


                    <Route path="/*" element={<NotFound />} />

                    
                </Routes>
            </BrowserRouter>
        </div >
    );
}
export default App;