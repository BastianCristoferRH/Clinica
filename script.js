document.addEventListener('DOMContentLoaded', function () {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarNav = document.querySelector('.navbar-collapse');
    var navLinks = document.querySelectorAll('.nav-link');


    navbarToggler.addEventListener('click', function () {
        if (navbarNav.classList.contains('show')) {
            navbarNav.classList.remove('show');
        } else {
            navbarNav.classList.add('show'); 
        }
    });


    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navbarNav.classList.remove('show'); 
        });
    });

    window.addEventListener('scroll', function () {
        var navLinks = document.querySelectorAll('.nav-link');
        var nav = document.querySelector('.navbar');
        var container = document.querySelector('.container-full');
        var scrollTop = window.scrollY;

        navLinks.forEach(function (link) {
            var sectionId = link.getAttribute('href').substring(1); 
            var section = document.getElementById(sectionId);

            if (isInViewport(section)) {

                link.classList.add('active');
            } else {
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
