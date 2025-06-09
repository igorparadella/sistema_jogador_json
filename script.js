
fetch('missoes.json')
  .then(response => response.json())
  .then(missoes => {
    const lista = document.getElementById('lista-missoes');
    missoes.forEach(missao => {
      const item = document.createElement('li');
      item.textContent = `${missao.titulo} (EXP: ${missao.exp})`;
      lista.appendChild(item);
    });
  })
  .catch(error => {
    console.error('Erro ao carregar as missões:', error);
  });
