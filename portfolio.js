
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';

    // If the selected section is 'portfolio', load the image gallery
    if (sectionId === 'portfolio') {
        loadGallery();
    }
}

function loadGallery() {
    const gallery = document.getElementById('gallery');
    // Example gallery images (replace with your own)
    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        // Add more image paths as needed
    ];

    gallery.innerHTML = '';
    images.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        gallery.appendChild(img);
    });
}

// Show the 'About' section by default
showSection('about');
