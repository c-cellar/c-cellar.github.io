'use strict';
const headlineSection = document.querySelector('section h3');
const wordleSection = document.querySelector('.wordle');
const justRandomSection = document.querySelector('.just-random');
const allSections = document.querySelectorAll('section');
const allWrapperPictures = document.querySelectorAll('.wrapper-pictures');
const pictureWrapperWordle = document.querySelector('#wrapper-pictures-wordle');
const allPicturesWrapperWordle = document.querySelectorAll(
  '#wrapper-pictures-wordle>picture'
);
const allPicturesWrapperJustRandom = document.querySelectorAll(
  '#wrapper-pictures-justRandom>picture'
);
const pictureWrapperJustRandom = document.querySelector(
  '#wrapper-pictures-justRandom'
);
const linksButtons = document.querySelectorAll('a');
const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
  img.setAttribute('draggable', false);
});

/************* EVENTLISTENER ********************************/
linksButtons.forEach((linkButton) => {
  linkButton.addEventListener('touchstart', handleTouchstartLink);
  linkButton.addEventListener('touchend', handleTouchendLink);
});

allWrapperPictures.forEach((pictureWrapper) => {
  pictureWrapper.addEventListener('mousedown', handleMouseDown);
  pictureWrapper.addEventListener('touchstart', handleTouchstartPictureWrapper);
  pictureWrapper.addEventListener('touchend', handleTouchendPictureWrapper);
});

/******************* Touch event  **********************/
function handleTouchstartLink(e) {
  document.getElementById(e.currentTarget.id).classList.add('touched');
}

function handleTouchendLink(e) {
  document.getElementById(e.currentTarget.id).classList.remove('touched');
}

function handleTouchstartPictureWrapper(e) {
  document.getElementById(e.currentTarget.id).classList.add('touched');
}

function handleTouchendPictureWrapper(e) {
  document.getElementById(e.currentTarget.id).classList.remove('touched');
}

/************* Drag to Scroll ***********************/
function handleMouseDown(e) {
  e.currentTarget.style.cursor = 'grabbing';

  e.currentTarget.addEventListener('mousemove', handleMouseMove);
  ['mouseleave', 'mouseup'].forEach((mouseEvent) =>
    e.currentTarget.addEventListener(mouseEvent, handleMouseUp)
  );

  // e.currentTarget.addEventListener('mouseleave', handleMouseUp);
  // e.currentTarget.addEventListener('mouseup', handleMouseUp);
}

function handleMouseUp(e) {
  e.currentTarget.style.cursor = 'grab';

  e.currentTarget.removeEventListener('mousemove', handleMouseMove);
  e.currentTarget.removeEventListener('mouseup', handleMouseUp);
}

function handleMouseMove(e) {
  e.currentTarget.scrollLeft = e.currentTarget.scrollLeft - e.movementX;
}

/****************** INTERSECTION OBSERVER ***********************/

const observer = new IntersectionObserver(
  (entries) => {
    headlineSection.classList.toggle('show', entries[0].isIntersecting);

    entries.forEach((entry) => {
      switch (entry.target.className) {
        case 'wordle':
          allPicturesWrapperWordle.forEach((picture) => {
            picture.classList.toggle('show', entries[0].isIntersecting);
          });
          break;
        case 'just-random':
          allPicturesWrapperJustRandom.forEach((picture) => {
            picture.classList.toggle('show', entries[0].isIntersecting);
          });
          break;
      }
    });
  },
  {
    threshold: 0.25,
  }
);

observer.observe(wordleSection);
observer.observe(justRandomSection);
