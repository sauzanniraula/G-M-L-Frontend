document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth scrolling & Active Nav Link update
    const navLinks = document.querySelectorAll('.nav-links li');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all
            navLinks.forEach(item => item.classList.remove('active'));
            // Add to clicked
            this.classList.add('active');
        });
    });

    // Fade In Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.feature-card, .team-card-minimal, .project-row');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});