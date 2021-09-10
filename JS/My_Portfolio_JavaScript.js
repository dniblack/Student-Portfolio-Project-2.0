/* These are the functions that open and clsoe the contact form */
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none"
}

/* This is the function that displays the first timage in the slideshow when the page loads */
var slideIndex = 1;
showSlides(slideIndex);

//This function changes the slide when the left or right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n)
}

/* This is the function that changes the slides when the left or right arrows are clicked */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* This function changes the slides when the dots are clicked */
function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); // This takes all elements with the class name "mySlides" and stores them in the varaible array "slides"
    var dots = document.getElementsByClassName("dot"); // This takes all elements with the class name "dot" ad stores them in the varaible array "dots"
    if (n > slides.length) {slideIndex = 1}; // If n (the number that is passed into the function) os greaster than the lenfth of the array "slides", the slideIndex is set to 1
    if (n < 1) {slideIndex = slides.length}; //If n (the number that is passed into the function) is less than 1, the slideIndex is set to the length of the array "slides"
    for (i = 0; i < slides.length; i++) { 
        slides[i].style.display = "none"; // This for loop takes each of the items in the "slides" array and sets the display to none; essentially we're hiding the slides
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // This for loop takes each item in the array "dots" and removes "active" from which will remove the active styling
    }
    slides[slideIndex - 1].style.display = "block"; // This diplsays the image in the slideshow
    dots[slideIndex - 1].className += " active"; // This adds the active styling to the dot associated with the iamge
}