/* Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
BONUS:
Aggiungere alla pagina un’immagine, presa anch’essa da un data (in data avrò l'src). */

var app = new Vue(
    {
        el: '#root',
        data: {
            title: 'vue hello!',
            image: "https://unsplash.it/600/400?image=534"
        }
    }
);