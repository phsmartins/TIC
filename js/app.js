window.addEventListener('scroll', onScroll);

onScroll();
function onScroll() {
    showNavOnScroll();
    showBackToTopButtonOnScroll();

    activateMenuAtCurrentSection(home);
    activateMenuAtCurrentSection(metaverso);
    activateMenuAtCurrentSection(midiasDigitais);
    activateMenuAtCurrentSection(bioinformatica);
}

function showNavOnScroll() {
    if (scrollY > 0) {
      autoNav.classList.add('scroll');
    } else {
      autoNav.classList.remove('scroll');
    }
  }

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

  const sectionEndsAt = sectionTop + sectionHeight;
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  const sectionId = section.getAttribute('id');
  const menuElement = document.querySelector(`#autoNav a[href*=${sectionId}]`);

  menuElement.classList.remove('active');
  if (sectionBoundaries) {
    menuElement.classList.add('active');
  }
}

const sitesButton = document.querySelector("#sitesButton");
const abntButton = document.querySelector("#abntButton");
const sites = document.querySelector("#sites");
const abnt = document.querySelector("#abnt");

sitesButton.addEventListener("click", () => {
  abntButton.removeAttribute("class");
  sitesButton.setAttribute("class", "active");

  abnt.style.display = "none";
  sites.style.display = "block";
});

abntButton.addEventListener("click", () => {
  sitesButton.removeAttribute("class");
  abntButton.setAttribute("class", "active");

  sites.style.display = "none";
  abnt.style.display = "block";
});

function openMenu() {
  document.body.classList.add('menu-expanded');

  removeCSSButton.style.display = "none";
  backToTopButton.style.display = "none";
}

function closeMenu() {
  document.body.classList.remove('menu-expanded');

  removeCSSButton.style.display = "block";
  backToTopButton.style.display = "block";
}
