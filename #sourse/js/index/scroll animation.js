/* settings */
// all items with this class will have animation
const animClass = '_anim-item'; // default: '_anim-item'

// all items with this class will have only one animation
const noHideClass = '_anim-no-hide'; // defaul: '_anim-no-hide'

// animation trigger class
const activeClass = '_anim-active'; // default: '_anim-active'

// coefficient (you need scroll 1/animStartCoefficient parts for animation)
const animStartCoefficient = 4; // defaul: 4 (1/4 part)

// delay in starting the checking function when opening the page
const firstCheckDelay = 300; // ms, default: 300

// if true, the program will run
const enableAnim = true;


/* program */
const animItems = document.querySelectorAll('.' + animClass);

// if there are elements
if ( animItems.length > 0 && enableAnim ) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {
        for ( let index = 0; index < animItems.length; index++ ) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;

            // element's position from the top of a page
            const animItemsOffset = getTopOffsetOf(animItem);

            // min animation point from the top of a page
            let animItemPoint = window.innerHeight - animItemHeight / animStartCoefficient;
            if ( animItemHeight > window.innerHeight )
                animItemPoint = window.innerHeight - window.innerHeight / animStartCoefficient;

            if (
                // if start point is scrolled
                ((window.pageYOffset || document.documentElement.scrollTop) > (animItemsOffset - animItemPoint)) &&
                // and end point is not scrolled
                ((window.pageYOffset || document.documentElement.scrollTop) < (animItemsOffset + animItemHeight))
            )
                animItem.classList.add(activeClass);
            else
                if ( !animItem.classList.contains(noHideClass) )
                    animItem.classList.remove(activeClass);
        }
    }

    // get scrolled pixels from the top and the left of a page
    function getTopOffsetOf(element) {
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return rect.top + scrollTop;
    }
    setTimeout(animOnScroll, firstCheckDelay);
}