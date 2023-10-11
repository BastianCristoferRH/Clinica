document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.navbar-toggler').addEventListener('click', function () {
        var navbarNav = document.querySelector('.navbar-collapse');
        if (navbarNav.classList.contains('show')) {
            navbarNav.classList.remove('show');
        } else {
            navbarNav.classList.add('show');
        }
    });

    window.addEventListener('scroll', function () {
        var navLinks = document.querySelectorAll('.nav-link');
        var nav = document.querySelector('.navbar');
        var container = document.querySelector('.container-full');
        var scrollTop = window.scrollY;

        navLinks.forEach(function (link) {
            var sectionId = link.getAttribute('href').substring(1); // Elimina el símbolo '#'
            var section = document.getElementById(sectionId);

            if (isInViewport(section)) {
                // Agregar una clase CSS al enlace activo
                link.classList.add('active');
            } else {
                // Eliminar la clase CSS del enlace no activo
                link.classList.remove('active');
            }
        });

        if (scrollTop >= container.offsetTop) {
            nav.classList.add('fixed');
        } else {
            nav.classList.remove('fixed');
        }
    });

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});
