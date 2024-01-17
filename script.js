// JavaScript 文件: script.js
document.addEventListener('DOMContentLoaded', function() {
    // JavaScript to make site interactive
    alert('Welcome to My Website!');
});

document.querySelectorAll('.clickable-card').forEach(card => {
    
    card.addEventListener('click', function() {
        console.log("calledcalledcalled")
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
