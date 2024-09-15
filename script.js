// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Animation for Cards
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});
cards.forEach(card => {
    observer.observe(card);
});

// Toggle Modules for Each Subject
const moduleButtons = document.querySelectorAll('.module-button');
moduleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modules = button.nextElementSibling;
        if (modules.style.display === "none" || modules.style.display === "") {
            modules.style.display = "block";
        } else {
            modules.style.display = "none";
        }
    });
});

// Add Loading Spinner When Loading PDFs
const downloadButtons = document.querySelectorAll('.download-btn');
const spinner = document.querySelector('.spinner-container');

downloadButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Show spinner when download starts
        spinner.style.display = 'block';

        // Simulate PDF load delay for demonstration (you can remove this in real app)
        setTimeout(() => {
            spinner.style.display = 'none';
        }, 3000); // Simulate a 3-second loading delay
    });
});
