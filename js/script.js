const drop = document.querySelector('#button');
const menu = document.querySelector('#menu');

drop.addEventListener('click', () => {
    if (menu.classList.contains('dropdown-content_active') == true) {
        menu.classList.remove('dropdown-content_active');
    } else {
        menu.classList.add('dropdown-content_active');
    }
})

$(document).ready(function(){
    $('.options__carousel').slick(
        {
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1
          }
    );
});