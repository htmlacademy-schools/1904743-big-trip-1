import SiteMenuView from './view/site-menu-view.js';
import EventsListView from './view/events-list-view';
import InfoView from './view/info-view.js';
import SortView from './view/sort-view.js';
import FilterView from './view/filter-view.js';
import WayPointView from './view/way-point-view';
import NoEventsView from './view/no-events-view';
import EditPointView from './view/edit-point-view';
import {generateWayPoint} from './mock/wayPoint';
import {render, RenderPosition, replace, remove} from './utils/render';
//import AddNewPointView from './view/add-new-point-view';

const WAYPOINT_COUNT = 10;

const wayPoint = Array.from({length: WAYPOINT_COUNT}, generateWayPoint);

const siteHeaderElement = document.querySelector('.page-body');
const siteMainElement = document.querySelector('.page-main');
const siteMenuElement = siteHeaderElement.querySelector('.trip-controls__navigation');
const siteFilterElement = siteHeaderElement.querySelector('.trip-controls__filters');
const siteSortAndEventsElement = siteMainElement.querySelector('.trip-events');
const siteInfoElement = siteHeaderElement.querySelector('.trip-main');

if (wayPoint.length === 0){
  render(siteSortAndEventsElement, new NoEventsView(), RenderPosition.BEFOREEND);
} else {
  render(siteSortAndEventsElement, new SortView(), RenderPosition.BEFOREEND);
}
//render(siteSortAndEventsElement, new SortView().element, RenderPosition.BEFOREEND);

const eventsListComponent = new EventsListView();

const renderWayPoint = (eventsListElement, event) =>{
  const wayPointComponent = new WayPointView(event);
  const wayPointEditComponent = new EditPointView(event);

  const replaceCardToForm = () => {
    replace(wayPointEditComponent, wayPointComponent);
  };
  const replaceFormToCard = () => {
    replace(wayPointComponent, wayPointEditComponent);
  };
  const onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc'){
      evt.preventDefault();
      replaceFormToCard();
      document.removeEventListener('keydown', onEscKeyDown);
    }
  };

  wayPointComponent.setEditClickHandler(() => {
    replaceCardToForm();
    document.addEventListener('keydown', onEscKeyDown);
  });
  wayPointEditComponent.setFormSubmitHandler(() => {
    replaceFormToCard();
  });

  render(eventsListElement, wayPointComponent, RenderPosition.BEFOREEND);
};


render(siteSortAndEventsElement, eventsListComponent, RenderPosition.BEFOREEND);
//render(eventsListComponent.element, new EditPointView(wayPoint[0]).element, RenderPosition.BEFOREEND);
//render(eventsListComponent.element, new AddNewPointView(wayPoint).element, RenderPosition.BEFOREEND);

for (let i = 0; i < WAYPOINT_COUNT; i++){
  renderWayPoint(eventsListComponent.element, wayPoint[i]);
}

render(siteMenuElement, new SiteMenuView(), RenderPosition.BEFOREEND);
render(siteFilterElement, new FilterView(), RenderPosition.BEFOREEND);
render(siteInfoElement, new InfoView(), RenderPosition.AFTERBEGIN);
