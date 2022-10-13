window.addEventListener('scroll', onScroll);

onScroll();
function onScroll() {
    showNavOnScroll();
}

function showNavOnScroll() {
    if (scrollY > 0) {
      autoNav.classList.add('scroll');
    } else {
      autoNav.classList.remove('scroll');
    }
  }



