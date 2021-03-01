//chiedo il numero di km che l'utente vuole fare
var km = prompt("quanti kilometri vuoi fare?", 10);
if(isNaN(km)){
	//richiedo il numero nel caso abbia sbagliato a scrivere, per farlo bene sarebbe meglio usare un while ma mi sono limitato al if
	km = prompt("questo non è un numero, reinserisci quanti kilometri vuoi fare", 10);
}
//chiedo l'eta del utente
var eta = prompt("quanti anni hai?", 20);
if(isNaN(eta)){
	//richiedo il numero nel caso abbia sbagliato a scrivere, per farlo bene sarebbe meglio usare un while ma mi sono limitato al if
	eta = prompt("questo non è un numero, reinserisci quanti anni hai", 20);
}
console.log(km, eta);

//faccio il calcolo del prezzo pieno del biglietto
var fullPrice = km * 0.21;
console.log(fullPrice);
//faccio degli if ed else per stabilire quale sconto applicare all'utente
if(eta < 18){
	//per fare lo sconto del 20% ho fatto *80/100
	lowPrice = price = (fullPrice * 80) / 100;
}
else if(eta > 65){
	//per fare lo sconto del 40% ho fatto *60/100
	lowestPrice = price = (fullPrice * 60) / 100;
}
else{
	//per il biglietto a prezzo pieno
	price = fullPrice;
}
console.log(price);
//scrivo il prezzo del biglietto sul html
document.getElementById("price").innerHTML = price;
