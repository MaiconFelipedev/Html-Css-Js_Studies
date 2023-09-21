let userName = prompt("Digite seu Nome: ");
let userWeight = Number(prompt("Digite seu seu peso(Kg): "));
let userAltura = Number(prompt("Digite sua altura, com os decimais: "));
let vision = window.document.body;
vision.style.display = 'block';

let imc = undefined;
let classification = undefined;
let obesity = undefined;

verific();

function verific(){
    if(Number.isNaN(userAltura) || userAltura == 0){ //expressão booleana == true, abertura e fechamento de chaves --> corpo em JS
        alert("The Altura needs be a number");
        userAltura = Number(prompt("Digite sua altura, com os decimais: "));
        verific();
    } else { //se for um number calculará o IMC normalmente
        //ou Math.pow(userAltura, 2)
        imc = (userWeight / (userAltura ** 2)).toFixed(1) //uma casa decimal
    }
}

// ifs aninhados
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

function capturarResultado(){
    const opcoes = document.querySelectorAll('input[name="opcoes"]');
    let escolha = undefined;
    for(const opcao of opcoes){
        if(opcao.checked){
            escolha = opcao.value;
            break;
        }
    }
    return escolha;
}

function calculate(){
    let operation = capturarResultado();
    let result = undefined;
    let input1 = Number(document.querySelector('#n1').value);
    let input2 = Number(document.querySelector('#n2').value);
    let resultado = document.querySelector("#final")
    switch(operation){
        case '+':
            result = input1 + input2;
            break;
        case '-':
            result = input1 - input2;
            break;
        case '*':
            result = input1 * input2;
            break;
        case '/':
            result = input1 / input2;
            break;
        default:
            result = "Operador inválido";
            break;

    }
    resultado.innerHTML = result;
}