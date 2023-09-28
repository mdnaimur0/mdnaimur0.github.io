let menuIcon = document.querySelector('#menu-icon');
let themeModeIcon = document.querySelector('#themeMode-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

themeModeIcon.onclick = () => {
    const isDarkMode = themeModeIcon.classList.contains("bx-sun");
    themeModeIcon.classList.add(isDarkMode ? 'bx-moon' : 'bx-sun');
    themeModeIcon.classList.remove(isDarkMode ? 'bx-sun' : 'bx-moon');
    document.body.classList.toggle('lightMode');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};