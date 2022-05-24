import dayjs from 'dayjs';
import SmartView from './smart-view';
import {TYPE} from '../const';
import {offersFilter, destinationFilter} from '../utils/wayPoint';
import flatpickr from 'flatpickr';

import '../../node_modules/flatpickr/dist/flatpickr.min.css';

const BLANK_WAYPOINT = {
  city: '',
  pointType: TYPE[0],
  price: '',
  description: '',
  offers: [],
  pictures: [],
  timeBegin: '',
  timeEnd: '',
  dates: '',
  destination: [],
};

const createEventEditTypeTemplate = (currentType) => (
  TYPE.map((type) => `
    <div class="event__type-item">
    <input
    id="event-type-${type}-1"
    class="event__type-input  visually-hidden"
    type="radio"
    name="event-type"
    value="${type}"
    ${currentType.toLowerCase() === type ? 'checked' : ''}
     />
     <label
     class="event__type-label  event__type-label--${type}"
     for="event-type-${type}-1"
     >${type[0].toUpperCase() + type.slice(1)}</label>
     </div>`)
    .join('')
);

const createEditPointTemplate = (data) => {
  const{
    city,
    listCities,
    pointType,
    price,
    offers,
    timeBegin,
    timeEnd,
    dates,
    destination,
  } = data;

  const currentOffers = offersFilter(offers, pointType);
  const date = dayjs(dates).format('DD/MM/YY');
  const timeStart = dayjs(timeBegin).format('hh:mm');
  const timeFinish = dayjs(timeEnd).format('hh:mm');
  const currentDestination = destinationFilter(city, destination);

  const createOffersElement = (offer) =>`<div class="event__available-offers">
            <div class="event__offer-selector">
              <input class="event__offer-checkbox  visually-hidden" id="${offer.id}" type="checkbox" name="event-offer-luggage" checked>
              <label class="event__offer-label" for="${offer.id}">
                <span class="event__offer-title">${offer.title}</span>
                &plus;&euro;&nbsp;
                <span class="event__offer-price">${offer.price}</span>
              </label>
            </div>`;

  const createCitiesElement = (listCity) =>`<option value="${listCity}"></option>`;

  const offersElements = currentOffers.map(createOffersElement).join('');
  const citiesElements = listCities.map(createCitiesElement).join('');

  const createPictureElement = (picture) =>(`<img class="event__photo" src=${picture} alt="Event photo">`);
  const picturesElements = currentDestination.pictures.map(createPictureElement).join('');

  const createListPictureElement = (picture) =>(
    `${picture.length !== 0 ? `<div class="event__photos-container">
        <div class="event__photos-tape">
            ${picturesElements}
          </div>
        </div>` : ''}
    `);

  const listPicturesElements = createListPictureElement(currentDestination.pictures);
  const typeTemplate = createEventEditTypeTemplate(pointType);

  return `<li class="trip-events__item">
              <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/${pointType}.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>
                            ${typeTemplate}
                      </fieldset>
                    </div>
                  </div>

                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-1">
                      ${pointType}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value=${city} list="destination-list-1">
                    <datalist id="destination-list-1">
                      ${citiesElements}
                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${date} ${timeStart}">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${date} ${timeFinish}">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Delete</button>
                  <button class="event__rollup-btn" type="button">
                    <span class="visually-hidden">Open event</span>
                  </button>
                </header>
                <section class="event__details">
                  <section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>
                    ${offersElements}
                  </section>

                  <section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                    <p class="event__destination-description">${currentDestination.description}</p>
                    ${listPicturesElements}
                  </section>
                </section>
              </form>
            </li>`;
};

export default class EditPointView extends SmartView{

  constructor(wayPoint = BLANK_WAYPOINT) {
    super();
    this._data = EditPointView.parseEventToData(wayPoint);

    this.#setInnerHandlers();
  }

  get template(){
    return createEditPointTemplate(this._data);
  }

  reset = (event) => {
    this.updateData(
      EditPointView.parseEventToData(event),
    );
  }

  restoreHandlers = () => {
    this.#setInnerHandlers();
    this.setFormSubmitHandler(this._callback.formSubmit);
  }

  setFormSubmitHandler = (callback) => {
    this._callback.formSubmit = callback;
    this.element.querySelector('form').addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#formSubmitHandler);
  }

  #typeToggleHandler = (evt) => {
    evt.preventDefault();
    this.updateData({
      pointType: evt.target.value,
    });
  }

  #cityToggleHandler = (evt) => {
    evt.preventDefault();
    this.updateData({
      city: evt.target.value,
    });
  }


  #setInnerHandlers = () => {
    this.element.querySelector('.event__type-list')
      .addEventListener('change', this.#typeToggleHandler);
    this.element.querySelector('.event__field-group')
      .addEventListener('change', this.#cityToggleHandler);
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this._callback.formSubmit(EditPointView.parseDataToEvent(this._data));
  }

  static parseEventToData = (event) => ({... event,})

  static parseDataToEvent = (data) => ({...data});
}
