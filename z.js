document.getElementById('video').addEventListener('ended', function() {
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'initial';
    runGSAPAnimation();
  });





function runGSAPAnimation() {
let t1 = gsap.timeline();
t1.from("nav",{
    y:-50,
    opacity:0,
    duration:1
})
t1.from(".h21",{
    x:-110,
    opacity:0,
    duration:1
},'a')
t1.from(".h22",{
    x:110,
    opacity:0,
    duration:1
},'a')
t1.from("#page21 p",{
    y:40,
    opacity:0,
    duration:0.5
})
  }
  




var nav = document.querySelector("nav")
nav.addEventListener("mouseenter", function () {
    let t2 = gsap.timeline()

    t2.to("#nav-bottom", {
        height: "21vh",
        duration: 0.3
    })
    t2.to("#nav-part2 h5", {
        display: "block",
        duration: 0.1

    })
    t2.to("#nav-part2 h5 span", {
        y: 0,
        // duration:0.3,
        stagger: {
            amount: 0.1
        }
    })
})
nav.addEventListener("mouseleave", function () {
    let t2 = gsap.timeline()
    t2.to("#nav-part2 h5 span", {
        y: 25,
        stagger: {
            amount: 0.1
        }
    })
    t2.to("#nav-part2 h5", {
        display: "none",
        duration: 0.1
    })
    t2.to("#nav-bottom", {
        height: 0,
        duration: 0.3
    })
})

let vid = document.getElementById("video");
vid.playbackRate = 2.0;



window.addEventListener("wheel",function(dets){
    if(dets.deltaY>=0){

        gsap.to("nav",{
            transform:"translateY(-120%)",
            duration:0.1,
            ease:"none"
        })
    }
    else{
        gsap.to("nav",{
            transform:"translateY(0%)",
            duration:0.2,
            ease:"none",
            delay:0.1
        })
    }
})




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