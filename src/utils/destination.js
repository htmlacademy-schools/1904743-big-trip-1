import {getRandomInteger} from './common';
const generatePictures = () => {
  const pictures = [];
  for (let i = 0; i < getRandomInteger(1,5); i++){
    pictures.push(`https://picsum.photos/248/152?r=${Math.random()}`);
  }
  return pictures;
};

export const generateDestination = () => [
  {
    name: 'Tokyo',
    description: 'Tokyo is the capital and largest city of Japan, its administrative, financial, industrial and political ' +
      'center. The largest urban economy in the world[6]. It is located in the southeastern part of Honshu Island, on the ' +
      'Kanto Plain in the bay of Tokyo Bay of the Pacific Ocean.',
    pictures: ['https://picsum.photos/248/152?r=1', 'https://picsum.photos/248/152?r=2', 'https://picsum.photos/248/152?r=3']
  },{
    name: 'Moscow',
    description: 'The capital of Russia, a city of federal significance, the administrative center of the Central Federal ' +
      'District and the center of the Moscow Region, which is not a part of. The largest city in Russia by population and ' +
      'its subject - 12635466 people, the most populated of the cities located entirely in Europe, ranks 22nd among the ' +
      'cities of the world by population, the largest Russian-speaking city in the world.',
    pictures: ['https://picsum.photos/248/152?r=4', 'https://picsum.photos/248/152?r=5', 'https://picsum.photos/248/152?r=6']
  },{
    name: 'Denver',
    description: 'The largest city and administrative center of the state of Colorado, as well as the administrative center ' +
      'of the second most populous county in Colorado, Denver. The population is 649495 and defines Denver as the 22nd city in ' +
      'the United States by population,',
    pictures: ['https://picsum.photos/248/152?r=7', 'https://picsum.photos/248/152?r=8']
  },{
    name: 'Rio',
    description: 'A city in Brazil. The administrative center of the eponymous state of Rio de Janeiro. The population ' +
      'is 6.7 million people, it is the second largest city in the country and the fourth in South America.',
    pictures: ['https://picsum.photos/248/152?r=9', 'https://picsum.photos/248/152?r=10', 'https://picsum.photos/248/152?r=12',
      'https://picsum.photos/248/152?r=13', 'https://picsum.photos/248/152?r=14']
  },{
    name: 'Paris',
    description: 'Paris is the capital of France, located on the banks of the River Seine in the historical region of Ile-de-France. ' +
      'Together with its suburbs, which include the famous. Versailles, forms the urban agglomeration of Greater Paris with ' +
      'a population of more than 10 million people. The city appeared on the site of an ancient settlement of the Gallic tribe ' +
      'of Parisians.',
    pictures: ['https://picsum.photos/248/152?r=15', 'https://picsum.photos/248/152?r=16', 'https://picsum.photos/248/152?r=17']
  },{
    name: 'Kiev',
    description: '\n' +
      'The capital and largest city of Ukraine. Located on the Dnieper River, it is the center of the Kiev agglomeration.' +
      ' A separate administrative-territorial unit of Ukraine; cultural, political, socio-economic, transport, scientific ' +
      'and religious center of the country.',
    pictures: ['https://picsum.photos/248/152?r=18', 'https://picsum.photos/248/152?r=19', 'https://picsum.photos/248/152?r=20', 'https://picsum.photos/248/152?r=21']
  },{
    name: 'Sydney',
    description: '\n' +
      'The largest and oldest city in Australia with an area of 12,144.6 km2, whose population at the 2020 census was ' +
      '5,367,206 people. Sydney is the capital of the state of New South Wales. The city was founded in 1788.',
    pictures: ['https://picsum.photos/248/152?r=22', 'https://picsum.photos/248/152?r=23']
  },{
    name: 'Lisbon',
    description: 'The capital, the largest city and the main port of Portugal. Lisbon is one of the oldest cities in the ' +
      'world and the oldest city in Western Europe, centuries older than such modern European capitals as London and Paris.',
    pictures: ['https://picsum.photos/248/152?r=24', 'https://picsum.photos/248/152?r=25', 'https://picsum.photos/248/152?r=26']
  },{
    name: 'Berlin',
    description: 'Berlin, the capital of Germany, the largest city in the country and one of the leading economic, cultural ' +
      'and scientific centers. It has the status of a federal land. Located in the east. parts of the country, on the river Spree, ' +
      'at its confluence with the river Havel (right tributary of the river Elbe).',
    pictures: ['https://picsum.photos/248/152?r=27', 'https://picsum.photos/248/152?r=28', 'https://picsum.photos/248/152?r=29'
      , 'https://picsum.photos/248/152?r=30', 'https://picsum.photos/248/152?r=31']
  },{
    name: 'Madrid',
    description: 'Madrid is the largest city and capital of Spain, the cultural, administrative, political and economic ' +
      'center of the kingdom. It is located in the central part of the Iberian Peninsula and occupies an area of about 1.2 ' +
      'square kilometers, and the number of its inhabitants exceeds 3 million people.',
    pictures: ['https://picsum.photos/248/152?r=32', 'https://picsum.photos/248/152?r=33', 'https://picsum.photos/248/152?r=34']
  },{
    name: 'Barcelona',
    description: 'Barcelona is a beautiful, charming, spectacular and very unusual capital of Catalonia, the main autonomous region of the Spanish Kingdom. ' +
      'The second largest city of the Iberian Peninsula, one of the largest ports of the Mediterranean and the world, ' +
      'a favorite point of attraction for travelers of all stripes.',
    pictures: ['https://picsum.photos/248/152?r=35']
  }
];
