import SortView from '../view/sort-view';
import NoEventsView from '../view/no-events-view';
import EventsListView from '../view/events-list-view';
import {remove, render, RenderPosition} from '../utils/render';
import { sortEventTime, sortEventPrice, sortEvents } from '../utils/wayPoint.js';
import {filter} from '../utils/filter.js';
import { SortType, UserAction, UpdateType, FilterType } from '../const.js';
import PointPresenter from './point-presenter';
import EventNewPresenter from './event-new-presenter';

export default class TripPresenter {
  #tripContainer = null;
  #eventsModel = null;
  #filterModel = null;

  #eventsListComponent = new EventsListView();
  #noEventsComponent = null;
  #sortComponent = null;

  #pointPresenter = new Map();
  #eventNewPresenter = null;
  #currentSortType = SortType.Day;
  #filterType = FilterType.EVERYTHING;

  constructor(tripContainer, eventsModel, filterModel) {
    this.#tripContainer = tripContainer;
    this.#eventsModel = eventsModel;
    this.#filterModel = filterModel;

    this.#eventNewPresenter= new EventNewPresenter(this.#eventsListComponent, this.#handleViewAction);

    this.#eventsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  get events() {
    this.#filterType = this.#filterModel.filter;
    const events = this.#eventsModel.events;
    const filteredEvents = filter[this.#filterType](events);


    switch (this.#currentSortType) {
      case SortType.Price:
        return filteredEvents.sort(sortEventPrice);
      case SortType.Time:
        return filteredEvents.sort(sortEventTime);
      case SortType.Day:
        return filteredEvents.sort(sortEvents);
    }
    return filteredEvents;
  }

  init = () => {
    render(this.#tripContainer, this.#eventsListComponent, RenderPosition.BEFOREEND);
    this.#renderTrip();
  }

  createEvent = () => {
    this.#currentSortType = SortType.Day;
    this.#filterModel.setFilter(UpdateType.MAJOR, FilterType.EVERYTHING);
    this.#eventNewPresenter.init();
  }

  #handleModeChange = () => {
    this.#eventNewPresenter.destroy();
    this.#pointPresenter.forEach((presenter) => presenter.resetView());
  }


  #handleViewAction = (actionType, updateType, update) => {
    switch (actionType) {
      case UserAction.UPDATE_EVENT:
        this.#eventsModel.updateEvent(updateType, update);
        break;
      case UserAction.ADD_EVENT:
        this.#eventsModel.addEvent(updateType, update);
        break;
      case UserAction.DELETE_EVENT:
        this.#eventsModel.deleteEvent(updateType, update);
        break;
    }
  }

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#pointPresenter.get(data.id).init(data);
        break;
      case UpdateType.MINOR:
        this.#clearTrip();
        this.#renderTrip();
        break;
      case UpdateType.MAJOR:
        this.#clearTrip({resetSortType: true});
        this.#renderTrip();
        break;
    }
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#currentSortType = sortType;
    this.#clearTrip();
    this.#renderTrip();
  }


  #renderSort = () => {
    this.#sortComponent = new SortView(this.#currentSortType);
    this.#sortComponent.setSortTypeChangeHandler(this.#handleSortTypeChange);

    render(this.#tripContainer, this.#sortComponent, RenderPosition.AFTERBEGIN);
  }

  #renderEvent = (event) => {
    const pointPresenter = new PointPresenter(this.#eventsListComponent, this.#handleViewAction, this.#handleModeChange);
    pointPresenter.init(event);
    this.#pointPresenter.set(event.id, pointPresenter);
  }

  #renderEvents = (events) => {
    events.forEach((event) => this.#renderEvent(event));
  }

  #renderNoEvents = () => {
    this.#noEventsComponent = new NoEventsView(this.#filterType);
    render(this.#tripContainer, this.#noEventsComponent, RenderPosition.BEFOREEND);
  }

  #clearTrip = ({resetSortType = false} = {}) => {

    this.#eventNewPresenter.destroy();
    this.#pointPresenter.forEach((presenter) => presenter.destroy());
    this.#pointPresenter.clear();

    remove(this.#sortComponent);

    if (this.#noEventsComponent){
      remove(this.#noEventsComponent);
    }

    if (resetSortType) {
      this.#currentSortType = SortType.Day;
    }
  }

  #renderTrip = () => {
    const events = this.events;
    const countEvents = events.length;

    if (countEvents === 0) {
      this.#renderNoEvents();
      return;
    }

    this.#renderSort();
    this.#renderEvents(events.slice(0, countEvents));
  }
}
