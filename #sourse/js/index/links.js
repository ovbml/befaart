for ( let headerLink of document.querySelectorAll('._scroll_link') )
    headerLink.onclick = function(event) {
        event.preventDefault();

        document.body.querySelector( this.getAttribute('href' ) ).scrollIntoView({behavior: 'smooth'});
    };