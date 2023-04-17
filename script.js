
/* JavaScript for smooth scrolling when clicking on navigation links */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const targetSection = document.querySelector(event.target.hash);
        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});


/* Modal for continuous sliding 'Control Panel' images */

const slider = document.querySelector("#slider");
const slides = document.querySelectorAll(".slide");
const modal = document.querySelector("#modal");
const modalImage = document.querySelector("#modal-image");
const closeButton = document.querySelector("#close-button");

let interval;
let sliding = true;

const startSlider = () => {
    interval = setInterval(() => {
        slider.scrollLeft += 1;
        if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
            slider.scrollLeft = 0;
        }
    }, 20);
};

const stopSlider = () => {
    clearInterval(interval);
};

slides.forEach(slide => {
    slide.addEventListener("mouseover", () => {
        if (sliding) {
            sliding = false;
            stopSlider();
        }
    });
    slide.addEventListener("mouseout", () => {
        if (!sliding) {
            sliding = true;
            startSlider();
        }
    });
    slide.addEventListener("click", () => {
        modalImage.src = slide.src;
        modal.style.display = "block";
    });
});

closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", e => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

startSlider();


/* The 3D Image System that shows the Hydroponic 3D file */

/* SO FAR CODE TESTS HAVE NOT BEEN SUCCESSFULL FOR INSERTING 3D FILE, CURRENT SOLUTION IS TO OPEN FILE IN NATIVE ONSHAPE BROWSER IN NEW TAB */



/* The accordian modal for the Education section */

var acc = document.getElementsByClassName("accordionEducation");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


/* The tab system for the Education details section */
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
/* Disables the dynamic line animation when the tab is selected */
document.querySelector('.bottomLink').addEventListener('click', function () {
    this.classList.toggle('disabled');
});
/* Get the element with id="defaultOpen" and click on it

document.getElementById("defaultOpen").click();
*/
