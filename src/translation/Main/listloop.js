
import React from 'react';
const configs = {
    /* texts: Array of strings as list items */
    texts: ['2017생산프로모션 및 온라인 판매대행',
        '한국 패션협회 사단법인 이사',
        'HALF&HALF SHOPPING MALL ',
        'HALF&HALF PET WEAR LAUNCHING',
        'OIOI / ANGLAN / BROW END',
        'MISS JOH / TEEPSY / PLAY MAKER',
        'STELLA CO / SOURIUM / ESORFIT 48/OASIS 제작 및 납품',
        '2017 주식회사 신우코지 온라인 판매망 구축및 도매사이트 제작',
        '중국 CHANGCHA 도매 매장 오픈 2개점(ZIEL)',
        '미국 MATTON 쇼룸입점 및 마켓위크 로컬쇼 참가',
        '중국 창사/심천/천진(코트라기획)팝업 및 수주 상담회 패션쇼',
        '코엑스 파르나스몰/ 롯데백화점/ 롯데 피트인 ',
        '현대백화점 / 갤러리아 팝업스토어 연계  ',
        '중국 패션 위크 전시회 참가',
        '중국 상해 CHIC 전시회 한국 디자이너 기업 대표 디자인 강의',
        '말레이시아 쿠알라룸프르 이세탄 백화점 팝업 및 수주상담회(SBA)',
        '부산패션위크 연합쇼 및 전시회 참가',
        '코리아스타일위크 런웨이쇼 및 전시회 참가',
        '패션코드 프리플로우쇼 및 전시회 참가',
        '인디페어 참가',
        '두타 신진디자이너몰 Women’s fashionistar 입점',
        '한.몽 EXPO 전시 참가 및 한국 디자이너 기업 대표 단독 패션쇼',
        '중국 북경 CHIC 전시회 참가',
        '남대문 Buff3.4 매장 입점',
        'N페이콘 신진 디자이너 10인 선정',
        '신세계 후원 MIREYA 패션쇼',
        '프랑스 디자이너브랜드',
        '(April,May) 한국 생산 MD 및 프로모션 운영',
        'Mireya 브랜드 런칭 디자인 기획 및 중국 수출',
        '내셔널 브랜드 프로모션 운영',
        '영화 의상 협찬 및 제작',
        '국제 헤어쇼 베를린 참가의상 제작',
        'Teraa 브랜드 런칭 목동 1호점 및 미아 상계 시흥 등 대리점 전개',
        '프로모션 업체 운영 다수',
        '한.몽 EXPO 전시 참가 및 한국 디자이너 기업 대표 단독 패션쇼',
        '코리아스타일위크 런웨이쇼',
        '신세계 후원 MIREYA 패션쇼',
        '패션코드 프리플로우쇼',
        'C&T 일본 마스크 수출',
        'OASIS (새벽 배송업체) 보냉백',
        '포웰 이불, 인견 팬티 등 숯 가공 제품 제작',
        '벨기에 LAROY BRAND 국내 입점 DIRECTOR',
    ],
};


function PreList(props) {
    const list = props.texts.map((text) => {
        return (<div>{text}</div>);
    });
    return (
        <div className="list"  >
            {list}
        </div>
    );
}

function List() {
    return (
        <PreList {...configs} />
    );
}


export default List;