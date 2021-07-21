import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

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