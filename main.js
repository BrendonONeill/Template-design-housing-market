const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      nav.classList.remove("nav-bg");
      console.log("i'm being called");
    } else {
      nav.classList.add("nav-bg");
    }
  });
});

const hero = document.querySelectorAll(".head");
const nav = document.querySelector(".nav-test");
hero.forEach((el) => observer.observe(el));
