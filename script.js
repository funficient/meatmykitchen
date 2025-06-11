window.addEventListener("scroll", function() {
    const header = document.querySelector(".sticky-header");
    if (window.scrollY > 50) {  // When the user scrolls 50px down
        header.style.position = "fixed";
        
    } else {
        header.style.position = "absolute";
        
    }
});
