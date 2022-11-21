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