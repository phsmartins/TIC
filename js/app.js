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



