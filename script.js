function updateNavbar() {
    const offset = document.documentElement.scrollTop;
    const navbar = document.getElementById('navbar');
    if (offset > 450) {
        navbar.classList.remove('navbar-expanded');
    } else {
        navbar.classList.add('navbar-expanded');
    }
};

window.onscroll = updateNavbar;

updateNavbar();
