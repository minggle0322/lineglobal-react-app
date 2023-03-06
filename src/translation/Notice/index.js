import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './notice.css'
import Top from 'Top/TopB';
import Bg from '../../assets/bgcircle.png'
import Bag from '../../assets/processbag.png'
import Fabric from '../../assets/fabric.png'
import Hoodie from '../../assets/hoodie.png'
import Arrow from '../../assets/arrow.png'

function Notice() {

    return (
        <div className="notice">
            <Top />
            <section className="p-main Slide">
                <div className="bg-cont">
                    <img src={Bg}></img>
                </div>
            </section>
            <section className="p-sub1 Slide">
                <div className="cont-mid">
                    <div className="p-cont1">
                        <div className="p-title">
                            <div className="p-title-sub">
                                <span>PROCESS</span>
                                <div className="vert-line"></div>
                            </div>
                            <div className="p-title-main">
                                <span>제품 제작,<br></br> 어떻게 이루어지나요?</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-cont2">
                        <div className="p-image">
                            <img src={Bag}></img>
                        </div>
                        <div className="p-word">
                            <span>라인글로벌의 오랜 생산 경험과
                            제한 없는 아이템 종류와 유니크한 디자인부터 원단 선택,
                            제품의 새심한 디테일까지 체크하여
                            만족스러운 결과물이 소비자에게 갈 수 있도록 합니다.</span>
                        </div>
                    </div>

                    <div className="p-cont3">
                        <div className="p-cont3-word">
                            <div className="p-cont3-title">
                                <span>복잡하고 어려운 제작과정 라인글로벌과 해결해요</span>
                            </div>
                            <div className="p-cont3-sub">
                            나만의 브랜드 제품을 단독 제작 시에
                            원단 발주부터 샘플, 패턴제작 작업지시서 ··· 
                            난관에 부딪치지 않도록 라인 글로벌이
                            브랜드의 생산 파트너 역할을 함께 수행합니다.
                            </div>
                        </div>
                        <div className="p-cont3-image">
                            <img src={Fabric}></img>
                        </div>
                    </div>

                    <div className="p-cont4">
                        <div className="p-cont4-title">
                            <span>제품 생산 과정</span>
                        </div>
                        <div className="p-cont4-sub">
                            <span>1:1 상담을 통해 클라이언트와 소비자 모두 만족하는 결과물을 만듭니다.
                                제품 품목 또는 디자인에 따라 제작과정은 축소될 수 있습니다.
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-sub2 Slide">
                <div className="p-sub2-tables">
                    <div className="p-sub2-table">
                        <div className="p-sub2-title">
                            <span>기획 및 개발</span>
                        </div>
                        <div className="p-sub2-sub">
                            <span>클라이언트의 니즈에 따라 제품(디자인)과 제작 틀을 잡습니다.</span>
                        </div>
                    </div>
                    <div className="arrow-angle"></div>
                    <div className="p-sub2-table">
                        <div className="p-sub2-title">
                            <span>원단, 부자재 서치</span>
                        </div>
                        <div className="p-sub2-sub">
                            <span>제품의 디자인, 질 및 가격을 고려하여 맞는 원단을 찾아 선택합니다.</span>
                        </div>
                    </div>
                    <div className="arrow-angle"></div>
                    <div className="p-sub2-table">
                        <div className="p-sub2-title">
                            <span>제작 준비</span>
                        </div>
                        <div className="p-sub2-sub">
                            <span>패턴, 샘플 제작 및 도안작업을 통해 작업지시서를 만듭니다.</span>
                        </div>
                    </div>
                    <div className="arrow-angle"></div>
                    <div className="p-sub2-table">
                        <div className="p-sub2-title">
                            <span>제작 의뢰</span>
                        </div>
                        <div className="p-sub2-sub">
                            <span>공장에 제품 제작의뢰를 맡깁니다.</span>
                        </div>
                    </div>
                </div>
                <div className="p-sub2-tables2">
                    <div className="p-sub2-table">
                        <div className="p-sub2-title">
                            <span>제작</span>
                        </div>
                        <div className="p-sub2-sub">
                            <span>기한 내에 제품을 제작합니다.</span>
                        </div>
                    </div>
                    <div className="arrow-angle"></div>
                    <div className="p-sub2-table">
                        <div className="p-sub2-title">
                            <span>검수</span>
                        </div>
                        <div className="p-sub2-sub">
                            <span>품질 검사를 통해 제품에 문제가 없는지 확인합니다.</span>
                        </div>
                    </div>
                    <div className="arrow-angle"></div>
                    <div className="p-sub2-table">
                        <div className="p-sub2-title">
                            <span>포장</span>
                        </div>
                        <div className="p-sub2-sub">
                            <span>제품에 폴리백과 택을 부착하고 포장하여 완성합니다.</span>
                        </div>
                    </div>
                    <div className="arrow-angle"></div>
                    <div className="p-sub2-table">
                        <div className="p-sub2-title">
                            <span>배송</span>
                        </div>
                        <div className="p-sub2-sub">
                            <span>제품을 클라이언트에게 전달합니다.</span>
                        </div>
                    </div>

                </div>
            </section>
            <section className="p-mob Slide">
            <div className="p-cont-mob">
                        <div className="p-cont-mob-title">
                            <span>제품 생산 과정</span>
                        </div>
                        <div className="p-cont-mob-sub">
                            <span>1:1 상담을 통해 클라이언트와 소비자 모두 만족하는 결과물을 만듭니다.
                                제품 품목 또는 디자인에 따라 제작과정은 축소될 수 있습니다.
                            </span>
                        </div>
                    </div>
            <div className="p-sub2-tables">
                    <div className="p-sub2-table">
                        <div className="p-sub2-title">
                            <span>기획 및 개발</span>
                        </div>
                        <div className="p-sub2-sub">
                            <span>클라이언트의 니즈에 따라 제품(디자인)과 제작 틀을 잡습니다.</span>
                        </div>
                    </div>
                    <div className="arrow-angle"></div>
                    <div className="p-sub2-table">
                        <div className="p-sub2-title">
                            <span>원단, 부자재 서치</span>
                        </div>
                        <div className="p-sub2-sub">
                            <span>제품의 디자인, 질 및 가격을 고려하여 맞는 원단을 찾아 선택합니다.</span>
                        </div>
                    </div>
                </div>
                <div className="p-sub2-tables">
                    <div className="p-sub2-table">
                        <div className="p-sub2-title">
                            <span>제작 준비</span>
                        </div>
                        <div className="p-sub2-sub">
                            <span>패턴, 샘플 제작 및 도안작업을 통해 작업지시서를 만듭니다.</span>
                        </div>
                    </div>
                    <div className="arrow-angle"></div>
                    <div className="p-sub2-table">
                        <div className="p-sub2-title">
                            <span>제작 의뢰</span>
                        </div>
                        <div className="p-sub2-sub">
                            <span>공장에 제품 제작의뢰를 맡깁니다.</span>
                        </div>
                    </div>
                </div>
                <div className="p-sub2-tables2">
                    <div className="p-sub2-table">
                        <div className="p-sub2-title">
                            <span>제작</span>
                        </div>
                        <div className="p-sub2-sub">
                            <span>기한 내에 제품을 제작합니다.</span>
                        </div>
                    </div>
                    <div className="arrow-angle"></div>
                    <div className="p-sub2-table">
                        <div className="p-sub2-title">
                            <span>검수</span>
                        </div>
                        <div className="p-sub2-sub">
                            <span>품질 검사를 통해 제품에 문제가 없는지 확인합니다.</span>
                        </div>
                    </div>
                </div>
                <div className="p-sub2-tables2">
                    <div className="p-sub2-table">
                        <div className="p-sub2-title">
                            <span>포장</span>
                        </div>
                        <div className="p-sub2-sub">
                            <span>제품에 폴리백과 택을 부착하고 포장하여 완성합니다.</span>
                        </div>
                    </div>
                    <div className="arrow-angle"></div>
                    <div className="p-sub2-table">
                        <div className="p-sub2-title">
                            <span>배송</span>
                        </div>
                        <div className="p-sub2-sub">
                            <span>제품을 클라이언트에게 전달합니다.</span>
                        </div>
                    </div>

                </div>
            </section>
            <section className="p-sub3 Slide">
                <div className="p-sub3-cont">
                    <div className="p-sub3-text">
                        <div className="p-sub3-title">
                            <span>나만의 브랜드 의류 제품 제작,
                                <b>라인글로벌이 함께합니다.</b>
                            </span>
                        </div>
                        <div className="p-sub3-sub">
                            <span>진입장벽이 높지만 의류 브랜드를 시작하고 싶으신 분과
                                좋은 제작 파트너가 필요한 클라이언트의 연락을 기다리고 있습니다.
                            </span>
                        </div>
                    </div>
                    <div className="p-sub3-image">
                        <img src={Hoodie}></img>
                        <Link to="/visit">
                        <button className="p-sub3-button1">
                        <span>CONTACT US</span><br></br>
                        <img src={Arrow}></img>
                        </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Notice;