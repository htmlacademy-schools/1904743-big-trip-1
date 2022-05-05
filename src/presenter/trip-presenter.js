import SortView from '../view/sort-view';
import NoEventsView from '../view/no-events-view';
import EventsListView from '../view/events-list-view';
import { render, RenderPosition, replace } from '../utils/render';
import { updateItem } from '../utils/common';
import PointPresenter from './point-presenter';

export default class TripPresenter {
  #tripContainer = null;

  #sortComponent = new SortView();
  #eventsListComponent = new EventsListView();
  #noEventsComponent = new NoEventsView();

  #tripEvents = [];
  #pointPresenter = new Map();

  constructor(tripContainer) {
    this.#tripContainer = tripContainer;
  }

  init = (tripEvents) => {
    this.#tripEvents = [...tripEvents];

    render(this.#tripContainer, this.#eventsListComponent, RenderPosition.BEFOREEND);

    this.#renderTrip();
  }

  #handleModeChange = () => {
    this.#pointPresenter.forEach((presenter) => presenter.resetView());
  }


  #handleTaskChange = (updatedEvent) => {
    this.#tripEvents = updateItem(this.#tripEvents, updatedEvent);
    this.#pointPresenter.get(updatedEvent.id).init(updatedEvent);
  }


  #renderSort = () => {
    render(this.#tripContainer, this.#sortComponent, RenderPosition.AFTERBEGIN);

  }

  #renderEvent = (event) => {
    const pointPresenter = new PointPresenter(this.#eventsListComponent, this.#handleTaskChange, this.#handleModeChange);
    pointPresenter.init(event);
    this.#pointPresenter.set(event.id, pointPresenter);
  }

  #renderEvents = (from, to) => {
    this.#tripEvents
      .slice(from, to)
      .forEach((tripEvent) => this.#renderEvent(tripEvent));
  }

  #renderNoEvents = () => {
    render(this.#tripContainer, this.#noEventsComponent, RenderPosition.BEFOREEND);
  }

  //#clearEventsList = () => {
  //  this.#pointPresenter.forEach((presenter) => presenter.destroy());
  //  this.#pointPresenter.clear();
  //  this.#renderedEventCount = 10;
  //}

  #renderEventsList = () => {
    this.#renderEvents(0, this.#tripEvents.length)
  }

  #renderTrip = () => {
    if (this.#tripEvents.length === 0) { this.#renderNoEvents() }
    else { this.#renderSort() }

    this.#renderEventsList();
  }
}
