import {getRandomInteger} from './common';

export const sortEventTime = (eventA, eventB) => eventB.duration - eventA.duration;

export const sortEventPrice = (eventA, eventB) => eventB.price - eventA.price;

export const sortEvents = (eventA, eventB) => eventA.dates - eventB.dates;

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

