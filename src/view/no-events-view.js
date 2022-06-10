import AbstractView from './abstract-view';
import {FilterType} from '../const';

const NoEventsTextType = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.FUTURE]: 'There are no future events now',
  [FilterType.PAST]: 'There are no past events now',
};

const createNoEventsTemplate = (filterType) => {
  const noEventTextValue = NoEventsTextType[filterType];

  return (
    `<p class="trip-events__msg">
      ${noEventTextValue}
    </p>`);
};

export default class NoEventsView extends AbstractView{
  constructor(data) {
    super();
    this._data = data;
  }

  get template(){
    return createNoEventsTemplate(this._data);
  }
}
