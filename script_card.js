document.querySelectorAll('.clickable-card').forEach(card => {
    card.addEventListener('click', function() {
        document.getElementById('modalTitle').textContent = this.querySelector('.card-title').textContent;
        document.getElementById('modalImage').src = this.querySelector('img').src;
        document.getElementById('modalDescription').textContent = this.querySelector('.card-text').textContent;
        document.getElementById('enlargedCardModal').style.display = "block";
    });
});

// Close the modal when the 'x' is clicked
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('enlargedCardModal').style.display = "none";
});