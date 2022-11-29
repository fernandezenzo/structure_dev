/*let nom = "Fernandez";
let prenom = "Enzo";
let name = nom + prenom;
let age = 22;
alert("Je m\'appel" + name +", et j\'avais" + age + "en l\'an 2000");
*/




/*
if(age >= 6 && age <= 7){
    alert("poussin");
}else if(age >= 8 && age <=9){
    alert("Pupille");                   //A RETENIR//!!
}else if(age >= 10 && age <=11){
    alert("Minime");
}else if(age >= 12 && age <= 17){
    alert("Cadet");
}else{
    alert("erreur");
}


let nombre = prompt ("Combien d'enfants?");

for (let i=0 ; i<=nombre; i++){
    let age = prompt ("Quel est l'age de l'enfant?");
    if(age >= 6 && age <= 7){
        alert("poussin");                           //A RETENIR//!!
    }else if(age >= 8 && age <=9){
        alert("Pupille");
    }else if(age >= 10 && age <=11){
        alert("Minime");
    }else if(age >= 12 && age <= 17){
        alert("Cadet");
    }else{
        alert("erreur");
    }
}
*/
/*
function Exo2(){
    let nombre = prompt ("Combien d'enfants?");

    for (let i=0 ; i<=nombre; i++){
        let age = prompt ("Quel est l'age de l'enfant?");
        if(age >= 6 && age <= 7){
            alert("poussin");                   //A RETENIR//!!
        }else if(age >= 8 && age <=9){
            alert("Pupille");
        }else if(age >= 10 && age <=11){
            alert("Minime");
        }else if(age >= 12 && age <= 17){
            alert("Cadet");
        }else{
            alert("erreur");
        }
    }
}

function Exo3 (){
    nombre = getChild();
    for(let i=0 ; i<nombre; i++){
        getCategorie();
    }
    
}
    

function getChild(){
    let nombre = prompt ("Combien d'enfants?");
    return nombre;
}
function getCategorie(){
    let age = prompt ("Quel est l'age de l'enfant?");
    if(age >= 6 && age <= 7){
        alert("poussin");                           //A RETENIR//!!
    }else if(age >= 8 && age <=9){
        alert("Pupille");
    }else if(age >= 10 && age <=11){
        alert("Minime");
    }else if(age >= 12 && age <= 17){
        alert("Cadet");
    
}
}
Exo3();


function calcul(){

    function nombre(){
        let nombre = parseInt(prompt('entrez nombre'));
        return nombre;
    }

    let a = nombre();
    let b = nombre();
    let tab = [];

    function somme(a,b){
        return a + b;                           //A RETENIR//!!
    }
    
    function mutliplication(a,b){
        return a * b;
    }
    function moyenne(a,b){
        return (a + b) /2;
    }

    function modul(a,b){
        return a%b;
    }


    tab.push("La somme de "+a+" plus "+b+" est de : "+somme(a,b));
    tab.push("\n"+"Le produit est de : "+mutliplication(a,b));
    tab.push("\n"+"La moyenne est de : "+moyenne(a,b));
    tab.push("\n"+"Le reste est de : "+modul(a,b));
    alert(tab);
}


calcul();
*/
/*
function testString (chain1,chain2){
    if(chain1.includes(chain2) || chain2.includes(chain1)){
        return true;
    }else{
        return false;
    }
}


let chain1 = prompt("Mot 1");
let chain2 = prompt("Mot 2");
alert(testString(chain1,chain2));

function func() {

    let nombre = (Math.round(Math.random() * 1000 - 500) / 10);
    console.log(nombre);

    let alea = prompt('choisi un nombre');

    while (alea != nombre) {
        if (alea > nombre) {
            alert("trop grand!");
        } else if (alea < nombre) {
            alert("trop petit!");
        }
        alea = prompt('choisi un nombre');
    }
    alert("gagné!");
}

func();

let semaine = ['lun','mra','mer','jeu','ven','sam'];
semaine.pop();
semaine.push('dim');
semaine[1] = 'mar';
document.write(semaine.length);
document.write(semaine[2]);
console.log(semaine);


function exoBizarre() {

    let tab = [];

    let util = prompt("veuillez écrire un truc")
    while (util != 0) {
        util = prompt("veuillez écrire un truc")

        if (util != 0) {
            tab.push(util);
        } else if (util == 0) {
            alert(tab[(Math.round(Math.random() * tab.length))]);
        }
        console.log(tab);
    }

}
exoBizarre();
let windsize = 'width = 700, height = 700';
function question(){
    if(confirm("voulez vous ouvrir une nouvelle fenêtre?")){
        fenetre = window.open('https://www.adrar-formation.com/',+windsize);
    }
}
question();
*/
/*
function coordonne(pos){
    let crdn = pos.coords;
    let latitude = crdn.latitude - 48.85;
    let longitude = crdn.longitude - 2.29;
    

    console.log('Latitude:' + latitude.toFixed(2)
    ,'Longitude : ' + longitude.toFixed(2));

}
navigator.geolocation.getCurrentPosition(coordonne);

function stock(){
    let stockage = [location.host,location.port,location.protocole,href];
    alert(stockage);
    if(confirm("voulez vous ouvrir une nouvelle fenêtre?")){
        fenetre = window.open('https://www.adrar-formation.com/',+windsize);
    }
}
stock(); */



document.querySelector('h1').outerHTML = '<h1> Bienvenue sur mon super site!</h1>';
document.querySelector('p').outerHTML = '<h2> J\'adore le developpement </h2>';
document.getElementById('firstP').textContent = 'Le HTML, le CSS';
//.innerHTML = '<p>Et maintenant le JS</p>';
document.querySelector('title').innerHTML = 'dev';

let p = document.getElementsByClassName('p');
for (valeur of p){
    valeur.textContent = 'Et maintenant le JS';
}
console.log('ok');