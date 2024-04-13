// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika menu restaurant di klik
document.querySelector('#restaurant').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Klik di luar sidebar untuk menghilangkan nav
const restaurant = document.querySelector('#restaurant');

document.addEventListener('click', function (e) {
  if (!restaurant.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
};
