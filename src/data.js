
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

//función que calcula porcentaje de acuerdo al raiting score de cada pelicula

export function estimateScores(productions) {
  let score_medium = productions.filter(movie => movie.rt_score < 90);
  let score_high = productions.filter(movie => movie.rt_score > 90);
  let total = parseInt(productions.length);
  let highMovies = (score_high.length * 100) / total;
  let mediumMovies = (score_medium.length * 100) / total;

  let averages = {
    high: highMovies,
    medium: mediumMovies
  }

  return averages

}

