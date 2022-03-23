/* Header Showing Script  */
var headDown = document.querySelector(".fa-angle-down-1");
var mainHeader = document.getElementById("main-header");

headDown.addEventListener("click", () => {
  mainHeader.classList.toggle("showHeader");
  // Getting header Height
  var headerHeight = mainHeader.getBoundingClientRect().height;
  console.log(headerHeight);
  // checking header open or not
  if (mainHeader.classList.contains("showHeader")) {
    headDown.style.top = `${headerHeight}px`;
  } else {
    headDown.style.top = 0;
  }
});
// Onresize Window Header Go to in its position
window.addEventListener("resize", () => {
  if (mainHeader.classList.contains("showHeader")) {
    mainHeader.classList.remove("showHeader");
    headDown.style.top = "";
  } else {
  }
});
/* Header Showing Script Ends  */

/* ----- Script For Search div Pop Up ----- */
const searchICon = document.querySelector(".fa-search-btn-1");
const closeSearch = document.querySelector(".fa-times-btn-1");
const hideSearchDiv = document.querySelector(".hide-search-div");
const inputAutoFocus = document.getElementById("search-input");

searchICon.addEventListener("click", () => {
  hideSearchDiv.classList.add("show-search-div");
});

closeSearch.addEventListener("click", () => {
  hideSearchDiv.classList.remove("show-search-div");
});

/* Search div Pop Up End's */

/* ---- Custom Hamburger Begin's ---- */

var Hamburger = document.getElementById("nav-icon4");
const phoneNavbar = document.querySelector(".phone-navbar");
const phoneMain = document.querySelector(".phone-main");
const logoWithMenu = document.querySelector(".logo-with-menu");
// Hamburger Function
Hamburger.addEventListener("click", () => {
  Hamburger.classList.toggle("open");
  phoneMain.classList.toggle("show-dropdown-navbar");
  // Getting the Height of Menu
  const phoneNavbarHeight = phoneNavbar.getBoundingClientRect().height;
  // Checking the Hamburger menu
  if (phoneMain.classList.contains("show-dropdown-navbar")) {
    phoneMain.style.height = `${phoneNavbarHeight}px`;
  } else {
    phoneMain.style.height = ``;
  }
});

/* ---- Custom Hamburger End's ---- */

/* ---- Further OR Max-Further Dropdown height changing Script ---- */

const phoneAngleDown = document.querySelectorAll(".byScript-1");
const phoneAngleDown2 = document.querySelectorAll(".byScript-2");
const dropdownMain = document.querySelectorAll(".dropdown-main");

dropdownMain.forEach((e) => {
  // On Mouse Enter
  e.addEventListener("mouseenter", (e) => {
    e.currentTarget.classList.add("activeDropdown");
  });
  // On Mouse Leave
  e.addEventListener("mouseleave", (e) => {
    e.currentTarget.classList.remove("activeDropdown");
  });
});
/* Further Dropdown Script */
phoneAngleDown.forEach((e) => {
  e.addEventListener("click", (e) => {
    // Get to open the the active dropdown
    const zeroHeight = document.querySelector(".activeDropdown .zeroHeight");
    const furtherDropdownMain = document.querySelector(
      ".activeDropdown .further-dropdown-main"
    );
    // Get height of Dropdown
    const heightfurtherDropdownMain =
      furtherDropdownMain.getBoundingClientRect().height;
    // Adding a class to rotate the icon
    e.currentTarget.classList.toggle("iconRotation");
    // Checking the Height is zero or not / dropdown open or not
    if (zeroHeight.style.height != 0) {
      zeroHeight.style.height = ``;
    } else {
      zeroHeight.style.height = `${heightfurtherDropdownMain}px`;
    }
  });
});
/* Max Further Dropdown script */
phoneAngleDown2.forEach((e) => {
  e.addEventListener("click", (e) => {
    // Get to open more the active dropdown
    const maxZeroHeight = document.querySelector(
      ".activeDropdown .max-dropdown-zero"
    );
    const maxDropdownMain = document.querySelector(
      ".activeDropdown .max-further-dropdown-main"
    );

    // Get height of Dropdown
    const heightmaxDropdownMain =
      maxDropdownMain.getBoundingClientRect().height;

    // Adding a class to rotate the icon
    e.currentTarget.classList.toggle("iconRotation");

    // Checking the Height is zero or not / dropdown open or not
    if (maxZeroHeight.style.height != 0) {
      maxZeroHeight.style.height = ``;
    } else {
      maxZeroHeight.style.height = `${heightmaxDropdownMain}px`;
    }
  });
});

/* ---- Further Dropdown height changing Script End's ---- */
// End's
