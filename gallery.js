
//JavaScript for Interactivity
//Your `gallery.js` might include the following:
function filterGallery(category) {
    var items = document.getElementsByClassName('gallery-item');
    for (var i = 0; i < items.length; i++) {
        if (category === 'all' || items[i].getAttribute('data-category') === category) {
            items[i].style.display = '';
        } else {
            items[i].style.display = 'none';
        }
    }
}

function openLightbox(src) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = src;
    lightbox.classList.add('active');
}

function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
}
