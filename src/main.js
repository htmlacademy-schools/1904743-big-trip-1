import SiteMenuView from './view/site-menu-view.js';
import EventsListView from './view/events-list-view';
import InfoView from './view/info-view.js';
import SortView from './view/sort-view.js';
import FilterView from './view/filter-view.js';
import WayPointView from './view/way-point-view';
//import AddNewPointView from './view/add-new-point-view';
import EditPointView from './view/edit-point-view';
import {generateWayPoint} from './mock/wayPoint';
import {render, RenderPosition} from './render';

const WAYPOINT_COUNT = 5;

const wayPoint = Array.from({length: WAYPOINT_COUNT}, generateWayPoint);

const siteHeaderElement = document.querySelector('.page-body');
const siteMainElement = document.querySelector('.page-main');
const siteMenuElement = siteHeaderElement.querySelector('.trip-controls__navigation');
const siteFilterElement = siteHeaderElement.querySelector('.trip-controls__filters');
const siteSortAndEventsElement = siteMainElement.querySelector('.trip-events');
const siteInfoElement = siteHeaderElement.querySelector('.trip-main');

render(siteSortAndEventsElement, new SortView().element, RenderPosition.BEFOREEND);

const eventsListComponent = new EventsListView();

const renderWayPoint = (eventsListElement, event) =>{
  const wayPointComponent = new WayPointView(event);
  const wayPointEditComponent = new EditPointView(event);

  const replaceCardToForm = () => {
    eventsListElement.replaceChild(wayPointEditComponent.element, wayPointComponent.element);
  };
  const replaceFormToCard = () => {
    eventsListElement.replaceChild(wayPointComponent.element, wayPointEditComponent.element);
  };
  const onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc'){
      evt.preventDefault();
      replaceFormToCard();
      document.removeEventListener('keydown', onEscKeyDown);
    }
  };

  wayPointComponent.element.querySelector('.event__rollup-btn').addEventListener('click',() => {
    replaceCardToForm();
    document.addEventListener('keydown', onEscKeyDown);
  });
  wayPointEditComponent.element.querySelector('form').addEventListener('submit',(evt) => {
    evt.preventDefault();
    replaceFormToCard();
  });


  render(eventsListElement, wayPointComponent.element, RenderPosition.BEFOREEND);
};

render(siteSortAndEventsElement, eventsListComponent.element, RenderPosition.BEFOREEND);
//render(eventsListComponent.element, new EditPointView(wayPoint[0]).element, RenderPosition.BEFOREEND);
//render(eventsListComponent.element, new AddNewPointView(wayPoint).element, RenderPosition.BEFOREEND);

for (let i = 0; i < WAYPOINT_COUNT; i++){
  renderWayPoint(eventsListComponent.element, wayPoint[i]);
}

render(siteMenuElement, new SiteMenuView().element, RenderPosition.BEFOREEND);
render(siteFilterElement, new FilterView().element, RenderPosition.BEFOREEND);
render(siteInfoElement, new InfoView().element, RenderPosition.AFTERBEGIN);
