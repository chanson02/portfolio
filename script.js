// document.write("<h1>Hello World</h1>");
// alert("Hello World")


// var text = document.getElementById("category info");


// This function will display the information relating to the category that was clicked on
function showPython() {
    var generic = document.getElementById("generic")
    var webdev  = document.getElementById("webdev")
    var mobile  = document.getElementById("mobile")
    var other   = document.getElementById("other")
    var elements = [generic, webdev, mobile, other]
    // Hiding all elements
    // generic.style.display = "none"
    for (i in elements) {
        elements[i].style.display = "none"
    };
    //Show the element selected
    python = document.getElementById("python")
    python.style.display = "block"
};


function showWebDev() {
    var generic = document.getElementById("generic")
    var python  = document.getElementById("python")
    var mobile  = document.getElementById("mobile")
    var other   = document.getElementById("other")
    var elements = [generic, python, mobile, other]
    // Hiding all elements
    for (i in elements) {
        elements[i].style.display = "none"
    };
    //Show the element selected
    webdev = document.getElementById("webdev")
    webdev.style.display = "block"
};

function showMobile() {
    var generic = document.getElementById("generic")
    var python  = document.getElementById("python")
    var webdev  = document.getElementById("webdev")
    var other   = document.getElementById("other")
    var elements = [generic, python, webdev, other]
    // Hiding all elements
    for (i in elements) {
        elements[i].style.display = "none"
    };
    //Show the element selected
    mobile = document.getElementById("mobile")
    mobile.style.display = "block"
};


function showOther() {
    var generic = document.getElementById("generic")
    var python  = document.getElementById("python")
    var webdev  = document.getElementById("webdev")
    var mobile  = document.getElementById("mobile")
    var elements = [generic, python, webdev, mobile]
    // Hiding all elements
    for (i in elements) {
        elements[i].style.display = "none"
    };
    //Show the element selected
    other = document.getElementById("other")
    other.style.display = "block"
};