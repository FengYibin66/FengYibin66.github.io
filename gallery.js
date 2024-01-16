function filterGallery(category) {
    var items = document.getElementsByClassName('gallery-item');
    var buttons = document.getElementsByClassName('gallery-filter');
    
    // Loop through gallery items and display only those that match the category
    for (var i = 0; i < items.length; i++) {
        if (category === 'all' || items[i].getAttribute('data-category') === category) {
            items[i].style.display = '';
        } else {
            items[i].style.display = 'none';
        }
    }

    // Remove 'active' class from all buttons
    for (var j = 0; j < buttons.length; j++) {
        buttons[j].classList.remove('active');
    }

    // Add 'active' class to the button that matches the category
    for (var k = 0; k < buttons.length; k++) {
        if (buttons[k].getAttribute('data-category') === category) {
            buttons[k].classList.add('active');
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

window.onload = function() {
    var galleryItems = document.getElementsByClassName('gallery-item');
    for (var i = 0; i < galleryItems.length; i++) {
        var img = galleryItems[i].getElementsByTagName('img')[0];
        img.onload = function() {
            this.parentElement.style.width = this.naturalWidth + 'px';
            this.parentElement.style.height = this.naturalHeight + 'px';
        };
    }
};
