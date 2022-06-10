export const SortType = {
  Day: 'day',
  Price: 'price',
  Time: 'time',
};

export const Type = {
  BUS: 'bus',
  TAXI: 'taxi',
  SHIP: 'ship',
  TRAIN: 'train',
  DRIVE: 'drive',
  FLIGHT: 'flight',
  CHECK_IN: 'check-in',
  SIGHTSEEING: 'sightseeing',
  RESTAURANT: 'restaurant'
};

export const UserAction = {
  UPDATE_EVENT: 'UPDATE_EVENT',
  ADD_EVENT: 'ADD_EVENT',
  DELETE_EVENT: 'DELETE_EVENT',
};

export const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
};

export const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PAST: 'past',
};

export const listCities = ['Tokyo', 'Moscow', 'Denver', 'Rio', 'Paris', 'Kiev', 'Sydney', 'Lisbon', 'Berlin', 'Madrid', 'Barcelona'];

export const TYPE = Object.values(Type);
