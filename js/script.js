let userName = prompt("Digite seu Nome: ");
let userWeight = prompt("Digite seu seu peso(Kg): ");
let userAltura = prompt("Digite sua altura, com os decimais: ");

//ou Math.pow(userAltura, 2)
let imc = (userWeight / (userAltura ** 2)).toFixed(1) //uma casa decimal
let classification = undefined;
let obesity = undefined;

if(imc < 18.5){
    classification = "Magreza";
    obesity = 0;
} else if(imc <= 24.9){
    classification = "Normal";
    obesity = 0;
} else if(imc <= 29.9){
    classification = "Sobrepeso";
    obesity = 1;
} else if(imc <= 39.9){
    classification = "Obesidade";
    obesity = 2;
} else{
    classification = "Obesidade Grave";
    obesity = 3;
}

let show = alert(`Olá ${userName}!
Seu IMC foi igual a: ${imc}`);

let text = `<ul>
<li>Your Name: ${userName}</li>
<li>Your Weight: ${userWeight}</li>
<li>Your Altura: ${userAltura}</li>
</ul>
<h3>Your IMC = ${imc}</h3>
<h2>Interpretação: De acordo com seu IMC, a sua classificação é "${classification}" e seu grau de obesidade é "${obesity}".</h2>`;

const conteudo = window.document.querySelector('#imc');
conteudo.innerHTML = text;

let cont = 0
function tema(){
    let but = window.document.querySelector("#col")
    let tela = window.document.body;
    if(cont % 2 == 0){
        tela.style.backgroundColor = 'white';
        tela.style.color = 'black';
        but.textContent = 'Dark';
    } else{ 
        tela.style.backgroundColor = 'black';
        tela.style.color = 'white';
        but.textContent = 'Ligth';
    }
    cont ++;
}