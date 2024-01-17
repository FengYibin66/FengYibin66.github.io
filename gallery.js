function filterGallery(category) {
    var items = document.getElementsByClassName('gallery-item');
    var filters = document.getElementsByClassName('gallery-filter');
    
    console.log('Filtering by category:', category); // This is now in the correct place
    
    // Remove 'active' class from all filter buttons
    for (var i = 0; i < filters.length; i++) {
        filters[i].classList.remove('active');
    }
    
    // Add 'active' class to the clicked filter button
    event.target.classList.add('active');
    
    for (var i = 0; i < items.length; i++) {
        console.log('Current item category:', items[i].getAttribute('data-category')); // Moved inside the loop
        console.log('Item display style before:', items[i].style.display); // Moved inside the loop

        // Check if the current item matches the selected category or 'all'
        if (category === 'all' || items[i].getAttribute('data-category') === category) {
            items[i].style.display = ''; // Show the item
            items[i].classList.add('show-title'); // Show the title
            items[i].classList.add('show-description'); // Show the description
        } else {
            items[i].style.display = 'none'; // Hide the item
            items[i].classList.remove('show-title'); // Hide the title
            items[i].classList.remove('show-description'); // Hide the description
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
