
import React from 'react';
const configs = {
    /* texts: Array of strings as list items */
    texts: ['2017 Manufacture promotion & Online reselling', 
        'Korea Fashion Industry Association corp. Director',
        'HALF&HALF SHOPPING MALL ',
        'HALF&HALF PET WEAR LAUNCHING',
        'OIOI / ANGLAN / BROW END',
        'MISS JOH / TEEPSY / PLAY MAKER',
        'STELLA CO / SOURIUM / ESORFIT 48/OASIS manufacture and deliver',
        'online selling web & wholesale website building for sinwoocozy corp.',
        'Opened 2 Wholeslae store in China CHANGCHOA(ZIEL) ',
        'MATTSON showroom entering / joining marketweek local show',
        'CHANGSA/SHENZEN/TIANJIN(KOTRA) pop-up & order conference fashion show',
        'COEX Parnas mall pop-up / LOTTE FITIN pop-up / galleria pop-up',
        'THE HYUNDAI jungdong pop-up / LOTTE mall pop-up',
        'Joined China F/W fair',
        'Joined CHIC exhibition design lecture as a Korean design company representitive',
        'Malaysia Kuala Lumpur Isetan Department store pop-up & SBA',
        'Joined Busan F/W&exhibition',
        'Joined Korea Style Week Runway show & exhibition',
        'Joined Fashion KODE & exhibition',
        'Joined Indie Fair',
        'Joined Dusan Tower rising designer mall Women’s fashionistar',
        'Joined Korea and Mongolia EXPO exhibition & Korea design company representitive solo fashion show',
        'Joined China Beijing CHIC exhibition',
        'entered Namdaemun Buff3.4 store',
        'selected as one of the ten most emerging designers from N paycon',
        'Mireya fashion show sponsored by SSG',
        'Korean production merchandiser',
        'and promotion in French design brand(April,May)',
        'Launched Mireya brand design planning & exported to China',
        'Running national brand promotion',
        'Providing sponsorship to influencers',
        'International hair show Berlin sponsorship',
        'Launched a brand Teraa on Mok-dong & Mia-dong / sanggye-dong / Siheung',
        'exported C&T Japanese mask',
        'Vacuum bag 300,000 pieces production for OASIS',
        'Forwell(art silk underwear and charcoal processing)',
        'Belgium brand LAROY director',
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