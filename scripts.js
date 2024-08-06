document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });

        link.addEventListener('mouseover', function() {
            navLinks.forEach(nav => {
                if (nav.classList.contains('active')) {
                    nav.classList.add('hovered-active');
                    nav.classList.remove('active');
                }
            });
            this.classList.add('hover');
        });

        link.addEventListener('mouseout', function() {
            navLinks.forEach(nav => {
                if (nav.classList.contains('hovered-active')) {
                    nav.classList.remove('hovered-active');
                    nav.classList.add('active');
                }
            });
            this.classList.remove('hover');
        });
    });
});
// display: flex;
//     width: 80%;
//     margin: auto;