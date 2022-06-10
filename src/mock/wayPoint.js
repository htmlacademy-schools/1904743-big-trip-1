import dayjs from 'dayjs';
import {getRandomInteger} from '../utils/common';
import {nanoid} from 'nanoid';
import {generateDuration} from '../utils/wayPoint';
import {generateOffers} from '../utils/offers';
import {generateDestination} from '../utils/destination';
import {listCities} from '../const';

const generateCity = (list) => list[getRandomInteger(1, list.length - 1)];
const generatePointType = () => {
  const type = [
    'taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'
  ];
  const randomIndex = getRandomInteger(0, type.length - 1);

  return type[randomIndex];
};

const generateTimeBegin = () => {
  const maxMinutesGap = 180;
  const MinutesGap = getRandomInteger(0, maxMinutesGap);
  return dayjs().add(MinutesGap, 'minutes');
};

const generateStartDate = () => {
  const maxDayGap = getRandomInteger(-7, 7);
  const daysGap = getRandomInteger(0, maxDayGap);
  return generateTimeBegin().add(daysGap, 'day', );
};

const generateEndDate = (start) => {
  const maxMinutesGap = 360;
  const MinutesGap = getRandomInteger(200, maxMinutesGap);
  return start.add(MinutesGap, 'minutes');
};

const generatePrice = () => {
  let price = getRandomInteger(20, 600);
  while (price % 10 !== 0){
    price = getRandomInteger(20, 600);
  }
  return price;
};

export const generateWayPoint = () =>{
  const dateStart = generateStartDate();
  const dateEnd = generateEndDate(dateStart);
  const duration = generateDuration(dateStart, dateEnd);
  const pointType = generatePointType();

  return {
    id: nanoid(),
    dateStart,
    dateEnd,
    duration,
    pointType,
    city: generateCity(listCities),
    listCities,
    destination: generateDestination(),
    offers: generateOffers(),
    price: generatePrice(),
    isFavorite: false
  };
};
