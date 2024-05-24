document.querySelector(".facebook").addEventListener("click", function () {
  Swal.fire({
    title: "Not found!",
    text: "Maaf saya tidak punya akun Twitter",
    icon: "error",
    confirmButtonText: "Back",
  });
});

document.querySelector(".twitter").addEventListener("click", function () {
  Swal.fire({
    title: "Not found!",
    text: "Maaf saya tidak punya akun Twitter",
    icon: "error",
    confirmButtonText: "Back",
  });
});

window.addEventListener("scroll", function (event) {
  let navbar = document.querySelector("nav");
  navbar.classList.toggle("nav-responsive", window.scrollY > 300);
});
