/*
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
*/


//ask user for his surname
var userSurname = prompt("per favore inserisca il suo cognome");
var surnamesList = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
var sortedSurnameList = [];
// forced the input with capital first letter to maintain the code working
var userSurnameCapitalLetter;
userSurnameCapitalLetter = userSurname.charAt(0).toUpperCase() + userSurname.slice(1).toLowerCase();
//push it in an array
surnamesList.push(userSurnameCapitalLetter);
console.log(surnamesList);
// print surname list alphabetically
sortedSurnameList.push(...surnamesList);
sortedSurnameList.sort();
console.log(sortedSurnameList);
//creating li items in ul
for (var i = 0; i < sortedSurnameList.length; i++)
{
    var ul = document.getElementById("surnameList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(sortedSurnameList[i]));
    ul.appendChild(li)
}
// print "human" position of the list where user is put
console.log(sortedSurnameList.indexOf(userSurnameCapitalLetter) + 1);
document.getElementById("surnamePosition").innerHTML = "Your surname Position is" + " " + (sortedSurnameList.indexOf(userSurnameCapitalLetter) + 1);