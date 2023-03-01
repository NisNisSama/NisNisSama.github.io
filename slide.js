const names = [{slideName: 'mySlides', dotName: 'dot1'},
    {slideName: 'mySlides2', dotName: 'dot2'},
    {slideName: 'mySlides3', dotName: 'dot3'}
];
let slides = [];

names.forEach((name)=>{
    slides.push({slide: getSlides(name.slideName), index: 1, dot: getDots(name.dotName)})
});

function run() {
    setTimeout(function() {
        window.requestAnimationFrame(run);
        slides.forEach((slide)=>{
            showSlides(slide.index, slide.slide, slide.dot);
            slide.index += 1;
            slide.index = inRange(slide.index, slide.slide.length);
        })
    }, 2500); // This sets an interval for the animation to run; if you take the setTimeout out the function will loop as quickly as possible without breaking the browser.
}
run();

function getSlides(name){
    return document.getElementsByClassName(name);   
}

function getDots(dotName){
    return document.getElementsByClassName(dotName);
}

function inRange(index, length){
    if (index > length){
        index = 1;
    }
    if (index < 1){
        index = length;
    }
    return index;
}


// // Next/previous controls
// function plusSlides(n, name, dotName) {
//   showSlides(slideIndex += n, name, dotName);
// }

// Thumbnail image controls
function currentSlide(n, name, dotName) {
    let slides = getSlides(name);
    let dots = getDots(dotName);
  showSlides(n, slides, dots);
}

function showSlides(n, slides, dots) {
    let slideIndex = n;
    let i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
