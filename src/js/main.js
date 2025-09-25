document.addEventListener("DOMContentLoaded", function () {
  const exercice1 = document.querySelector("#exercice-1");
  const exercice2 = document.querySelector("#exercice-2");
  const exercice3 = document.querySelector("#exercice-3");

  if (exercice1) {
    document.querySelector(".broccoli");
    document.querySelector(".healthy-food");
    document.querySelector('[data-vegetable="broccoli"]');
    document.querySelector(".raw-food");
    document.querySelector(".steamed");

    document.querySelector(".broccoli").remove();
    document.querySelector(".healthy-food").remove();
    document.querySelector('[data-vegetable="broccoli"]').remove();
    document.querySelector(".raw-food").remove();
    document.querySelector(".steamed").remove();
  }

  if (exercice2) {
    document.querySelector("#pizza-to-cook").classList.add("cooked");
    document.querySelector(".pizza.hot").classList.remove("burned");
    document.querySelector("#pizza-special").classList.add("highlighted");
    document.querySelector(".pizza.basic").classList.add("premium", "deluxe");
    document.querySelector(".pizza.cold").classList.remove("cold");
    document.querySelector(".pizza.cold").classList.add("hot");
  }

  if (exercice3) {
    const exercice31 = document.querySelector("#exercice-3-1");
    exercice31.addEventListener("click", function () {
      exercice31.classList.add("highlight");
    });

    const exercice32 = document.querySelector("#exercice-3-2");
    const exercice32button = document.querySelector("#exercice-3-2 button");
    exercice32button.addEventListener("click", function () {
      exercice32.classList.toggle("highlight");
    });

    const exercice33 = document.querySelector("#exercice-3-3");
    exercice33.addEventListener("mouseenter", function () {
      exercice33.classList.add("highlight");
    });
    exercice33.addEventListener("mouseleave", function () {
      exercice33.classList.remove("highlight");
    });

    const exercice34 = document.querySelector("#exercice-3-4");
    document.addEventListener("mousemove", function () {
      exercice34.classList.add("highlight");
    });

    const exercice35 = document.querySelector("#exercice-3-5");
    document.addEventListener("scroll", function () {
      exercice35.classList.add("highlight");
    });

    const exercice36 = document.querySelector("#exercice-3-6");
    document.addEventListener("keydown", function () {
      exercice36.classList.add("highlight");
    });

    const exercice37 = document.querySelector("#exercice-3-7");
    window.addEventListener("resize", function () {
      exercice37.classList.add("highlight");
    });
  }
});
