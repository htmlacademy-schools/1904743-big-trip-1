import {createSiteMenuTemplate} from './view/site-menu-view.js';
import {createFilterTemplate} from './view/filter-view.js';
import {renderTemplate, RenderPosition} from './render.js';
import {createSortTemplate} from './view/sort-view.js';
import {createListTemplate} from './view/list-view.js';
import {createInfoTemplate} from './view/info-view.js';

const siteHeaderElement = document.querySelector('.page-body');
const siteMainElement = document.querySelector('.page-main');
const siteMenuElement = siteHeaderElement.querySelector('.trip-controls__navigation');
const siteFilterElement = siteHeaderElement.querySelector('.trip-controls__filters');
const siteSortElement = siteMainElement.querySelector('.trip-events');
const siteListElement = siteMainElement.querySelector('.trip-events');
const siteInfoElement = siteHeaderElement.querySelector('.trip-main');

renderTemplate(siteMenuElement, createSiteMenuTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteFilterElement, createFilterTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteSortElement, createSortTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteListElement, createListTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteInfoElement, createInfoTemplate(), RenderPosition.AFTERBEGIN);