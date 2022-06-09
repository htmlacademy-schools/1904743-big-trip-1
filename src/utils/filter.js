import {FilterType} from '../const';

export const filter = {
  [FilterType.EVERYTHING]: (events) => events.filter((event) => event),
  [FilterType.FUTURE]: (events) => events.filter((event) => event.dateStart >= new Date()),
  [FilterType.PAST]: (events) => events.filter((event) => event.dateEnd < new Date()),
};
