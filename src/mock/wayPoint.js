import dayjs from 'dayjs';
import {getRandomInteger} from '../utils/common';
import {nanoid} from 'nanoid';
import {generateDuration} from '../utils/wayPoint';

const listCities = ['Tokio', 'Moscow', 'Denver', 'Rio', 'Paris', 'Kiev', 'Sydney', 'Lisbon', 'Berlin', 'Madrid', 'Barcelona'];

const generatePictures = () => {
  const pictures = [];
  for (let i = 0; i < getRandomInteger(1,5); i++){
    pictures.push(`http://picsum.photos/248/152?r=${  Math.random()}`);
  }
  return pictures;
};
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
const generateDestination = () => [
  {
    name: 'Tokio',
    description: generateDescription(),
    pictures: generatePictures()
  },{
    name: 'Moscow',
    description: generateDescription(),
    pictures: generatePictures()
  },{
    name: 'Denver',
    description: generateDescription(),
    pictures: generatePictures()
  },{
    name: 'Rio',
    description: generateDescription(),
    pictures: generatePictures()
  },{
    name: 'Paris',
    description: generateDescription(),
    pictures: generatePictures()
  },{
    name: 'Kiev',
    description: generateDescription(),
    pictures: generatePictures()
  },{
    name: 'Sydney',
    description: generateDescription(),
    pictures: generatePictures()
  },{
    name: 'Lisbon',
    description: generateDescription(),
    pictures: generatePictures()
  },{
    name: 'Berlin',
    description: generateDescription(),
    pictures: generatePictures()
  },{
    name: 'Madrid',
    description: generateDescription(),
    pictures: generatePictures()
  },{
    name: 'Barcelona',
    description: generateDescription(),
    pictures: generatePictures()
  }
];
const generateCity = (list) => list[getRandomInteger(1, list.length - 1)];
const generatePointType = () => {
  const type = [
    'taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'
  ];
  const randomIndex = getRandomInteger(0, type.length - 1);

  return type[randomIndex];
};
const generateOffers = () => [
  {
    type: 'taxi',
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
    type: 'drive',
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
    type: 'bus',
    offers:[
      {
        id: 6,
        title: 'Purchase ticket',
        price: 5
      }
    ]
  },{
    type: 'train',
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
    type: 'ship',
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
    type: 'flight',
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
    type: 'check-in',
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
    type: 'sightseeing',
    offers:[
      {
        id: 6,
        title: 'Book tickets',
        price: 40,
      },{
        id: 7,
        title: 'Lunch in city',
        price: 30,
      }
    ]
  },{
    type: 'restaurant',
    offers:[
      {
        id: 18,
        title: 'Tips',
        price: 15,
      },{
        id: 19,
        title: 'Book a seat',
        price: 20,
      }
    ]
  }
];

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
