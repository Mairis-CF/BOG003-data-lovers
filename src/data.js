import data from './data/ghibli/ghibli.js';
const Filter_dates = data.films;
console.table(Filter_dates);
//función que filtra el array que contiene la data general para crear otro array de menor longitud que muestra las peliculas más recientes. 

export function filterDataNews() {
 let filteredArray = Filter_dates.filter(movie => {
    let filteredNew_movies = movie.release_date;

    if (filteredNew_movies > 2000) { /* si las fechas de lanzamiento son mayores al 2000 entonces retornar un boolean que de ser true
                                      las peliculas cuyas fechas de lanzamiento cumplan la condición serán incluidas en el nuevo array */
      return true
    } else {
      return false
    }
  })
  return filteredArray //retorna la variable que guarda el arreglo filtrado
}




/*aqui abajo comienza la función filterDataOlder()  donde se filtran las peliculas cuyas fechas 
de lanzamiento sean menores al 2000
y se guardan en un nuevo array */



export const sortZA = () => {

  return 'OMG';
};
