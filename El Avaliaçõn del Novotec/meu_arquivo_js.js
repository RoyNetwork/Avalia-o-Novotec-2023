/* Código fornecido pelo professor */

const checkButton = document.getElementById('checkButton');
const resultMessage = document.getElementById('resultMessage');

function calculateAge() {
  const day = parseInt(document.getElementById('dayInput').value);
  const month = parseInt(document.getElementById('monthInput').value);
  const year = parseInt(document.getElementById('yearInput').value);
  const name = document.getElementById('nameInput').value;

  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  const ageInMilliseconds = today - birthDate;
  const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

  if (isNaN(ageInYears)) {
    resultMessage.textContent = 'Por favor, insira uma data válida.';
  } else {
    let message = `Olá,❀${name}❀!<br>Você tem ${Math.floor(ageInYears)} anos e é `;
    if (ageInYears >= 18) {
      message += 'maior de idade!♞';
    } else {
      message += 'menor de idade.♟';
    }
    resultMessage.innerHTML = message; // Usando innerHTML para aceitar a quebra de linha <br>
  }
}

checkButton.addEventListener('click', calculateAge);





/*Função que guarda o nome digitado em uma variável e usa na frase de "Bem-vindo". */

function exibirFrasePersonalizada() {
    var nome = prompt("Digite seu nome:");
    if (nome !== null && nome !== "") {
        var frase = "Olá, " + nome + "! Bem-vindo(a) à nossa página! Digite sua data de nascimento e nome abaixo para proseguir.";
        alert(frase);
    } else {
        alert("Você não digitou um nome válido.");
    }
}





 // Aqui faz  resetar os campos de entrada e a mensagem de resultado.
function resetInformation() {

    document.getElementById('dayInput').value = '';
    document.getElementById('monthInput').value = '';
    document.getElementById('yearInput').value = '';
    document.getElementById('nameInput').value = '';
    resultMessage.textContent = '';
  }
  
  checkButton.addEventListener('click', calculateAge);
  resetButton.addEventListener('click', resetInformation); // Adicionando o evento de clique ao botão de reset


