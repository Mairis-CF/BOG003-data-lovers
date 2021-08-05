
import data from './data/ghibli/ghibli.js';
import { filterDataNews } from './data.js';
console.table(filterDataNews())
const peliculas = data.films;



/*
const nombres = function filtrarNombres(title) {
	let titulosPeliculas = ''; 
	//titulosPeliculas = data.films.filter(movie => movie.poster === title);

  titulosPeliculas = data.films.filter(movie => movie.title === title);
   
	console.table(titulosPeliculas);
	return titulosPeliculas; //.poster.map(personaje => personaje.name);


}; 

*/

//función para generar tarjetas de peliculas dinamicamente
//el parametro peliculas se encuentra anteriormente como constante

const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();


const mostrarcard = peliculas => {
	peliculas.forEach(pelicula => {
		templateCard.querySelector('h5').textContent = pelicula.title
		templateCard.querySelector('h6').textContent = pelicula.release_date
		templateCard.querySelector('img').setAttribute('src', pelicula.poster)
		const clone = templateCard.cloneNode(true)

		fragment.appendChild(clone)
	});
	items.appendChild(fragment);
};
mostrarcard(peliculas);

/*
const btnFilter = document.getElementById('btn_Filter');
btnFilter.addEventListener('click' , () => {
	const peliculas2 = peliculas.slice(0,5)
	mostrarcard(peliculas2);
}
)
*/


//ventana modal desplegada  automaticamente al cargar la página de inicio
//la ventana se muestra solo luego de que el body este cargado pero esto podria hacerse retirando el atributo 'hide' de su clase css
document.addEventListener('DOMContentLoaded', function mostrarModal() {
	let modal = document.getElementById('tvesModal');
	let btnClose = document.getElementsByClassName('close')[0];
	let body = document.getElementsByTagName('body')[0];

	body.onload = function () {
		modal.style.display = 'block';

		body.style.position = 'absolute';
		body.style.height = '100%';
		body.style.overflow = 'hidden';
	}

	btnClose.onclick = function () {
		modal.style.display = 'none';

		body.style.position = 'inherit';
		body.style.height = 'auto';
		body.style.overflow = 'visible';
	}

	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = 'none';

			body.style.position = 'inherit';
			body.style.height = 'auto';
			body.style.overflow = 'visible';
		}
	}
})

