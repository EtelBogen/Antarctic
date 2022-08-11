import {isEscapeKey} from '../utils/utils';

const pageHeader = document.querySelector('.page-header');
const pageBody = document.querySelector('.page__body');
const menuToggle = document.querySelector('.page-header__menu-toggle');
const pageHeaderNavigation = document.querySelector('.page-header__navigation');
const headerNavigationItem = pageHeaderNavigation.querySelectorAll('a[href*="#"]');

// закрытие меню при нажатии клавиши esc
const onEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeNavigationMenu();
  }
};

// открытие меню
const openNavigationMenu = () => {
  pageHeader.classList.add('page-header--menu-opened');
  menuToggle.classList.add('page-header__menu-toggle--menu-opened');
  pageBody.classList.add('page__body--scroll-off');
  document.addEventListener('keydown', onEscKeydown);
};

// закрытие меню
const closeNavigationMenu = () => {
  pageHeader.classList.remove('page-header--menu-opened');
  menuToggle.classList.remove('page-header__menu-toggle--menu-opened');
  pageBody.classList.remove('page__body--scroll-off');
  document.removeEventListener('keydown', onEscKeydown);
};

// скрипт для открытия и закрытия меню
const openMainMenu = () => {
  pageHeader.classList.remove('page-header--nojs');
  menuToggle.addEventListener('click', () => { // ...по клику на иконку бургер-меню
    if (pageHeader.classList.contains('page-header--menu-opened')) {
      closeNavigationMenu();
    } else {
      openNavigationMenu();
    }
  });

  // ...по клику на оверлей
  document.addEventListener('click', (evt) => {
    const target = evt.target;
    const itsMenu = target === pageHeader || pageHeader.contains(target);
    const menuIsActive = pageHeader.classList.contains('page-header--menu-opened');

    if (!itsMenu && menuIsActive) {
      closeNavigationMenu();
    }
  });

  // ...по клику на любуй пункт меню
  headerNavigationItem.forEach((item) => {
    item.addEventListener('click', () => {
      closeNavigationMenu();
    });
  });
};

export {openMainMenu, pageBody};
