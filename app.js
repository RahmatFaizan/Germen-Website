/* Header Showing Script  */
var headDown = document.querySelector(".fa-angle-down-1");
var mainHeader = document.getElementById("main-header");

headDown.addEventListener("click", () => {
  mainHeader.classList.toggle("showHeader");
  // Getting header Height
  var headerHeight = mainHeader.getBoundingClientRect().height;
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
  inputAutoFocus.focus();
});

closeSearch.addEventListener("click", () => {
  hideSearchDiv.classList.remove("show-search-div");
});

inputAutoFocus.addEventListener("blur", () => {
  hideSearchDiv.addEventListener("mouseup", () => {
    hideSearchDiv.classList.remove("show-search-div");
  });
});

/* Search div Pop Up End's */

/* ---- Custom Hamburger Begin's ---- */

var Hamburger = document.getElementById("nav-icon4");
const phoneNavbar = document.querySelector(".phone-navbar");
const phoneNavbarZero = document.querySelector(".phone-navbar-zero");
// Hamburger Function
Hamburger.addEventListener("click", () => {
  Hamburger.classList.toggle("open");
  phoneNavbarZero.classList.toggle("autoHeight");
});

/* ---- Custom Hamburger End's ---- */

/* ---- Further OR Max-Further Dropdown height changing Script ---- */

const phoneAngleDown = document.querySelectorAll(".byScript-1");
const phoneAngleDown2 = document.querySelectorAll(".byScript-2");
const dropdownMain = document.querySelectorAll(".dropdown-main");
const maxDropdownMain = document.querySelectorAll(".max-further-dropdown");
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

