import AbstractView from './abstract-view';
import {listCities, TYPE} from '../const';
import dayjs from 'dayjs';
import {destinationFilter, offersFilter} from '../utils/wayPoint';
import he from 'he';
import SmartView from './smart-view';
import flatpickr from 'flatpickr';

const createCitiesElement = (listCity) =>`<option value="${listCity}"></option>`;

const createEventEditTypeTemplate = (pointType) => (
  TYPE.map((type) => `
    <div class="event__type-item">
    <input
    id="event-type-${type}-1"
    class="event__type-input  visually-hidden"
    type="radio"
    name="event-type"
    value="${type}"
    ${pointType.toLowerCase() === type ? 'checked' : ''}
     />
     <label
     class="event__type-label  event__type-label--${type}"
     for="event-type-${type}-1"
     >${type[0].toUpperCase() + type.slice(1)}</label>
     </div>`)
    .join('')
);

const createOffersElement = (offer) =>`
            <div class="event__offer-selector">
              <input class="event__offer-checkbox  visually-hidden" id="${offer.id}" type="checkbox" name="event-offer-luggage">
              <label class="event__offer-label" for="${offer.id}">
                <span class="event__offer-title">${offer.title}</span>
                &plus;&euro;&nbsp;
                <span class="event__offer-price">${offer.price}</span>
              </label>
            </div>`;

const createPictureElement = (picture) =>(`<img class="event__photo" src=${picture} alt="Event photo">`);

const createAddNewPointTemplate = (wayPoint= {}) => {
  const{
    city = null,
    pointType = '',
    price = '',
    offers = [],
    dateEnd = null,
    dateStart = null,
    destination = [],
  } = wayPoint;

  const timeStart = dayjs(dateStart).format('DD/MM/YY HH:mm');
  const timeFinish = dayjs(dateEnd).format('DD/MM/YY HH:mm');
  const currentDestination = destinationFilter(city, destination);

  //const offersElements = offersFilter(offers, pointType).map(createOffersElement).join('');
  const citiesElements = listCities.map(createCitiesElement).join('');
  const offersElements = offers.length === 0
    ? ''
    : `<div class="event__available-offers">${offersFilter(offers, pointType).map(createOffersElement).join('')}</div>`;

  const listOffersElements = offers.length === 0
    ? ''
    : `<section class="event__details">
                  <section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>
                    ${offersElements}
       </section>`;


  const createListPictureElement = () =>(
    `<div class="event__photos-container">
        <div class="event__photos-tape">
            ${currentDestination.pictures.map(createPictureElement).join('')}
          </div>
        </div>`);

  const listPicturesElements = destination.length === 0
    ? ''
    : createListPictureElement(currentDestination.pictures);

  const createListDestination = destination.length === 0
    ? ''
    : `section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                    <p class="event__destination-description">${destination.length !== 0 ? currentDestination.description : ''}</p>
                    ${listPicturesElements}
                  </section>`;


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
                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${timeStart}">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${timeFinish}">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${he.encode(price.toString())}">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Cancel</button>
                  <button class="event__rollup-btn" type="button">
                    <span class="visually-hidden">Open event</span>
                  </button>
                </header>
                <section class="event__details">
                    ${listOffersElements}
                    ${createListDestination}
                </section>
              </form>
            </li>`;
};

export default class EditPointView extends SmartView{
  #datepicker = null;

  constructor(wayPoint) {
    super();
    this._data = EditPointView.parseEventToData(wayPoint);

    this.#setInnerHandlers();
    this.#setStartDatepicker();
    this.#setEndDatepicker();
  }

  get template(){
    return createAddNewPointTemplate(this._data);
  }

  removeElement = () => {
    super.removeElement();

    if (this.#datepicker) {
      this.#datepicker.destroy();
      this.#datepicker = null;
    }
  }

  reset = (event) => {
    this.updateData(
      EditPointView.parseEventToData(event),
    );
  }

  restoreHandlers = () => {
    this.#setInnerHandlers();
    this.#setStartDatepicker();
    this.#setEndDatepicker();
    this.setFormSubmitHandler(this._callback.formSubmit);
    this.setDeleteClickHandler(this._callback.deleteClick);
  }

  setFormSubmitHandler = (callback) => {
    this._callback.formSubmit = callback;
    this.element.querySelector('form').addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#formSubmitHandler);
  }

  setDeleteClickHandler = (callback) => {
    this._callback.deleteClick = callback;
    this.element.querySelector('.event__reset-btn').addEventListener('click', this.#formDeleteClickHandler);
  }

  #setStartDatepicker = () => {
    this.#datepicker = flatpickr(
      this.element.querySelector('#event-start-time-1'),
      {
        enableTime: true,
        dateFormat: 'd/m/y H:i',
        time_24hr: true,
        defaultDate: this._data.date,
        onChange: this.#dateStartChangeHandler,
      },
    );
  }

  #setEndDatepicker = () => {
    this.#datepicker = flatpickr(
      this.element.querySelector('#event-end-time-1'),
      {
        enableTime: true,
        dateFormat: 'd/m/y H:i',
        time_24hr: true,
        defaultDate: this._data.date,
        onChange: this.#dateEndChangeHandler,
      },
    );
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

  #priceHandler = (evt) => {
    evt.preventDefault();
    this.updateData({
      price: evt.target.value,
    });
  }

  #dateEndChangeHandler = ([userDate]) => {
    this.updateData({
      dateEnd: userDate,
    });
  }

  #dateStartChangeHandler = ([userDate]) => {
    this.updateData({
      dateStart: userDate,
    });
  }


  #setInnerHandlers = () => {
    this.element.querySelector('.event__type-list')
      .addEventListener('change', this.#typeToggleHandler);
    this.element.querySelector('.event__field-group')
      .addEventListener('change', this.#cityToggleHandler);
    this.element.querySelector('.event__input--price')
      .addEventListener('change', this.#priceHandler);

  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this._callback.formSubmit(EditPointView.parseDataToEvent(this._data));
  }

  #formDeleteClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.deleteClick(EditPointView.parseDataToEvent(this._data));
  }

  static parseEventToData = (event) => ({... event,})

  static parseDataToEvent = (data) => ({...data});
}
