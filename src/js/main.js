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
    // Ecrire ici tout le code pour l'exercice 2: Modification des classes
  }

  if (exercice3) {
    // Ecrire ici tout le code pour l'exercice 3: Ecouteurs d'événement
  }
});
