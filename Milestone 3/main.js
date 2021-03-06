const app = new Vue({
    el: '#root',

    data: {
        contattoCorrente: 0,
        
        /* dati ptofili chat */
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luis',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
    /* /fine contats */    
    lunghezzaChat: 0,
    newMsg: '',
    }, //  fine data

    methods: {
        activeContact(index) {
            return this.contattoCorrente = index;
        },
        
        pushNewMsg(el) {
            this.contacts[this.contattoCorrente].messages.push({date: dayjs().format("DD/MM/YYYY H:mm:ss"), text: el, status: 'sent'});
            this.newMsg = '';
        },

        rispostaBot() {
            setTimeout(() => {
                this.contacts[this.contattoCorrente].messages.push({date: dayjs().format("DD/MM/YYYY H:mm:ss"), text: 'ok!', status: 'received'});
            }, 1000)
        }
    },


    

})

//milestone 1 ???
//Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
// Milestone 2 
//Visualizzazione dimanica delle chat
// Milestone 3
//???Aggiunta di un messaggio: l???utente scrive un testonella parte bassa e digitando???enter??? il testo viene aggiunto al thread sopra, comemessaggio verde
//???Risposta dall???interlocutore:ad ogni inserimento diun messaggio, l???utente ricever??un ???ok??? come risposta, che apparir?? dopo 1 secondo.