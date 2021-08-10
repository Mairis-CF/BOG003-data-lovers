import { filterFechas, filterDataNews } from '../src/data.js';


describe('filterFechas', () => {
  it('is a function', () => {
    expect(typeof filterFechas).toBe('function');
  });


  it('returns `filterFechas`', () => {
    expect(filterFechas()).toBe('function');
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





/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
*/
