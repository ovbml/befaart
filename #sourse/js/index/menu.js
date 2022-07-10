document.body.querySelector('.header__menu-icon').onclick = function() {
    document.querySelector('.header').classList.toggle('header_active');
    animOnScroll();
};