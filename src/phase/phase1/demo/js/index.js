document.addEventListener("DOMContentLoaded", () => {
  const animationTarget = document.getElementById("animation-target");

  animationTarget.addEventListener("animationstart", console.log, false);
  animationTarget.addEventListener("animationend", console.log, false);
  animationTarget.addEventListener("animationiteration", console.log, false);
});
