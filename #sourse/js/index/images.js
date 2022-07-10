for ( let infoIcon of document.body.querySelectorAll('.main__image-icon_info') )
    infoIcon.onclick = function() {
        this.parentElement.classList.add('main__image-block_active');
    };

for ( let closeIcon of document.body.querySelectorAll('.main__image-icon_close') )
    closeIcon.onclick = function() {
        this.parentElement.classList.remove('main__image-block_active');
    };


// buttons
document.body.querySelector('.main__button-text').onclick = function() {
    const images = document.body.querySelector('.main__images_my-portfolio');

    images.classList.toggle('main__images_active');

    if ( images.classList.contains('main__images_active') )
        this.innerHTML = translationMap[document.documentElement.lang]['hide-works'];
    else
        this.innerHTML = translationMap[document.documentElement.lang]['load-more'];
};