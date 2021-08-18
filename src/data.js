//import data from './data/ghibli/ghibli.js';
//const productions = data.films;
//console.log(productions)

//función que filtra el array que contiene la data general para crear otro array de menor longitud que muestra las peliculas más recientes. 

export function filterDataNews(productions) {
  let filteredArray = productions.filter(movie => {
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

export function filterDataOlder(productions) {
  let filterOlder = productions.filter(movie => {
    let filteredOld_movies = movie.release_date;

    if (filteredOld_movies < 2000) { /* si las fechas de lanzamiento son menores al 2000 entonces retornar un boolean que de ser true
                                      las peliculas cuyas fechas de lanzamiento cumplan la condición serán incluidas en el nuevo array */
      return true
    } else {
      return false
    }
  })
  return filterOlder

}

//funcion sort de A-Z


export function sortAZ(productions) {
  return productions.sort((a, b) => (a.title > b.title ? 1 : -1));
}


export function sortZA(productions) {
  return productions.sort((a, b) => (b.title > a.title ? 1 : -1));
}

 //funcion para porcentaje de  score> 90 puntos
export function scoreHigh(productions) {
  let average = productions.filter(movie =>parseInt(movie.rt_score)>= 90);
  //console.table(average) 
  
  let prom1 = average.length;
  let prom2 = productions.length
  let percentaje = (prom1 / prom2) * 100;
  return percentaje

}
//console.log(scoreHigh())