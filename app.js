// Select the modal and its elements
const modal = document.getElementById('modal'); // Modal container
const modalImg = document.getElementById('modal-img'); // Full-size image in the modal
const closeBtn = document.querySelector('.close'); // Close button for the modal
const galleryItems = document.querySelectorAll('.gallery-item img'); // All images in the gallery

// Navigation and full-screen controls
const nextBtn = document.querySelector('.next'); // Next button in modal
const prevBtn = document.querySelector('.prev'); // Previous button in modal
const fullScreenBtn = document.getElementById('fullscreen'); // Full-screen button in modal

// Track the currently displayed image index in the modal
let currentIndex = 0;

// Event listener for opening the modal on image click
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        modal.style.display = 'flex'; // Show modal
        modalImg.src = item.src; // Set modal image to the clicked image
        currentIndex = index; // Update current index to the clicked image's index
    });
});

// Function to update the modal image based on the given index
const showImage = (index) => {
    modalImg.src = galleryItems[index].src; // Set modal image source
};

// Event listener for navigating to the previous image
prevBtn.addEventListener('click', () => {
    currentIndex =
        currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1; // Wrap around to last image if at the first
    showImage(currentIndex); // Display the new image
});

// Event listener for navigating to the next image
nextBtn.addEventListener('click', () => {
    currentIndex =
        currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1; // Wrap around to first image if at the last
    showImage(currentIndex); // Display the new image
});

// Event listener for closing the modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // Hide modal
});

// Close modal when clicking outside of the modal image
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        // Only close if clicking directly on modal background
        modal.style.display = 'none';
    }
});

// Full-screen mode toggle for the modal image
fullScreenBtn.addEventListener('click', () => {
    if (modalImg.requestFullscreen) {
        // Check for standard full-screen support
        modalImg.requestFullscreen();
    } else if (modalImg.webkitRequestFullscreen) {
        // Support for Safari
        modalImg.webkitRequestFullscreen();
    } else if (modalImg.msRequestFullscreen) {
        // Support for older Internet Explorer
        modalImg.msRequestFullscreen();
    }
});
