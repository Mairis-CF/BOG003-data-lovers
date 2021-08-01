import { filterFechas, anotherExample } from '../src/data.js';


describe('filterFechas', () => {
  it('is a function', () => {
    expect(typeof filterFechas).toBe('function');
  });

  it('returns `filterFechas`', () => {
    expect(filterFechas()).toBe('boolean');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
