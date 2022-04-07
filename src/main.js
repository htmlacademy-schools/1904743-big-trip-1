import {createSiteMenuTemplate} from './view/site-menu-view.js';
import {createFilterTemplate} from './view/filter-view.js';
import {renderTemplate, RenderPosition} from './render.js';
import {createSortTemplate} from './view/sort-view.js';
import {createWayPointTemplate} from './view/way-point-view.js';
import {createAddNewPointTemplate} from './view/add-new-point-view.js';
import {createEditPointTemplate} from './view/edit-point-view.js';
import {createInfoTemplate} from './view/info-view.js';
import {createListPointTemplate} from './view/list-point-view';
//import {generateWayPoint} from './mock/wayPoint';

const WAYPOINT_COUNT = 3;

//const wayPoint = Array.from({length: WAYPOINT_COUNT}, generateWayPoint);
//console.log(wayPoint);

const siteHeaderElement = document.querySelector('.page-body');
const siteMainElement = document.querySelector('.page-main');
const siteMenuElement = siteHeaderElement.querySelector('.trip-controls__navigation');
const siteFilterElement = siteHeaderElement.querySelector('.trip-controls__filters');
const siteSortElement = siteMainElement.querySelector('.trip-events');
const sitePointElement = siteMainElement.querySelector('.trip-events');
const siteInfoElement = siteHeaderElement.querySelector('.trip-main');

renderTemplate(siteSortElement, createSortTemplate(), RenderPosition.BEFOREEND);
renderTemplate(sitePointElement,createListPointTemplate(), RenderPosition.BEFOREEND);

const siteListPointElement = siteMainElement.querySelector('.trip-events__list');

renderTemplate(siteListPointElement, createEditPointTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteListPointElement, createAddNewPointTemplate(), RenderPosition.BEFOREEND);

for (let i = 0; i < WAYPOINT_COUNT; i++){
  renderTemplate(siteListPointElement, createWayPointTemplate(), RenderPosition.BEFOREEND);
}

renderTemplate(siteMenuElement, createSiteMenuTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteFilterElement, createFilterTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteInfoElement, createInfoTemplate(), RenderPosition.AFTERBEGIN);
