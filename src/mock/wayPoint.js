import dayjs from 'dayjs';

const getRandomInteger = (a = 0, b = 1) =>{
  const lower = Math.ceil(Math.min(a,b));
  const upper = Math.floor(Math.max(a,b));

  return Math.floor(lower + Math.random()*(upper - lower + 1));
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
const generateCity = () => {
  const city = [
    'Tokio', 'Moscow', 'Denver', 'Rio', 'Paris', 'Kiev', 'Sydney', 'Lisbon', 'Berlin', 'Madrid', 'Barcelona'
  ];
  const randomIndex = getRandomInteger(0, city.length - 1);

  return city[randomIndex];
};
const generateOffers = () => {
  const offers = [
    {
      id: 1,
      title: 'Add luggage',
      price: 30
    }, {
      id: 2,
      title: 'Switch to comfort',
      price: 80
    }, {
      id: 3,
      title: 'Rent a car',
      price: 200
    }, {
      id: 4,
      title: 'Add breakfast',
      price: 50
    }, {
      id: 5,
      title: 'Order Uber',
      price: 20
    }, {
      id: 6,
      title: 'Book tickets',
      price: 40
    }, {
      id: 7,
      title: 'Lunch in city',
      price: 30
    }, {
      id: 8,
      title: 'Choose seats',
      price: 5
    }
  ];
  const offer = [];
  for (let i = 0; i < getRandomInteger(0,5); i++){
    const randomIndex = getRandomInteger(0, offers.length - 1);
    if (!offer.includes(offers[randomIndex])){
      offer.push(offers[randomIndex]);
    }
  }
  return offer;
};
const generatePointType = () => {
  const type = [
    'Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'
  ];
  const randomIndex = getRandomInteger(0, type.length - 1);

  return type[randomIndex];
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

export const generateWayPoint = () =>{
  const dates = generateDate();

  return{
    dates,
    pointType: generatePointType(),
    city: generateCity(),
    offers: generateOffers(),
    destinationInfo:{
      description: generateDescription(),
      pictures: generatePictures()
    },
    isFavorite: Boolean(getRandomInteger(0,1))
  };
};
