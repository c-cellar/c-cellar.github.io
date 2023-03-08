'use strict';
// const header = document.querySelector('header');
// const framePicture = document.querySelector('.frame-picture');
// const h1 = document.querySelector('header h1');
// const h3 = document.querySelector('header h3');
const pictureWrappers = document.querySelectorAll('.wrapper-pictures');
const pictureWrapperWordle = document.querySelector('#wrapper-pictures-wordle');
const pictureWrapperJustRandom = document.querySelector(
  '#wrapper-pictures-justRandom'
);
const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
  img.setAttribute('draggable', false);
});

/************* EVENTLISTENER ********************************/
pictureWrappers.forEach((pictureWrapper) => {
  pictureWrapper.addEventListener('mousedown', handleMouseDown);
});

/************* Drag to Scroll ***********************/
function handleMouseDown(e) {
  e.currentTarget.style.cursor = 'grabbing';

  e.currentTarget.addEventListener('mousemove', handleMouseMove);

  // e.currentTarget.addEventListener('mouseleave', handleMouseUp);
  // e.currentTarget.addEventListener('mouseup', handleMouseUp);
  ['mouseleave', 'mouseup'].forEach((mouseEvent) =>
    e.currentTarget.addEventListener(mouseEvent, handleMouseUp)
  );
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

// const observerHeaderElement = new IntersectionObserver((entries) => {
//   console.log(entries);
// });

// const observerHeaderChildren = new IntersectionObserver((entries) => {
//   console.log(entries);

//   const personalPicutre = entries[0];
//   personalPicutre.target.classList.toggle(
//     'moveToCorner',
//     !personalPicutre.isIntersecting
//   );
//   if (!personalPicutre.isIntersecting)
//     observerHeaderChildren.unobserve(entry.target);
// });

// observerHeaderChildren.observe(framePicture);
// observerHeaderChildren.observe(h1);
// observerHeaderChildren.observe(h3);
// observerHeaderChildren.observe(skills);
