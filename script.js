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
    
    /* ============================================
       3D Rotating Tech Gadgets Background Animation
       ============================================ */
    
    const techBackground = document.getElementById('tech-background');
    if (!techBackground) return;
    
    // Number of gadgets (fewer on mobile for performance)
    const gadgetCount = window.innerWidth < 768 ? 12 : 20;
    
    // Create 3D Cube
    function createCube() {
        const container = document.createElement('div');
        container.className = 'tech-gadget';
        
        const cube = document.createElement('div');
        cube.className = 'tech-cube';
        
        const faces = ['front', 'back', 'right', 'left', 'top', 'bottom'];
        faces.forEach(face => {
            const faceElement = document.createElement('div');
            faceElement.className = 'cube-face ' + face;
            cube.appendChild(faceElement);
        });
        
        container.appendChild(cube);
        return container;
    }
    
    // Create 3D Gear
    function createGear() {
        const container = document.createElement('div');
        container.className = 'tech-gadget';
        
        const gear = document.createElement('div');
        gear.className = 'tech-gear';
        
        const outer = document.createElement('div');
        outer.className = 'gear-outer';
        
        const center = document.createElement('div');
        center.className = 'gear-center';
        
        // Create 8 gear teeth
        for (let i = 0; i < 8; i++) {
            const tooth = document.createElement('div');
            tooth.className = 'gear-tooth';
            const angle = (i * 45) * (Math.PI / 180);
            const radius = 35;
            tooth.style.left = (50 + (radius * Math.cos(angle)) - 6) + '%';
            tooth.style.top = (50 + (radius * Math.sin(angle)) - 6) + '%';
            outer.appendChild(tooth);
        }
        
        outer.appendChild(center);
        gear.appendChild(outer);
        container.appendChild(gear);
        
        return container;
    }
    
    // Create Chip/Rectangle
    function createChip() {
        const container = document.createElement('div');
        container.className = 'tech-gadget';
        
        const chip = document.createElement('div');
        chip.className = 'tech-chip';
        
        const body = document.createElement('div');
        body.className = 'chip-body';
        
        // Create pins (4 on each side)
        for (let i = 0; i < 4; i++) {
            // Left side pins
            const pinLeft = document.createElement('div');
            pinLeft.className = 'chip-pin';
            pinLeft.style.left = '-5px';
            pinLeft.style.top = (10 + i * 10) + 'px';
            body.appendChild(pinLeft);
            
            // Right side pins
            const pinRight = document.createElement('div');
            pinRight.className = 'chip-pin';
            pinRight.style.right = '-5px';
            pinRight.style.top = (10 + i * 10) + 'px';
            body.appendChild(pinRight);
        }
        
        chip.appendChild(body);
        container.appendChild(chip);
        
        return container;
    }
    
    // Create Hexagon
    function createHexagon() {
        const container = document.createElement('div');
        container.className = 'tech-gadget';
        
        const hex = document.createElement('div');
        hex.className = 'tech-hexagon';
        
        const shape = document.createElement('div');
        shape.className = 'hex-shape';
        
        const center = document.createElement('div');
        center.className = 'hex-center';
        
        hex.appendChild(shape);
        hex.appendChild(center);
        container.appendChild(hex);
        
        return container;
    }
    
    // Function to position and animate a gadget
    function setupGadget(gadget, type) {
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        gadget.style.left = x + '%';
        gadget.style.top = y + '%';
        
        // Random size (0.6x to 1.4x)
        const scale = Math.random() * 0.8 + 0.6;
        const currentTransform = gadget.style.transform || '';
        
        // Random animation durations
        const rotationDuration = (Math.random() * 15 + 15) + 's'; // 15-30s
        const floatDuration = (Math.random() * 20 + 25) + 's'; // 25-45s
        const floatDelay = Math.random() * 5 + 's';
        
        // Apply floating animation
        gadget.style.animation = `floatGadget ${floatDuration} infinite ease-in-out`;
        gadget.style.animationDelay = floatDelay;
        
        // Apply rotation to inner elements
        const rotatingElement = gadget.querySelector('.tech-cube, .tech-gear, .tech-chip, .tech-hexagon');
        if (rotatingElement) {
            rotatingElement.style.animationDuration = rotationDuration;
            rotatingElement.style.animationDelay = Math.random() * 3 + 's';
        }
        
        // Apply scale
        if (currentTransform.includes('scale')) {
            gadget.style.transform = currentTransform.replace(/scale\([^)]+\)/, `scale(${scale})`);
        } else {
            gadget.style.transform = `scale(${scale})`;
        }
        
        return gadget;
    }
    
    // Gadget type array
    const gadgetTypes = [
        { create: createCube, name: 'cube' },
        { create: createGear, name: 'gear' },
        { create: createChip, name: 'chip' },
        { create: createHexagon, name: 'hexagon' }
    ];
    
    // Generate gadgets
    for (let i = 0; i < gadgetCount; i++) {
        const randomType = gadgetTypes[Math.floor(Math.random() * gadgetTypes.length)];
        const gadget = randomType.create();
        setupGadget(gadget, randomType.name);
        techBackground.appendChild(gadget);
    }
    
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

