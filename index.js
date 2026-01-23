var typed= new Typed(".text", {
    strings:["C S E   Student"],
    typeSpeed: 130,
    backSpeed: 90,
    backDelay: 1000,
    loop:true
});




const skilling = document.getElementById("skilling");

/* function to restart animation */
function activateSkillAnimation() {
  skilling.classList.remove("active");

  // force reflow (VERY IMPORTANT)
  void skilling.offsetWidth;

  setTimeout(() => {
    skilling.classList.add("active");
  }, 100);
}

/* observe scroll */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activateSkillAnimation();
      }
    });
  },
  { threshold: 0.4 }
);

observer.observe(skilling);

/* navbar click fix */
document.querySelectorAll('a[href="#skilling"]').forEach(link => {
  link.addEventListener("click", () => {
    setTimeout(activateSkillAnimation, 400);
  });
});






const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const height = window.innerHeight;

    if (top < height - 120) {
      el.classList.add('active');
    }
  });
});







const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

/* Toggle menu */
hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
    hamburger.classList.toggle("open"); // optional (icon animation)
});

/* Close menu on link click (mobile only) */
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        hamburger.classList.remove("open");
    });
});

/* Close menu when clicking outside */
document.addEventListener("click", (e) => {
    if (!navbar.contains(e.target) && !hamburger.contains(e.target)) {
        navbar.classList.remove("active");
        hamburger.classList.remove("open");
    }
});

/* Reset on resize (desktop → mobile bug fix) */
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        navbar.classList.remove("active");
        hamburger.classList.remove("open");
    }
});

