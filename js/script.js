window.onload = function () {
    //메뉴클릭
    let menu_open = document.getElementsByClassName('menu_open')[0];
    let nav = document.getElementsByTagName('nav')[0];
    let menu_close = document.getElementsByClassName('menu_close')[0];

    nav.style.display = 'none';

    menu_open.onclick = function () {
        if (nav.style.display == 'none') {
            nav.style.display = 'block'
        }
    }
    menu_close.onclick = function () {
        if (nav.style.display == 'block') {
            nav.style.display = 'none'
        }
    }

    //2차메뉴
    $('#main_menu > li > a').click(function () {
        $(this).next($('.sub_menu')).slideToggle('fast');
    })

    //탭메뉴
    let best = document.getElementsByClassName('best')[0];
    let menuBtn = best.getElementsByTagName('li');
    let bestList = best.getElementsByClassName('list');

    for (let i = 0; i < menuBtn.length; i++) {
        menuBtn[i].onclick = function () {
            bestList[0].classList.remove('on');
            bestList[1].classList.remove('on');
            bestList[2].classList.remove('on');
            bestList[3].classList.remove('on');

            bestList[i].classList.add('on');

            menuBtn[0].classList.remove('on');
            menuBtn[1].classList.remove('on');
            menuBtn[2].classList.remove('on');
            menuBtn[3].classList.remove('on');

            menuBtn[i].classList.add('on');
        }
    }
}//window.onload