const dropdown = document.querySelector('.header__dropdown');


for ( let dropdownItem of dropdown.querySelectorAll('.header__dropdown-item') )
    dropdownItem.onclick = function() {
        if ( dropdown.classList.contains('header__dropdown_active') ) {
            dropdown.querySelector('.header__dropdown-item_active').classList.remove('header__dropdown-item_active');
            this.classList.add('header__dropdown-item_active');
            dropdown.classList.remove('header__dropdown_active');
            
            locationTools.search.set({lang: this.id});
            document.documentElement.lang = this.id;
        } else 
            dropdown.classList.add('header__dropdown_active');
    };

document.body.onclick = function(event) {
    if ( event.path[0] !== dropdown && event.path[1] !== dropdown )
        dropdown.classList.remove('header__dropdown_active');
};


// onload
(function() {
    let search = locationTools.search.get();

    if ( typeof search.lang === 'string' ) {
        let newActiveItem = dropdown.querySelector('#' + search.lang);

        if ( newActiveItem ) {
            dropdown.querySelector('.header__dropdown-item_active').classList.remove('header__dropdown-item_active');
            newActiveItem.classList.add('header__dropdown-item_active');
            document.documentElement.lang = newActiveItem.id;
        }
    }
})();