/* Overlay control */
var overlayState = false;
var overlayTitle = document.getElementById('overlay-title');
var overlayContainer = document.getElementById('overlay-container');
var overlayContent = document.getElementById('overlay-content');
var overlayButton = document.getElementById('overlay-button');

function toggleOverlay() {
  if (overlayState == false) {
    overlayState = true;
    overlayButton.style.backgroundImage = 'url(assets/ButtonPlusRed.svg)';
    overlayButton.style.backgroundColor = '#FFFFFF';
    overlayButton.style.rotate = '45deg';
    overlayContainer.style.display = 'block';

    setTimeout(function () {
      if (overlayState == false) return;
      overlayContainer.style.opacity = '1';
      overlayTitle.style.color = '#FFFFFF';
    }, 0);

    setTimeout(function () {
      if (overlayState == false) return;
      overlayContent.style.opacity = '1';
      overlayContent.style.transform = 'translateY(0px)';
    }, 500);
  } else {
    overlayState = false;
    overlayButton.style.rotate = '0deg';
    overlayContent.style.opacity = '0';
    overlayContent.style.transform = 'translateY(-20px)';

    setTimeout(function () {
      if (overlayState == true) return;
      overlayButton.style.backgroundImage = 'url(assets/ButtonPlusWhite.svg)';
      overlayButton.style.backgroundColor = '#888888';
      overlayContainer.style.opacity = '0';
      overlayTitle.style.color = '#F9413E';
    }, 500);

    setTimeout(function () {
      if (overlayState == true) return;
      overlayContainer.style.display = 'none';
    }, 800);
  }
}

overlayButton.addEventListener('click', toggleOverlay, false);

/* Responsive UI */
var uiType = 'desktop';
var horizontalSectionContainers = document.getElementsByClassName(
  'section-container-horizontal',
);
var horizontalCardContainers = document.getElementsByClassName(
  'card-container-horizontal',
);
var primaryCardContents = document.getElementsByClassName(
  'card-content-primary',
);

function repositionContainers(width) {
  if (width >= 1280) {
    if (uiType == 'desktop') return;

    for (let i = 0; i < horizontalSectionContainers.length; i++) {
      horizontalSectionContainers[i].style.flexDirection = 'row';
    }
    for (let i = 0; i < horizontalCardContainers.length; i++) {
      horizontalCardContainers[i].style.flexDirection = 'row';
    }
    for (let i = 0; i < primaryCardContents.length; i++) {
      primaryCardContents[i].style.width = 'auto';
      primaryCardContents[i].style.flexGrow = '1';
    }
    uiType = 'desktop';
  } else if (width >= 810) {
    if (uiType == 'tablet') return;

    for (let i = 0; i < horizontalSectionContainers.length; i++) {
      horizontalSectionContainers[i].style.flexDirection = 'row';
    }
    for (let i = 0; i < horizontalCardContainers.length; i++) {
      horizontalCardContainers[i].style.flexDirection = 'column';
    }
    for (let i = 0; i < primaryCardContents.length; i++) {
      primaryCardContents[i].style.width = '100%';
      primaryCardContents[i].style.flexGrow = '0';
    }
    uiType = 'tablet';
  } else {
    if (uiType == 'mobile') return;

    for (let i = 0; i < horizontalSectionContainers.length; i++) {
      horizontalSectionContainers[i].style.flexDirection = 'column';
    }
    for (let i = 0; i < horizontalCardContainers.length; i++) {
      horizontalCardContainers[i].style.flexDirection = 'column';
    }
    for (let i = 0; i < primaryCardContents.length; i++) {
      primaryCardContents[i].style.width = '100%';
      primaryCardContents[i].style.flexGrow = '0';
    }
    uiType = 'mobile';
  }
}

repositionContainers(window.innerWidth);
window.addEventListener('resize', function () {
  repositionContainers(window.innerWidth);
});

/* Scroll Animations */

var cards = document.getElementsByClassName('card');

function scrollAnimation(scrollY) {
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].offsetTop - window.innerHeight * 0.7 <= scrollY) {
      cards[i].style.opacity = '1';
      cards[i].style.transform = 'translateY(0px)';
    } else if (cards[i].offsetTop - window.innerHeight * 1.1 > scrollY) {
      cards[i].style.opacity = '0';
      cards[i].style.transform = 'translateY(20px)';
    }
  }
}

window.addEventListener('scroll', function () {
  scrollAnimation(window.scrollY);
});
