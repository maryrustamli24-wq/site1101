/* ============================================
   JavaScript for Portfolio Website
   ============================================ */

// Wait for DOM to be fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function() {
    
    /* ============================================
       Mobile Menu Toggle Functionality
       ============================================ */
    
    // Get references to mobile menu elements
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    // Toggle mobile menu when hamburger icon is clicked
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            // Toggle 'active' class on hamburger icon
            mobileMenu.classList.toggle('active');
            // Toggle 'active' class on navigation menu
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when a navigation link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove 'active' class from hamburger icon
            mobileMenu.classList.remove('active');
            // Remove 'active' class from navigation menu
            navMenu.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside of it
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnToggle = mobileMenu.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
    
    /* ============================================
       Smooth Scrolling for Anchor Links
       ============================================ */
    
    // Add smooth scrolling behavior to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only prevent default if it's an actual anchor link (not empty hash)
            if (href !== '#' && href !== '') {
                e.preventDefault();
                
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    /* ============================================
       Active Navigation Link Highlighting
       ============================================ */
    
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Update active navigation link based on current page
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        
        // Check if current page matches the link
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === 'index.html' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    /* ============================================
       Add Scroll Animation on Page Load
       ============================================ */
    
    // Fade in main content when page loads
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.style.opacity = '0';
        mainContent.style.transition = 'opacity 0.5s ease-in';
        
        // Trigger fade-in animation
        setTimeout(function() {
            mainContent.style.opacity = '1';
        }, 100);
    }
    
    /* ============================================
       Image Lazy Loading Enhancement
       ============================================ */
    
    // Add loading animation for images if they fail to load
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Add a placeholder style if image fails to load
            this.style.backgroundColor = '#ecf0f1';
            this.alt = 'Image not found. Please check the file path.';
        });
        
        // Add loading state
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    });
    
    /* ============================================
       Console Welcome Message (for development)
       ============================================ */
    
    console.log('%c Welcome to My Portfolio! ', 'background: #3498db; color: #fff; font-size: 20px; padding: 10px;');
    console.log('This website was built with HTML, CSS, and JavaScript.');
    
});

/* ============================================
   Utility Functions
   ============================================ */

/**
 * Helper function to check if device is mobile
 * @returns {boolean} True if device width is less than 768px
 */
function isMobileDevice() {
    return window.innerWidth < 768;
}

/**
 * Helper function to debounce function calls
 * Useful for window resize events
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize events (close mobile menu on resize to desktop)
window.addEventListener('resize', debounce(function() {
    const navMenu = document.querySelector('.nav-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // If window is resized to desktop size, close mobile menu
    if (window.innerWidth > 768) {
        if (navMenu) navMenu.classList.remove('active');
        if (mobileMenu) mobileMenu.classList.remove('active');
    }
}, 250));

