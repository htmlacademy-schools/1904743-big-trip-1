import {createElement} from '../render';

const createNoEventsTemplate = () => ('<p class="trip-events__msg">Click New Event to create your first point</p>');

export default class NoEventsView {
  #element = null;

  get element() {
    if (!this.#element){
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template(){
    return createNoEventsTemplate();
  }

  removeElement(){
    this.#element = null;
  }
}
