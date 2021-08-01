
import data from './data/ghibli/ghibli.js';
import { filterFechas } from './data.js';
console.table(filterFechas);
const peliculas = data.films;
console.table(peliculas);
 
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

//botón de filtrado desplegable
//Dar click en el elemento desplegable

function toggleClass(elem,className){
	if (elem.className.indexOf(className) !== -1){
		elem.className = elem.className.replace(className,'');
	} 
	else{
		elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
	}
	
	return elem;
}

function toggleDisplay(elem){
	const curDisplayStyle = elem.style.display;			
				
	if (curDisplayStyle === 'none' || curDisplayStyle === ''){
		elem.style.display = 'block';
	}
	else{
		elem.style.display = 'none';
	}
}


function toggleMenuDisplay(e){
	const dropdown = e.currentTarget.parentNode;
	const menu = dropdown.querySelector('.menu');

	toggleClass(menu,'hide');
	
} /*el menú desplegable se abre al darle click y se cierra de la misma forma
 Esto sucede vinculando toggleMenuDisplay al Listener del evento clic en el elemento desplegable. 
 Esta función alterna la visibilidad de su elemento menu haciendo uso de las funciones toggleDisplay y toggleClass.*/


/*seleccionar una opción del botón desplegable*/

function handleOptionSelected(e){
	toggleClass(e.target.parentNode, 'hide');			

	const id = e.target.id;
	const newValue = e.target.textContent + ' ';
	const titleElem = document.querySelector('.dropdown .title');

	titleElem.textContent = newValue;
	
	//Activa evento personalizado
	document.querySelector('.dropdown .title').dispatchEvent(new Event('change'));
}//se cambia el nombre del titulo del botón por el nombre del elemento desplegable elegido

const dropdownTitle = document.querySelector('.dropdown .title');
const dropdownOptions = document.querySelectorAll('.dropdown .option');

//vincula listeners a estos elementos
dropdownTitle.addEventListener('click', toggleMenuDisplay);
dropdownOptions.forEach(option => option.addEventListener('click',handleOptionSelected));





//ventana modal desplegada del boton 'sobre el estudio' en index.html

const btn = document.getElementById("btnNav");
console.log(btn);
btn.addEventListener('click', () => {
    console.log('hola');
    if (document.getElementById('btnNav')) {
        let modal = document.getElementById('VerModal');
        let span = document.getElementsByClassName('close')[0];
        let body = document.getElementsByTagName('body')[0];

        btn.onclick = function() {
            modal.style.display = 'block';

            body.style.position = 'static';
            body.style.height = '100%';
            body.style.overflow = 'hidden';
        }

        span.onclick = function() {
            modal.style.display = 'none';

            body.style.position = 'inherit';
            body.style.height = 'auto';
            body.style.overflow = 'visible';

        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';

                body.style.position = 'inherit';
                body.style.height = 'auto';
                body.style.overflow = 'visible';
            }
        } 
    }
}
);