function loaderAnimation(){
    
var tl = gsap.timeline();
tl.from("#loader h3",{
    x:50,
    opacity:0,
    duration:1,
    stagger:0.3
})
tl.to("#loader h3",{
    opacity:0,
    x:-30,
    duration:1,
    stagger:0.3
})
tl.to("#loader",{
    opacity:0
})
tl.from("#page21 .h21",{
    x:-50,
    duration:0.8,
    opacity:0,
},'a')
tl.from("#page21 .h22",{
    x:50,
    duration:0.8,
    opacity:0,
},'a')
tl.from("#page21 p",{
    y:30,
    duration:0.8,
    opacity:0,
},'a')
tl.to("#loader",{
    display:"none"
})


}
loaderAnimation();

function navAnimation(){
    var nav = document.querySelector("nav");
nav.addEventListener("mouseenter",function(){
    let tl = gsap.timeline();
    tl.to("#nav-bottom",{
        height: "22vh",
    })
    tl.to("nav h5",{
        display: "block",
    })
    tl.to(".nav-part2 h5 span", {
        y:0,
        stagger : {
            amount:0.6,
        },
        delay:-0.4
    })
})

nav.addEventListener("mouseleave",function(){
    let tl = gsap.timeline();
    tl.to(".nav-part2 h5 span", {
        y:25,
        stagger : {
            amount:0.2
        }
    })
    tl.to(".nav-part2 h5",{
        display:"none",
        duration:0.1
    })
    tl.to("#nav-bottom",{
        height:0,
        duration:0.2
    })
})
}

// navAnimation();

// ---------------- Slider Js---------------




let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next')
}


// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) // Remove the event listener after it's triggered once
}


  function videoconAnimation() {
    var videocon = document.querySelector("#video-container");
    var playbtn = document.querySelector("#play");
    videocon.addEventListener("mouseenter", function () {
      gsap.to(playbtn, {
        scale: 1,
        opacity: 1,
      });
    });
    videocon.addEventListener("mouseleave", function () {
      gsap.to(playbtn, {
        scale: 0,
        opacity: 0,
      });
    });
    document.addEventListener("mousemove", function (dets) {
      gsap.to(playbtn, {
        left: dets.x - 70,
        top: dets.y - 80,
      });
    });
  }
//   videoconAnimation();

function pageCursor(){
    
var page4 =document.querySelector("#hit-4");
var page4Cursor = document.querySelector("#page4-cursor");

page4.addEventListener("mouseenter", function(){
    gsap.to(page4Cursor,{
        opacity:1,
        scale:1
    })
})

page4.addEventListener("mousemove", function(dets){
    var diff = dets.y - page4.getBoundingClientRect().top;
    gsap.to(page4Cursor,{
        ease: Power3,
        top: diff,
        left: dets.clientX,
    })
})

page4.addEventListener("mouseleave", function(){
    gsap.to(page4Cursor,{
        opacity:0,
        scale:0
    })
})
}

pageCursor();