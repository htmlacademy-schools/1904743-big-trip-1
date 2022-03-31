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
  const randomIndex = getRandomInteger(0, descriptions.length - 1);

  return descriptions[randomIndex];
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
      title: 'Rent a car +€  200',
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

  const randomIndex = getRandomInteger(0, offers.length - 1);

  return offers[randomIndex];
};

export const generateWayPoint = () =>({
  pointType: 'Taxi',
  city: generateCity(),
  offers: generateOffers(),
  destinationNotitia:{
    description: generateDescription(),
    pictures: []
  },
  isFavorite: Boolean(getRandomInteger(0,1))
});
