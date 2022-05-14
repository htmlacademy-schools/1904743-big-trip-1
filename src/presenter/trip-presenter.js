import SortView from '../view/sort-view';
import NoEventsView from '../view/no-events-view';
import EventsListView from '../view/events-list-view';
import { render, RenderPosition } from '../utils/render';
import { updateItem } from '../utils/common';
import { sortEventTime, sortEventPrice } from '../utils/wayPoint.js';
import { SortType } from '../const.js';
import PointPresenter from './point-presenter';

export default class TripPresenter {
  #tripContainer = null;

  #sortComponent = new SortView();
  #eventsListComponent = new EventsListView();
  #noEventsComponent = new NoEventsView();

  #tripEvents = [];
  #pointPresenter = new Map();
  #currentSortType = SortType.Day;
  #sourcedTripEvents = [];

  constructor(tripContainer) {
    this.#tripContainer = tripContainer;
  }

  init = (tripEvents) => {
    this.#tripEvents = [...tripEvents];
    this.#sourcedTripEvents = [...tripEvents];

    render(this.#tripContainer, this.#eventsListComponent, RenderPosition.BEFOREEND);

    this.#renderTrip();
  }

  #handleModeChange = () => {
    this.#pointPresenter.forEach((presenter) => presenter.resetView());
  }


  #handleEventsChange = (updatedEvent) => {
    this.#tripEvents = updateItem(this.#tripEvents, updatedEvent);
    this.#sourcedTripEvents = updateItem(this.#sourcedTripEvents, updatedEvent);
    this.#pointPresenter.get(updatedEvent.id).init(updatedEvent);
  }

  #sortEvents = (sortType) => {
    switch (sortType) {
      case SortType.Price:
        this.#tripEvents.sort(sortEventPrice);
        break;
      case SortType.Time:
        this.#tripEvents.sort(sortEventTime);
        break;
      case SortType.Day:
        this.#tripEvents = [...this.#sourcedTripEvents];
        break;
      default:
        this.#tripEvents = [...this.#sourcedTripEvents];
    }

    this.#currentSortType = sortType;
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#sortEvents(sortType);
    this.#clearEventsList();
    this.#renderEventsList();
  }


  #renderSort = () => {
    render(this.#tripContainer, this.#sortComponent, RenderPosition.AFTERBEGIN);
    this.#sortComponent.setSortTypeChangeHandler(this.#handleSortTypeChange);
  }

  #renderEvent = (event) => {
    const pointPresenter = new PointPresenter(this.#eventsListComponent, this.#handleEventsChange, this.#handleModeChange);
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

  #clearEventsList = () => {
    this.#pointPresenter.forEach((presenter) => presenter.destroy());
    this.#pointPresenter.clear();
    //this.#renderedEventCount = 10;
  }

  #renderEventsList = () => {
    this.#renderEvents(0, this.#tripEvents.length);
  }

  #renderTrip = () => {
    if (this.#tripEvents.length === 0) { this.#renderNoEvents(); }
    else { this.#renderSort(); }

    this.#renderEventsList();
  }
}
