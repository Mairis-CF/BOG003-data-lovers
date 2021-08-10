
import data from './data/ghibli/ghibli.js';
import { filterDataNews, filterDataOlder } from './data.js';
import { sortAZ,orderZA  } from './data.js';
//console.table(filterCharacter())
//console.table(filterDataOlder()) 

const peliculas = data.films;




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


//función para generar tarjetas de peliculas dinamicamente
//el parametro peliculas se encuentra anteriormente como constante

const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();


const mostrarcard = peliculas => {
	peliculas.forEach(pelicula => {
		templateCard.querySelector('h4').textContent = pelicula.title
		templateCard.querySelector('h6').textContent = pelicula.release_date
		templateCard.querySelector('h5').textContent = pelicula.director
		templateCard.querySelector('img').setAttribute('src', pelicula.poster)
		const clone = templateCard.cloneNode(true)

		fragment.appendChild(clone)
	});
	items.appendChild(fragment);
};
mostrarcard(peliculas);

//En el botón filter

const Filter = document.getElementById('BtnFilter')

Filter.addEventListener('change', () => {
	if (Filter.value === 'news') {
		clearItems()
		mostrarcard(filterDataNews())
	} else if (Filter.value === 'olders') {
		clearItems()
		mostrarcard(filterDataOlder())
	} else if (Filter.value === 'all') {
		clearItems()
		mostrarcard(peliculas)
	}
}
)


//En el botón sort

const sort = document.getElementById('BtnSort');

sort.addEventListener('change', () => {
	if (sort.value === 'AZ') {
		clearItems()
		mostrarcard(sortAZ)
		console.log("advEnenlistener", sortAZ)
	} else if (sort.value === 'ZA') {
		clearItems()
		mostrarcard(orderZA)
		console.log("advEnenlistener", orderZA)
	}
})

//función que limpia el contenedor de tarjetas

function clearItems() {
	items.innerHTML = ''
}

