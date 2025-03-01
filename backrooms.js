// Função para mostrar a descrição do nível selecionado
function showLevelDescription(description) {
  document.getElementById('levelDescription').innerHTML = `<p>${description}</p>`;
}

// Lógica para os botões de nível
document.getElementById('level0').addEventListener('click', () => {
  document.querySelector('.level-buttons').style.display = 'none';
  document.getElementById('levelDescription').style.display = 'none';
  document.getElementById('labirintoAmarelo').style.display = 'block';
});

document.getElementById('level666').addEventListener('click', () => {
  document.querySelector('.level-buttons').style.display = 'none';
  document.getElementById('levelDescription').style.display = 'none';
  document.getElementById('baldisBasics').style.display = 'block';
});

// Outros níveis
document.getElementById('level1').addEventListener('click', () => {
  showLevelDescription("Level 1 - O Nível Escuro: Corredores escuros e áreas abandonadas. Cuidado com as criaturas invisíveis que podem atacá-lo.");
});

document.getElementById('level2').addEventListener('click', () => {
  showLevelDescription("Level 2 - O Nível Industrial: Um ambiente de fábricas antigas, barulho constante e máquinas perigosas.");
});

document.getElementById('levelPeppa').addEventListener('click', () => {
  showLevelDescription("Level Peppa Pig: Um lugar distorcido onde as figuras da Peppa Pig se tornam ameaçadoras. O cenário parece alegre, mas esconde um mal por trás.");
});

document.getElementById('level188').addEventListener('click', () => {
  showLevelDescription("Level 188 - Os Prédios: Prédios altos e corredores sem fim. As escadas e elevadores não funcionam, e você pode se perder facilmente.");
});

document.getElementById('levelFun').addEventListener('click', () => {
  showLevelDescription("Level Fun: Um parque de diversões abandonado e assombrado. Atrações que se tornam mortais.");
});

document.getElementById('levelSupermercado').addEventListener('click', () => {
  showLevelDescription("Level Supermercado Gigante: Um supermercado infinito. Os corredores nunca acabam, e você se perde facilmente. Não há prateleiras, apenas estantes vazias e caixas de produtos desconhecidos.");
});

document.getElementById('levelCidade').addEventListener('click', () => {
  showLevelDescription("Level Cidade: Uma cidade abandonada, onde as ruas são intermináveis e os prédios estão em ruínas. Algumas lojas ainda estão abertas, mas não há ninguém por perto.");
});

// Funções do bebê
let babyPeeInterval;
let babyPoopInterval;

function startBabyActions() {
  document.getElementById('babyStatus').innerText = "O bebê não fez xixi ou cocô ainda.";
}

function stopBabyActions() {
  clearInterval(babyPeeInterval);
  clearInterval(babyPoopInterval);
}

document.getElementById('babyPee').addEventListener('click', () => {
  document.getElementById('babyStatus').innerText = "O bebê fez xixi 💧";
  alert("😭 O bebê fez xixi!");
});

document.getElementById('babyPoop').addEventListener('click', () => {
  document.getElementById('babyStatus').innerText = "O bebê fez cocô 💩";
  alert("😡 O bebê fez cocô!");
});

document.getElementById('changeDiaper').addEventListener('click', () => {
  stopBabyActions();
  document.getElementById('babyStatus').innerText = "A fralda foi trocada. O bebê está limpinho!";
  alert("A fralda foi trocada!");
});

// Comandos de texto
document.getElementById('executeCommand').addEventListener('click', () => {
  const command = document.getElementById('commandInput').value.trim().toLowerCase();
  
  if (command === '/baby') {
    document.getElementById('baby').style.display = 'block';
    startBabyActions();
  } else if (command === '/delete') {
    document.getElementById('baby').style.display = 'none';
    stopBabyActions();
    alert("O bebê foi deletado.");
  } else if (command === '/remove') {
    // Remove os botões e o nível de descrição
    document.getElementById('levelButtons').style.display = 'none';
    document.getElementById('levelDescription').style.display = 'none';
    alert("Botões e descrição removidos.");
  } else if (command === '/add') {
    // Adiciona os botões de volta
    document.getElementById('levelButtons').style.display = 'block';
    document.getElementById('levelDescription').style.display = 'block';
    alert("Botões e descrição adicionados de volta.");
  } else {
    alert("Comando desconhecido.");
  }

  document.getElementById('commandInput').value = ''; // Limpa o campo de comando
});
