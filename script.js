"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector(".hamburgerMenu");
  const header = document.querySelector(".header");

  hamburgerMenu.addEventListener("click", function () {
    header.classList.toggle("toggle");
  });

  const toTopButton = document.querySelector(".c-toTopButton");
  const target = document.querySelector(".footer");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        toTopButton.classList.add("toTop");
      } else {
        toTopButton.classList.remove("toTop");
      }
    });
  };

  // IntersectionObserver のインスタンスを作成
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // オブザーバーをターゲットに適用
  observer.observe(target);


toTopButton.addEventListener("click", (event) => {
  event.preventDefault(); // デフォルトのリンク動作を防ぐ
  document.querySelector("#header").scrollIntoView({ behavior: "smooth" });
});


gsap.registerPlugin(ScrollTrigger);

const fade = gsap.utils.toArray('.fade');
console.log(fade);

fade.forEach(el => {
  gsap.fromTo(el, 
    {
      y: 40, 
      opacity: 0, 
    }, 
    {
      y: 0, 
      opacity: 1, 
      duration: 1.5, 
      ease: 'power4.inOut',
      scrollTrigger: {
        trigger: el,
        start: 'top 70%',
        markers: true,
      },
    }
  );
});
});
