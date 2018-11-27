import Turbolinks from 'turbolinks';
import {
    LuminousGallery
} from 'luminous-lightbox';
Turbolinks.start();
document.addEventListener('turbolinks:click', function (event) {
    if (event.target.getAttribute('href').charAt(0) === '#') {
        return event.preventDefault()
    }
});
new LuminousGallery(document.querySelectorAll('img'), {}, {
    sourceAttribute: 'src'
});
