const header = documrySelector("header");
window.addEventListener("scroll", function () {header.classList.toggle("sticky",window.scrollY>100)});