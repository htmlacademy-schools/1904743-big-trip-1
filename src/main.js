import SiteMenuView from './view/site-menu-view.js';
import InfoView from './view/info-view.js';
import FilterView from './view/filter-view.js';
import {generateWayPoint} from './mock/wayPoint';
import { render, RenderPosition } from './utils/render';
import TripPresenter from './presenter/trip-presenter';
import EventsModel from './model/points-model';

const WAYPOINT_COUNT = 10;

const wayPoints = Array.from({length: WAYPOINT_COUNT}, generateWayPoint);

const eventsModel = new EventsModel();
eventsModel.events = wayPoints;

const siteHeaderElement = document.querySelector('.page-body');
const siteMainElement = document.querySelector('.page-main');
const siteMenuElement = siteHeaderElement.querySelector('.trip-controls__navigation');
const siteFilterElement = siteHeaderElement.querySelector('.trip-controls__filters');
const siteSortAndEventsElement = siteMainElement.querySelector('.trip-events');
const siteInfoElement = siteHeaderElement.querySelector('.trip-main');

const tripPresenter = new TripPresenter(siteSortAndEventsElement, eventsModel);

render(siteMenuElement, new SiteMenuView(), RenderPosition.BEFOREEND);
render(siteFilterElement, new FilterView(), RenderPosition.BEFOREEND);
render(siteInfoElement, new InfoView(), RenderPosition.AFTERBEGIN);

tripPresenter.init();
