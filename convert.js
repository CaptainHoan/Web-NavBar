const navSlide = () => {
    const barMenu = document.querySelector(".bar_vertical")
    const navBar = document.querySelector(".nav_links");
    let myLinks = document.querySelectorAll(".nav_links ul li");
    let body = document.querySelector("body")

    barMenu.addEventListener('click', function() {
        
        navBar.classList.toggle("nav_links_active");

        myLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ""
            } else {
            link.style.animation = `navLinks_fade ease forwards ${index / 5}s`
            }
        });
        
        barMenu.classList.toggle("bar_new");

        body.classList.toggle("new_body");
    })
}

navSlide();