//  Chiedere all'utente il nome poi il cognome e infine il colore preferito

var nomeUtente=prompt("Inserisci il tuo nome");
var cognomeUtente=prompt("Inserisci il tuo cognome");
var coloreUtente=prompt("Inserisci il tuo colore preferito");

console.log(nomeUtente, cognomeUtente, coloreUtente);
document.getElementById('nomeserio').innerHTML=(nomeUtente + cognomeUtente + coloreUtente + "123");
