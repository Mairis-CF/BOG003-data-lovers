import { filterDataNews, sortZA } from '../src/data.js';

const moviesToTest = [
  {
    "title": "Castle in the Sky",
    "director": "Hayao Miyazaki",
    "release_date": "1986",
    "rt_score": "95",
  },
{
    "title": "My Neighbor Totoro",
    "director": "Hayao Miyazaki",
    "release_date": "1988",
    "rt_score": "93",
  },
{
    "title": "My Neighbors the Yamadas",
    "director": "Isao Takahata",
    "release_date": "1999",
    "rt_score": "75",
  },
{
    "title": "When Marnie Was There",
    "director": "Hiromasa Yonebayashi",
    "release_date": "2014",
    "rt_score": "92",
  },
  {
    "title": "The Wind Rises",
    "director": "Hayao Miyazaki",
    "release_date": "2013",
    "rt_score": "89",
  }
]

describe('filterDataNews', () => {
  it('is a function', () => {
    expect(typeof filterDataNews).toBe('function');
  });

  const moviesNews = [
    {
      "title": "When Marnie Was There",
      "director": "Hiromasa Yonebayashi",
      "release_date": "2014",
      "rt_score": "92",
    },
     {
    "title": "The Wind Rises",
    "director": "Hayao Miyazaki",
    "release_date": "2013",
    "rt_score": "89",
  }
  ]

  it('To moviesToTest should return those with a relase_date over to 2000', () => {
    expect(filterDataNews(moviesToTest, moviesToTest.release_date)).toStrictEqual(moviesNews);
  });
});

const testghibli = [
  {
    title: "From Up on Poppy Hill",
    director: "Gorō Miyazaki",
    release_date: "2011",
  },
  {
    title: "Grave of the Fireflies",
    director: "Isao Takahata",
    release_date: "1988",
  },

  {
    title: "Ponyo on the Cliff by the Sea",
    director: "Hayao Miyazaki",
    release_date: "2008"
  },
  {
    title: "When Marnie Was There",
    director: "Hiromasa Yonebayashi",
    release_date: "2014",
  },

];


describe('filterDataNews', () => {
  it('is a function', () => {
    expect(typeof filterDataNews).toBe('function');
  });

  const dataReciente = [{
    title: "Pom Poko",
    release_date: "1994"
  },

  {
    title: "Spirited Away",
    release_date: "2001"
  },
  {
    title: "The Secret World of Arrietty",
    release_date: "2010",
  },
  {
    title: "When Marnie Was There",
    release_date: "2014",
  },];

  it('   filtrar peliculas >=2000 ', () => {
    expect(testghibli).toEqual(
      expect.arrayContaining(dataReciente),
    );
  });





describe('sortZA', () => {
  it('is a function', () => {
    expect(typeof sortZA).toBe('function');
  });

const moviesSortZA = [
  {
    "title": "When Marnie Was There",
    "director": "Hiromasa Yonebayashi",
    "release_date": "2014",
    "rt_score": "92",
  },
  {
    "title": "The Wind Rises",
    "director": "Hayao Miyazaki",
    "release_date": "2013",
    "rt_score": "89",
  },
  {
    "title": "My Neighbors the Yamadas",
    "director": "Isao Takahata",
    "release_date": "1999",
    "rt_score": "75",
  },
  {
    "title": "My Neighbor Totoro",
    "director": "Hayao Miyazaki",
    "release_date": "1988",
    "rt_score": "93",
  },
    {
    "title": "Castle in the Sky",
    "director": "Hayao Miyazaki",
    "release_date": "1986",
    "rt_score": "95",
  },
]  

  it('To moviesToTest should return a sorted array with an inverse order from Z to A', () => {
    expect(sortZA(moviesToTest, moviesToTest.title)).toStrictEqual(moviesSortZA);
  });
});
