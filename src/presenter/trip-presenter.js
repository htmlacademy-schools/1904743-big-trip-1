import SortView from '../view/sort-view';
import NoEventsView from '../view/no-events-view';
import EventsListView from '../view/events-list-view';
import { render, RenderPosition } from '../utils/render';
import { sortEventTime, sortEventPrice, sortEvents } from '../utils/wayPoint.js';
import { SortType } from '../const.js';
import PointPresenter from './point-presenter';

export default class TripPresenter {
  #tripContainer = null;
  #eventsModel = null;

  #sortComponent = new SortView();
  #eventsListComponent = new EventsListView();
  #noEventsComponent = new NoEventsView();

  #pointPresenter = new Map();
  #currentSortType = SortType.Day;

  constructor(tripContainer, eventsModel) {
    this.#tripContainer = tripContainer;
    this.#eventsModel = eventsModel;

    this.#eventsModel.addObserver(this.#handleModelEvent);
  }

  get events() {
    switch (this.#currentSortType) {
      case SortType.Price:
        return [...this.#eventsModel.events].sort(sortEventPrice);
      case SortType.Time:
        return [...this.#eventsModel.events].sort(sortEventTime);
      case SortType.Day:
        return [...this.#eventsModel.events].sort(sortEvents);
    }
    return this.#eventsModel.events;
  }

  init = () => {
    render(this.#tripContainer, this.#eventsListComponent, RenderPosition.BEFOREEND);
    this.#renderTrip();
  }

  #handleModeChange = () => {
    this.#pointPresenter.forEach((presenter) => presenter.resetView());
  }


  #handleViewAction = (actionType, updateType, update) => {
    console.log(actionType, updateType, update);
    // Здесь будем вызывать обновление модели.
    // actionType - действие пользователя, нужно чтобы понять, какой метод модели вызвать
    // updateType - тип изменений, нужно чтобы понять, что после нужно обновить
    // update - обновленные данные
  }

  #handleModelEvent = (updateType, data) => {
    console.log(updateType, data);
    // В зависимости от типа изменений решаем, что делать:
    // - обновить часть списка (например, когда поменялось описание)
    // - обновить список (например, когда задача ушла в архив)
    // - обновить всю доску (например, при переключении фильтра)
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#currentSortType = sortType;
    this.#clearEventsList();
    this.#renderEventsList();
  }


  #renderSort = () => {
    render(this.#tripContainer, this.#sortComponent, RenderPosition.AFTERBEGIN);
    this.#sortComponent.setSortTypeChangeHandler(this.#handleSortTypeChange);
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
    render(this.#tripContainer, this.#noEventsComponent, RenderPosition.BEFOREEND);
  }

  #clearEventsList = () => {
    this.#pointPresenter.forEach((presenter) => presenter.destroy());
    this.#pointPresenter.clear();
  }

  #renderEventsList = () => {
    this.#renderSort();
    const eventsCount = this.events.length;
    const events = this.events.slice(0, eventsCount);
    this.#renderEvents(events);
  }

  #renderTrip = () => {
    if (this.events.length === 0) { this.#renderNoEvents(); }
    else { this.#renderEventsList(); }
  }
}