maxDropdownMain.forEach((e) => {
  // On Mouse Enter
  e.addEventListener("mouseenter", (e) => {
    e.currentTarget.classList.add("max-activeDropdown");
  });
  // On Mouse Leave
  e.addEventListener("mouseleave", (e) => {
    e.currentTarget.classList.remove("max-activeDropdown");
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

    // Adding a class to rotate the icon
    e.currentTarget.classList.toggle("iconRotation");

    // Checking the Height is zero or not / dropdown open or not
    if (zeroHeight.style.height != 0) {
      zeroHeight.style.height = ``;
    } else {
      zeroHeight.style.height = "auto";
      // zeroHeight.style.height = `${heightfurtherDropdownMain}px`;
    }
  });
});
/* Max Further Dropdown script */
phoneAngleDown2.forEach((e) => {
  e.addEventListener("click", (e) => {
    // Get to open more the active dropdown
    const maxZeroHeight = document.querySelector(
      ".activeDropdown .max-activeDropdown .max-dropdown-zero"
    );
    const maxDropdownMain = document.querySelector(
      ".activeDropdown .max-activeDropdown .max-further-dropdown-main"
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

/* Script For Navbar to fixed on scroll  */

const scrollToFix = document.getElementById("scroll-to-fix");
const Navbar = document.getElementById("nav");
window.addEventListener("scroll", () => {
  const howMuchScroll = scrollToFix.getBoundingClientRect().height + 10;
  Navbar.classList.toggle("sticky", window.scrollY > howMuchScroll);
});

// Form Custom validation

const allInputs = document.querySelectorAll(".familar-input");
var lastInvalid = document.querySelector(".invalid-gen");
var Form = document.querySelector(".form");

//

var fName = document.getElementById("first-name");
var lName = document.getElementById("last-name");
var webInput = document.getElementById("Website");
var email = document.getElementById("email");

//

var fNameWarn = document.querySelector(".fname-warn");
var lNameWarn = document.querySelector(".lname-warn");
var webInputWarn = document.querySelector(".web-warn");
var emailWarn = document.querySelector(".email-warn");

//

var fNameCheck = document.querySelector(".fname-check");
var lNameCheck = document.querySelector(".lname-check");
var webInputCheck = document.querySelector(".web-check");
var emailCheck = document.querySelector(".email-check");

//

var submitBtn = document.querySelector(".submit-btn");

//

var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

// Form Check box

const checkbox = document.querySelector(".checkbox");
const tick = document.querySelector(".fa-check-1");
const invalidCheckbox = document.querySelector(".invalid-checkbox");

//

allInputs.forEach((e) => {
  e.addEventListener("blur", () => {
    if (e.value == "" || e.value == " ") {
      e.nextElementSibling.textContent = "Dies ist ein Pflichtfeld.";
      e.classList.add("e-rro-r");
    } else {
      e.nextElementSibling.textContent = "";
      e.classList.remove("e-rro-r");
    }
    lastErrorText();
  });
});

function lastErrorMsgCheck() {
  allInputs.forEach((e) => {
    e.addEventListener("keyup", () => {
      lastErrorText();
    });
  });
}

//

function lastErrorText() {
  if (
    fName.classList.contains("e-rro-r") ||
    lName.classList.contains("e-rro-r") ||
    webInput.classList.contains("e-rro-r") ||
    email.classList.contains("e-rro-r") ||
    email.classList.contains("pattern-e-rro-r") ||
    tick.classList.contains("e-rro-r")
  ) {
    lastInvalid.textContent =
      "Bitte korrigiere die Fehler, bevor du das Formular sendest.";
    lastErrorMsgCheck();
  } else {
    lastInvalid.textContent = "";
  }
}
//

function fNameErrorCheck() {
  fName.addEventListener("keyup", () => {
    if (fName.value == "" || fName.value == " ") {
      fName.nextElementSibling.textContent = "Dies ist ein Pflichtfeld.";
      fNameWarn.style.width = "48px";
      fNameCheck.style.width = "0";
      fName.style.borderColor = "red";
      fName.classList.add("e-rro-r");
    } else {
      fName.nextElementSibling.textContent = "";
      fNameWarn.style.width = "0";
      fNameCheck.style.width = "25px";
      fName.style.borderColor = "green";
      fName.classList.remove("e-rro-r");
    }
  });
}

function lNameErrorCheck() {
  lName.addEventListener("keyup", () => {
    if (lName.value == "" || lName.value == " ") {
      lName.nextElementSibling.textContent = "Dies ist ein Pflichtfeld.";
      lNameWarn.style.width = "48px";
      lNameCheck.style.width = "0";
      lName.style.borderColor = "red";
      lName.classList.add("e-rro-r");
    } else {
      lName.nextElementSibling.textContent = "";
      lNameWarn.style.width = "0";
      lNameCheck.style.width = "25px";
      lName.style.borderColor = "green";
      lName.classList.remove("e-rro-r");
    }
  });
}

function webInputErrorCheck() {
  webInput.addEventListener("keyup", () => {
    if (webInput.value == "" || webInput.value == " ") {
      webInput.nextElementSibling.textContent = "Dies ist ein Pflichtfeld.";
      webInputWarn.style.width = "48px";
      webInputCheck.style.width = "0";
      webInput.style.borderColor = "red";
      webInput.classList.add("e-rro-r");
    } else {
      webInput.nextElementSibling.textContent = "";
      webInputWarn.style.width = "0";
      webInputCheck.style.width = "25px";
      webInput.style.borderColor = "green";
      webInput.classList.remove("e-rro-r");
    }
  });
}

function emailErrorCheck() {
  email.addEventListener("keyup", () => {
    if (!email.value.match(pattern)) {
      email.nextElementSibling.textContent =
        "Bitte gib eine gültige E-Mail-Adresse ein.";
      emailWarn.style.width = "48px";
      emailCheck.style.width = "0";
      email.style.borderColor = "red";
      email.classList.add("e-rro-r");
      email.classList.add("pattern-e-rro-r");
    } else {
      email.nextElementSibling.textContent = "";
      emailWarn.style.width = "0";
      emailCheck.style.width = "25px";
      email.style.borderColor = "green";
      email.classList.remove("e-rro-r");
      email.classList.remove("pattern-e-rro-r");
    }
  });
}
function showfNameError() {
  fNameWarn.style.width = "48px";
  fNameCheck.style.width = "0";
  fName.style.borderColor = "red";
  fName.nextElementSibling.textContent = "Dies ist ein Pflichtfeld.";
}

function showlNameError() {
  lNameWarn.style.width = "48px";
  lNameCheck.style.width = "0";
  lName.style.borderColor = "red";
  lName.nextElementSibling.textContent = "Dies ist ein Pflichtfeld.";
}

function invalidEmail() {
  emailWarn.style.width = "48px";
  emailCheck.style.width = "0";
  email.style.borderColor = "red";
  email.nextElementSibling.textContent =
    "Bitte gib eine gültige E-Mail-Adresse ein.";
}

function showEmailError() {
  emailWarn.style.width = "48px";
  emailCheck.style.width = "0";
  email.style.borderColor = "red";
  email.nextElementSibling.textContent = "Dies ist ein Pflichtfeld.";
}

function showWebError() {
  webInputWarn.style.width = "48px";
  webInputCheck.style.width = "0";
  webInput.style.borderColor = "red";
  webInput.nextElementSibling.textContent = "Dies ist ein Pflichtfeld.";
}

//

fName.addEventListener("blur", () => {
  if (fName.value == "" || fName.value == " ") {
    showfNameError();
    fNameErrorCheck();
  } else {
  }
});

lName.addEventListener("blur", () => {
  if (lName.value == "" || lName.value == " ") {
    lNameErrorCheck();
    showlNameError();
  } else {
  }
});

email.addEventListener("blur", () => {
  if (!email.value.match(pattern)) {
    emailErrorCheck();
    invalidEmail();
  } else {
  }

  //

  if (email.value == "") {
    showEmailError();
    emailErrorCheck();
  } else {
  }
});

webInput.addEventListener("blur", () => {
  if (webInput.value == "" || webInput.value == " ") {
    webInputErrorCheck();
    showWebError();
  } else {
  }
});

//
function checkboxFtn() {
  if (tick.classList.contains("checked")) {
    invalidCheckbox.textContent = "";
    tick.classList.remove("e-rro-r");
  } else {
    invalidCheckbox.textContent = "Dies ist ein Pflichtfeld.";
    tick.classList.add("e-rro-r");
  }
}
checkbox.addEventListener("click", () => {
  tick.classList.toggle("checked");
  checkboxFtn();
  lastErrorText();
});

//

//

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkboxFtn();
  if (
    fName.value == "" ||
    fName.value == " " ||
    lName.value == "" ||
    lName.value == " " ||
    webInput.value == "" ||
    webInput.value == " " ||
    email.value == "" ||
    !tick.classList.contains("checked")
  ) {
    Form.lastElementChild.textContent =
      "Bitte korrigiere die Fehler, bevor du das Formular sendest.";
  } else {
    Form.lastElementChild.textContent = "";
  }

  //

  if (fName.value == "" || fName.value == " ") {
    showfNameError();
    fNameErrorCheck();
  } else {
  }

  //

  if (lName.value == "" || lName.value == " ") {
    lNameErrorCheck();
    showlNameError();
  } else {
  }

  //

  if (!email.value.match(pattern)) {
    emailErrorCheck();
    invalidEmail();
  } else {
  }

  //

  if (email.value == "") {
    showEmailError();
    emailErrorCheck();
  } else {
  }

  //

  if (webInput.value == "" || webInput.value == " ") {
    webInputErrorCheck();
    showWebError();
  } else {
  }

  //
});

//

// Scroll to top btn

const btnScroltoTop = document.querySelector(".scrolTo-top");

window.addEventListener("scroll", () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset > "440") {
    btnScroltoTop.classList.add("showscrolar");
  } else {
    btnScroltoTop.classList.remove("showscrolar");
  }
});
