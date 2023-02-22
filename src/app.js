// import 'daisyui'
// import 'flowbite'

document.querySelectorAll('.navbar-toggle').forEach(function (navbarToggle) {
  navbarToggle.addEventListener('click', function () {
    document.querySelector('.navbar-item').classList.toggle('open');
  });
});

document.querySelectorAll('.search-toggle').forEach(function (searchToggle) {
  searchToggle.addEventListener('click', function () {
    document.querySelector('.search-item').classList.toggle('open');
  });
});