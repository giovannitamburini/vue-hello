/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

const { createApp } = Vue

createApp({

  data() {

    return {

        //   messageTitle: 'questo è il titolo da mostrare'
        messageTitle: '',
        imageUrl: 'https://i.pinimg.com/736x/c2/86/2e/c2862e9a2757aabd959d181224ce9339.jpg',
    }
  }
}).mount('#app')