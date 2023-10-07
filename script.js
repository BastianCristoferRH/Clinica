document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("nav-links");

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Agregar un evento de clic a las opciones del menú
    const menuItems = document.querySelectorAll("#nav-links li a");
    menuItems.forEach((item) => {
        item.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });

    window.addEventListener("scroll", function () {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll("#nav-links li a");

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();

            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                });
                navLinks[index].classList.add("active");
            }
        });
    });
});
