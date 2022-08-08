import $ from 'jquery'
import PanelSnap from 'panelsnap'
import Main from 'Main/index'

function mainUseEffect() {

    if (window.innerWidth > 900) {

        $(function () {

            Main.panelSnapInstance = new PanelSnap({
                panelSelector: '> #root > #App > #Main > section',
                directionThreshold: 1,
                delay: 0,
                duration: 500,
            });


            // IntersectionObserver 를 등록한다.
            const sub1 = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    // 관찰 대상이 viewport 안에 들어온 경우 'tada' 클래스를 추가
                    if (entry.intersectionRatio > 0) {
                        $('.about').addClass('fadein-ani');
                        $('.Sub1-title').addClass('fadein-ani-1');
                        $('.Sub1-content').addClass('fadein-ani-2');
                    }
                    else {
                        $('.about').removeClass('fadein-ani');
                        $('.Sub1-title').removeClass('fadein-ani-1');
                        $('.Sub1-content').removeClass('fadein-ani-2');
                    }
                })
            }, { threshold: [0.5] });

            const sub2 = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.intersectionRatio > 0) {

                        $('.Sub1-content').addClass('fadein-ani-2');
                        $('.Sub2-title').addClass('fadein-ani');
                    }
                    else {
                        $('.Sub1-content').removeClass('fadein-ani-2');
                        $('.Sub2-title').removeClass('fadein-ani');
                    }

                })
            }, { threshold: [0.5] });

            const sub3 = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.intersectionRatio > 0) {

                        $('.Sub3-line').addClass('line-ani');
                        $('.box0').addClass('box0-ani');
                        $('.box1').addClass('box1-ani');
                        $('.box2').addClass('box2-ani');

                        $('.Sub3-box').addClass('Sub3-box-after');
                    }
                    else {

                        $('.Sub3-line').removeClass('line-ani');
                        $('.box0').removeClass('box0-ani');
                        $('.box1').removeClass('box1-ani');
                        $('.box2').removeClass('box2-ani');

                        $('.Sub3-box').removeClass('Sub3-box-after');
                    }

                })
            }, { threshold: [0.5] });

            // 관찰할 대상을 선언하고, 해당 속성을 관찰시킨다.
            sub1.observe($('.Sub1')[0]);
            sub2.observe($('.Sub2')[0]);
            sub3.observe($('.Sub3')[0]);

        });
    }
    window.addEventListener("resize", function () {

        if (window.innerWidth > 900) {

            Main.panelSnapInstance = new PanelSnap({
                panelSelector: '> #root > #App > #Main > section',
                directionThreshold: 0,
                delay: 0,
                duration: 500,
            });

        }
    })
}

export default mainUseEffect;