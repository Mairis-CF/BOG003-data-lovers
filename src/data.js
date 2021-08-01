import data from './data/ghibli/ghibli.js';

const FechasPeliculas = data.films; 

export const filterFechas = FechasPeliculas.filter(date => {

if (date.release_date > 2000) {
  return true 
} else {
  return false
}
});

//console.table(filterFechas);


export const anotherExample = () => {
  return 'OMG';
};
