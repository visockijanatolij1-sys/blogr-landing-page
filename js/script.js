const menu = document.querySelector(".menu");
const burger = document.querySelector(".burger");

const productDropdownButton = document.querySelector(".product-dropdown_button");
const productDropdownMenu = document.querySelector(".product-dropdown_menu");

const companyDropdownButton = document.querySelector(".company-dropdown_button");
const companyDropdownMenu = document.querySelector(".company-dropdown_menu");

const connectDropdownButton = document.querySelector(".connect-dropdown_button");
const connectDropdownMenu = document.querySelector(".connect-dropdown_menu");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");

    const isOpen = menu.classList.contains("active");
    menu.setAttribute("aria-expanded", isOpen);
});

productDropdownButton.addEventListener("click", () => {
    productDropdownMenu.classList.toggle("active");
    productDropdownButton.classList.toggle("active");

    const isOpen = productDropdownMenu.classList.contains("active");
    productDropdownButton.setAttribute("aria-expanded", isOpen);
});

companyDropdownButton.addEventListener("click", () => {
    companyDropdownMenu.classList.toggle("active");
    companyDropdownButton.classList.toggle("active");

    const isOpen = companyDropdownButton.classList.contains("active");
    companyDropdownButton.setAttribute("aria-expanded", isOpen);
});

connectDropdownButton.addEventListener("click", () => {
    connectDropdownMenu.classList.toggle("active");
    connectDropdownButton.classList.toggle("active");

    const isOpen = companyDropdownButton.classList.contains("active");
    companyDropdownButton.setAttribute("aria-expanded", isOpen);
});































































function ibg(){

let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
        ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }
}

ibg();