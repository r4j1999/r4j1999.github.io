// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = '0.2s';
        }
    });
});

document.querySelectorAll('section').forEach(section => observer.observe(section));

// Modal functionality
document.querySelectorAll('.modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const modalId = btn.dataset.modal;
        document.getElementById(`modal${modalId}`).style.display = 'block';
    });
});

document.querySelectorAll('.close').forEach(close => {
    close.addEventListener('click', () => {
        close.closest('.modal').style.display = 'none';
    });
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

// CTA button scroll to projects
document.querySelector('.cta-btn').addEventListener('click', () => {
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
});
