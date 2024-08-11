// Burger menu toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});
document.addEventListener('DOMContentLoaded', function() {
    const resumeLink = document.getElementById('resumeLink');

    // Set data to be transferred during the drag
    resumeLink.addEventListener('dragstart', function(e) {
        e.dataTransfer.setData('text/uri-list', resumeLink.href);
        e.dataTransfer.setData('text/plain', 'Drag the resume link to save or move it.');
    });

    // Optionally, handle drag over and drop events to customize the behavior
    resumeLink.addEventListener('dragover', function(e) {
        e.preventDefault(); // Necessary to allow a drop
    });

    resumeLink.addEventListener('drop', function(e) {
        e.preventDefault();
        alert('Resume link dropped!');
    });
});

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: 'smooth'
        });

        navLinks.classList.remove('nav-active');
        burger.classList.remove('toggle');
    });
});



// Form submission alert
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! have a nice day');
});