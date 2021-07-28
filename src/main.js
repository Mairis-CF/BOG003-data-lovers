
import data from './data/ghibli/ghibli.js';

const peliculas = data.films;
console.table(peliculas);


/*ejemplo de filter y map

const nombres = function filtrarNombres (title) {
    let titulosPeliculas = ''; 
    titulosPeliculas = data.films.filter(movie => movie.poster === title);

   // titulosPeliculas = data.films.filter(movie => movie.title === title);
    console.log(typeof(titulosPeliculas));
    console.table(titulosPeliculas);
    return titulosPeliculas; //.poster.map(personaje => personaje.name);

}
*/
//console.log(filtrarNombres("Hayao Miyazaki"));


//función para generar tarjetas de peliculas dinamicamente
//el parametro peliculas se encuentra anteriormente como constante

const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();


const mostrarcard = peliculas => {
    peliculas.forEach(pelicula => {
        templateCard.querySelector('h5').textContent = pelicula.title
        templateCard.querySelector('img').setAttribute('src', pelicula.poster)
        const clone = templateCard.cloneNode(true)

        fragment.appendChild(clone)
    });
    items.appendChild(fragment);
};
mostrarcard(peliculas);


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