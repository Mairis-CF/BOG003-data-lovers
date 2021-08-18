
import data from './data/ghibli/ghibli.js';

import {
	estimateScores,
	filterDataNews,
	filterDataOlder,
	sortAZ,
	sortZA,

} from './data.js';



const peliculas = data.films;

//función que limpia el contenedor de la data
function clearItems() {
	items.innerHTML = ''
}


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
		templateCard.querySelector('h3').textContent = pelicula.title
		templateCard.querySelector('h6').textContent = pelicula.release_date
		templateCard.querySelector('h5').textContent = pelicula.director
		templateCard.querySelector('img').setAttribute('src', pelicula.poster)
		templateCard.querySelector('h4').textContent = 'Score: ' + pelicula.rt_score
		const clone = templateCard.cloneNode(true)

		fragment.appendChild(clone)
	});
	items.appendChild(fragment);
};
mostrarcard(peliculas);

//En el botón filter

const filter = document.getElementById('btnFilter')

filter.addEventListener('change', () => {
	if (filter.value === 'news') {
		clearItems()
		mostrarcard(filterDataNews(peliculas))
	} else if (filter.value === 'olders') {
		clearItems()
		mostrarcard(filterDataOlder(peliculas))
	} else if (filter.value === 'all') {
		clearItems()
		mostrarcard(peliculas)
	}
}
)

//En el botón sort

const sort = document.getElementById('btnSort')

sort.addEventListener('change', () => {
	if (sort.value === 'AZ') {
		clearItems()
		mostrarcard(sortAZ(peliculas))
	} else if (sort.value === 'ZA') {
		clearItems()
		mostrarcard(sortZA(peliculas))
	}
})

//la sección de resultados estadisticos dentro de la sección estadisticas, se muestra con este botón
const btnScore = document.getElementById('btnScores');
const sectionScores = document.getElementById('resultScore');

btnScore.addEventListener('click', () => {
	sectionScores.style.display = 'block'
})

const btnCloseScore = document.getElementById('btnCloseScore');

btnCloseScore.addEventListener('click', () => {
	sectionScores.style.display = 'none';
})

//mostrando cifras estadisticas 

const resultScore = estimateScores(peliculas);
let highText = document.getElementById('highResult');
let mediumText = document.getElementById('mediumResult');

highText.innerHTML = 'De ' + (peliculas.length) + ' peliculas de Studio Ghibli recopiladas en esta página alrededor del ' + (resultScore.high) + ' % tienen una puntuación mayor a 90 puntos.';
mediumText.innerHTML = 'De ' + (peliculas.length) + ' peliculas de Studio Ghibli recopiladas en esta página alrededor del ' + (resultScore.medium) + ' % tienen una puntuación comprendida entre 50 y 90 puntos.';


//menú lateral

let showMenu = document.getElementById('show-menu');
let menu = document.getElementById('nav');
let closeMenu = document.getElementsByClassName('close-nav')[0];

showMenu.addEventListener('click', () => {

	menu.style.display = 'block';

})

//cerrando menu lateral

closeMenu.addEventListener('click', () => {
	menu.style.display = 'none';
})

//Sección estadisticas

let sectionStadistics = document.getElementById('stadistic-section');
let showStadistics = document.getElementById('stadistics');

showStadistics.addEventListener('click', () => {
	sectionStadistics.style.display = 'block';
	clearItems(peliculas)

});

//botón inicio
let btnHome = document.getElementById('btn-Home');

btnHome.addEventListener('click', () => {
	sectionStadistics.style.display = 'none';
	clearItems(peliculas)
	mostrarcard(peliculas)
})
