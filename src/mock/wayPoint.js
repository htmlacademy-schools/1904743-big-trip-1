import dayjs from 'dayjs';
import {getRandomInteger} from '../utils';

const generateDescription = () =>{
  const descriptions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Cras aliquet varius magna, non porta ligula feugiat eget.',
    'Fusce tristique felis at fermentum pharetra.',
    'Aliquam id orci ut lectus varius viverra.',
    'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
    'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
    'Sed sed nisi sed augue convallis suscipit in sed felis.',
    'Aliquam erat volutpat.',
    'Nunc fermentum tortor ac porta dapibus.',
    'In rutrum ac purus sit amet tempus.'
  ];
  let description = '';
  for (let i = 0; i < getRandomInteger(1,5); i++){
    const randomIndex = getRandomInteger(0, descriptions.length - 1);
    if (!description.includes(descriptions[randomIndex])){
      description += descriptions[randomIndex];
    }
  }
  return description;
};
const generateCity = () => {
  const city = [
    'Tokio', 'Moscow', 'Denver', 'Rio', 'Paris', 'Kiev', 'Sydney', 'Lisbon', 'Berlin', 'Madrid', 'Barcelona'
  ];
  const randomIndex = getRandomInteger(0, city.length - 1);

  return city[randomIndex];
};
const generatePointType = () => {
  const type = [
    'Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'
  ];
  const randomIndex = getRandomInteger(0, type.length - 1);

  return type[randomIndex];
};
const generateOffers = (pointType) => {
  const offer = [
    {
      type: 'Taxi',
      offers:[
        {
          id: 1,
          title: 'Upgrade to a business class',
          price: 120
        }, {
          id: 2,
          title: 'Choose the radio station',
          price: 60
        }, {
          id: 5,
          title: 'Order Uber',
          price: 20
        },
      ]
    }, {
      type: 'Drive',
      offers:[
        {
          id: 3,
          title: 'Rent a car',
          price: 200
        },{
          id: 9,
          title: 'Registration of insurance',
          price: 50
        },{
          id: 10,
          title: 'Toll roads',
          price: 80
        }
      ]
    },{
      type: 'Bus',
      offers:[
        {
          id: 6,
          title: 'Purchase ticket',
          price: 5
        }
      ]
    },{
      type: 'Train',
      offers:[
        {
          id: 20,
          title: 'Snack',
          price: 20
        },{
          id: 21,
          title: 'With an animal',
          price: 50
        },{
          id: 22,
          title: 'With luggage',
          price: 25
        }
      ]
    },{
      type: 'Ship',
      offers:[
        {
          id: 23,
          title: 'Photographer',
          price: 60
        },{
          id: 24,
          title: 'Snack',
          price: 20
        },{
          id: 25,
          title: 'Excursion',
          price: 80
        }
      ]
    },{
      type: 'Flight',
      offers:[
        {
          id: 1,
          title: 'Add luggage',
          price: 30
        }, {
          id: 11,
          title: 'Switch to comfort class',
          price: 100
        },{
          id: 12,
          title: 'Add meal',
          price: 15
        },{
          id: 13,
          title: 'Choose seats',
          price: 5
        },{
          id: 14,
          title: 'Travel by train',
          price: 40
        }
      ]
    },{
      type: 'Check-in',
      offers:[
        {
          id: 14,
          title: 'Add breakfast',
          price: 50
        },{
          id: 15,
          title: 'Suite room',
          price: 150
        },{
          id: 16,
          title: 'Mini bar',
          price: 100
        },{
          id: 17,
          title: 'TV',
          price: 15
        }
      ]
    },{
      type: 'Sightseeing',
      offers:[
        {
          id: 6,
          title: 'Book tickets',
          price: 40,
          checked: Boolean(getRandomInteger(0,1))
        },{
          id: 7,
          title: 'Lunch in city',
          price: 30,
          checked: false
        }
      ]
    },{
      type: 'Restaurant',
      offers:[
        {
          id: 18,
          title: 'Tips',
          price: 15,
          checked: false
        },{
          id: 19,
          title: 'Book a seat',
          price: 20,
          checked: false
        }
      ]
    }
  ];
  for(let i=0; i < offer.length; i++){
    if (offer[i].type === pointType){
      return offer[i].offers;
    }
  }
};
const generatePictures = () => {
  const pictures = [];
  for (let i = 0; i < getRandomInteger(1,5); i++){
    pictures.push(`http://picsum.photos/248/152?r=${  Math.random()}`);
  }
  return pictures;
};
const generateDate = () => {
  const maxDayGap = 7;
  const daysGap = getRandomInteger(0, maxDayGap);
  return dayjs().add(daysGap, 'day').toDate();
};
const generatePrice = () => {
  let price = getRandomInteger(20, 600);
  while (price % 10 !== 0){
    price = getRandomInteger(20, 600);
  }
  return price;
};
const generateTimeBegin = () => {
  const maxMinutesGap = 280;
  const MinutesGap = getRandomInteger(0, maxMinutesGap);
  return dayjs().add(MinutesGap, 'minutes').toDate();
};
const generateTimeEnd = () => {
  const maxMinutesGap = 560;
  const MinutesGap = getRandomInteger(280, maxMinutesGap);
  return dayjs().add(MinutesGap, 'minutes').toDate();
};


export const generateWayPoint = () =>{
  const dates = generateDate();
  const pointType = generatePointType();

  return{
    dates,
    pointType,
    city: generateCity(),
    offers: generateOffers(pointType),
    description: generateDescription(),
    pictures: generatePictures(),
    price: generatePrice(),
    timeBegin: generateTimeBegin(),
    timeEnd: generateTimeEnd(),
    isFavorite: Boolean(getRandomInteger(0,1))
  };
};
