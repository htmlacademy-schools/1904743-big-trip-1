import dayjs from 'dayjs';

export const sortEventTime = (eventA, eventB) => dayjs(eventA.dateStart - eventA.dateEnd) - dayjs(eventB.dateStart - eventB.dateEnd);

export const sortEventPrice = (eventA, eventB) => eventB.price - eventA.price;

export const sortEvents = (eventA, eventB) => eventA.dateStart - eventB.dateStart;

export const offersFilter = (offer, pointType) => {
  for(let i=0; i < offer.length; i++){
    if (offer[i].type === pointType){
      /*for (let j = 0; j < offer[i].offers.length; j++){
        offer[i].offers[j].checked = Boolean(getRandomInteger(0,1));
      }*/
      return offer[i].offers;
    }
  }
};

export const destinationFilter = (city, destination) => {
  for(let i=0; i < destination.length; i++){
    if (destination[i].name === city){
      return destination[i];
    }
  }
};

export const generateDuration = (timeBegin, timeEnd) => dayjs(timeEnd - timeBegin).subtract(5,'hour');

export const isDatesEqual = (dateA, dateB) => (dateA === null && dateB === null) || dayjs(dateA).isSame(dayjs(dateB));
