// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.scrollY > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// menambahkan alert dan Local Storage
document.addEventListener("DOMContentLoaded", function() {
  let namenginput = document.getElementById("name");
  let emailnginput = document.getElementById("email");
  let pesannginput = document.getElementById("pesann");
  let buttonnginput = document.getElementById("buttonngirim");

  if (localStorage.getItem("name")) {
    namenginput.value = localStorage.getItem("name");
  }
  if (localStorage.getItem("email")) {
    emailnginput.value = localStorage.getItem("email");
  }
  if (localStorage.getItem("pesan")) {
    pesannginput.value = localStorage.getItem("pesan");
  }

  buttonnginput.addEventListener("click", function(ipen) {
    ipen.preventDefault();

    if (namenginput.value.trim() === "" || emailnginput.value.trim() === "" || pesannginput.value.trim() === "") {
      alert("Harap melengkapi kolomnya!");
    } else {
      localStorage.setItem("name", namenginput.value);
      localStorage.setItem("email", emailnginput.value);
      localStorage.setItem("pesan", pesannginput.value);

      alert("Pesan Kamu Berhasil dikirim");
    }
  });
});

