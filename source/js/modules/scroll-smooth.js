const anchors = document.querySelectorAll('a[href*="#"]');

const addScrollSmooth = () => {

  anchors.forEach((item) => {
    item.addEventListener('click', (evt) => {
      evt.preventDefault();
      const blockID = item.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
};

export {addScrollSmooth};
