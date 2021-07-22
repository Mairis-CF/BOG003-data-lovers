import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';


console.log(example, data);

const peliculas = data.films;
console.table (peliculas);

function filtrarNombres (title) {
    let titulosPeliculas = ''; 
    titulosPeliculas = data.films.filter(movie => movie.director === title);

   // titulosPeliculas = data.films.filter(movie => movie.title === title);
    console.log(typeof(titulosPeliculas));
    console.table(titulosPeliculas);
    return titulosPeliculas[3].people.map(personaje => personaje.name);

}
console.log(filtrarNombres("Hayao Miyazaki"));

const btn = document.querySelector('#btnNav');
btn.addEventListener ('click', () => {
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
)