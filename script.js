function windowOnScroll() {
    const scrollOffset = document.documentElement.scrollTop;
    const navbar = document.getElementById('navbar');
    const overlay = document.getElementById('header-dark-overlay');
    const height = overlay.offsetHeight;

    // Update navbar color and size
    if (scrollOffset > height * 0.5) {
        navbar.classList.remove('navbar-expanded');
    } else {
        navbar.classList.add('navbar-expanded');
    }

    // Update dark overlay opacity
    const overlayOpacity = 0.8 + 0.15 * Math.max(scrollOffset / height, 0);
    overlay.style.backgroundColor = `rgba(10,10,10,${overlayOpacity})`;
}

window.onscroll = windowOnScroll;

windowOnScroll();
