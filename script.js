// ==========================
// AOS Animation
// ==========================
AOS.init({
    duration: 1000,
    once: true
});

// ==========================
// Typing Effect
// ==========================
var typed = new Typed(".typing", {
    strings: [
        "Frontend Developer",
        "Web Designer",
        "B.Tech CSE Student"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

// ==========================
// Navbar Background On Scroll
// ==========================
window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background =
            "rgba(7,11,26,0.95)";
        navbar.style.boxShadow =
            "0 0 20px rgba(124,58,237,.3)";
    } else {
        navbar.style.background =
            "rgba(255,255,255,.05)";
        navbar.style.boxShadow = "none";
    }
});

// ==========================
// Active Navigation Link
// ==========================
const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
        ) {
            current =
                section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            .includes(current)
        ) {
            link.classList.add("active");
        }
    });
});

// ==========================
// Back To Top Button
// ==========================
const topBtn =
document.createElement("button");

topBtn.innerHTML =
'<i class="fas fa-arrow-up"></i>';

topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ==========================
// Scroll Progress Bar
// ==========================
const progressBar =
document.createElement("div");

progressBar.classList.add("progress-bar");

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    let scrollTop =
        document.documentElement.scrollTop;

    let scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let progress =
        (scrollTop / scrollHeight) * 100;

    progressBar.style.width =
        progress + "%";
});

// ==========================
// Contact Form
// ==========================
const form =
document.querySelector("form");

if (form) {

    form.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            alert(
                "Thank you! Your message has been sent."
            );

            form.reset();
        }
    );
}

// ==========================
// Reveal Elements
// ==========================
const revealElements =
document.querySelectorAll(
    ".skill-card, .project-card, .info-box"
);

function reveal() {

    revealElements.forEach(el => {

        const windowHeight =
            window.innerHeight;

        const revealTop =
            el.getBoundingClientRect().top;

        const revealPoint = 100;

        if (
            revealTop <
            windowHeight - revealPoint
        ) {
            el.classList.add("show");
        }
    });
}

window.addEventListener(
    "scroll",
    reveal
);

reveal();

// ==========================
// Hero Image Floating Effect
// ==========================
const heroImage =
document.querySelector(".hero-image img");

if (heroImage) {

    setInterval(() => {

        heroImage.animate([
            {
                transform:
                    "translateY(0px)"
            },
            {
                transform:
                    "translateY(-15px)"
            },
            {
                transform:
                    "translateY(0px)"
            }
        ], {
            duration: 3000,
            iterations: 1
        });

    }, 3000);
}
