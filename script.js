 const btnMenuOpen = document.querySelector("#menu-open-button");
 const btnMenuClose = document.querySelector("#menu-close-button");

 btnMenuOpen.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");

 });

 btnMenuClose.addEventListener("click", () => btnMenuOpen.click());

