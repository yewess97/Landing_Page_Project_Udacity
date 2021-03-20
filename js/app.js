/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */


/**
 * Define Global Variables
 *
 */

const navbar = document.querySelector("#navbar");
const navbarMenu = document.querySelector("#navbar-menu");
const sectionsItems = document.querySelectorAll("section");
const sectionId = document.querySelectorAll('section[id]');
const navItems = document.querySelector("#navbar-items");
const navMenuItems = document.querySelector("#navbar-menu");
const backTopBtn = document.querySelector("#back-to-top");

/**
 * End Global Variables
 * Begin Main Functions
 *
 */

// Change the background color of the navbar when scroll
function navScroll() {
    const navYPos = window.pageYOffset;
    if (navYPos > 33) {
        navbar.style.background = "linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 1))";
    } else {
        navbar.style.backgroundColor = "none";
    }
}


// To open the navigation menu
function openNavMenu() {
    navbarMenu.style.width = "250px";
}

// To close the navigation menu
function closeNavMenu() {
    navbarMenu.style.width = "0";
}


// Build the navbar and navbar menu with the elements/items
function createNavItems() {

    // To build the navbar
    for (const section of sectionsItems) {
        let navItemName = section.getAttribute("data-nav");
        let navLink = section.getAttribute("id");
        let navItem = document.createElement("li");
        navItem.innerHTML = `<a href="#${navLink}">${navItemName}</a>`;
        navItems.appendChild(navItem);
    }

    // To build the navbar menu
    for (const section of sectionsItems) {
        let navItemName = section.getAttribute("data-nav");
        let navLink = section.getAttribute("id");
        let navItem = document.createElement("li");
        navItem.innerHTML = `<a href="#${navLink}">${navItemName}</a>`;
        navMenuItems.appendChild(navItem);
    }
}


// Adding a scroll to top button on the page that is only visible when the user scrolls below the fold of the page
function backToTop() {
    document.documentElement.scrollTop = 0;
}

function scrollTopBtn() {
    if (document.documentElement.scrollTop > 50) {
        backTopBtn.style.display = "block";
    } else {
        backTopBtn.style.display = "none";
    }
}

window.onscroll = function () {
    scrollTopBtn();
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Activate the scrolling navbar changes event
window.addEventListener("scroll", navScroll);


// Build the navigation bar & menu event
window.addEventListener("load", createNavItems);


// Set sections as active
window.addEventListener("DOMContentLoaded", function () {

    // Determine the visibility and position of DOM elements which are targets in relation to a containing element/item or to the top-level viewport
    const controller = new IntersectionObserver(function (sections) {
        sections.forEach(function (section) {
            const secId = section.target.getAttribute("id");
            if (section.intersectionRatio > 0) {
                document.querySelector(`#navbar-items li a[href="#${secId}"]`).parentElement.classList.add("active-nav-items");
                document.querySelector(`#navbar-menu li a[href="#${secId}"]`).parentElement.classList.add("active-nav-items");
                document.querySelector(`section[id=${secId}]`).firstElementChild.classList.add("active-section-item");
                document.querySelector(`section[id=${secId}]`).lastElementChild.classList.add("active-section-content");
            } else {
                document.querySelector(`#navbar-items li a[href="#${secId}"]`).parentElement.classList.remove("active-nav-items");
                document.querySelector(`#navbar-menu li a[href="#${secId}"]`).parentElement.classList.remove("active-nav-items");
                document.querySelector(`section[id=${secId}]`).firstElementChild.classList.remove("active-section-item");
                document.querySelector(`section[id=${secId}]`).lastElementChild.classList.remove("active-section-content");
            }
        });
    });

    // Keep track of all sections with their 'id'
    sectionId.forEach(function (section) {
        controller.observe(section);
    });

});

/**
 * Begin additional code
 */

/**Hide fixed navigation bar & menu while not scrolling and be present on page load (You can uncomment the code to see the changes)*/

// const beforeNavScroll = window.pageYOffset;
// window.onscroll = function () {
//     const afterNavScroll = window.pageYOffset;
//     if (beforeNavScroll > afterNavScroll) {
//         navbar.style.top = "0";
//         navbarMenu.style.width = "-100px";
//     } else {
//         navbar.style.top = "-100px";
//         navbarMenu.style.width = "0";
//     }
//     beforeNavScroll = afterNavScroll;
// }