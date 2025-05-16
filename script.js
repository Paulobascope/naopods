// Função para virar o card ao clicar
function flipCard(event, cardElement) {
  event.stopPropagation();
  closeAllCardsExcept(cardElement);
  cardElement.classList.toggle('flipped');
}

// Fecha todos os cards, exceto o clicado
function closeAllCardsExcept(exceptCard) {
  const cards = document.querySelectorAll('.product-card.flipped');
  cards.forEach(card => {
    if (card !== exceptCard) {
      card.classList.remove('flipped');
    }
  });
}

// Fecha os cards ao clicar fora
document.addEventListener('click', function(event) {
  const isCard = event.target.closest('.product-card');
  if (!isCard) {
    closeAllCardsExcept(null);
  }
});

// Efeito da introdução com vídeo e som
window.addEventListener('load', () => {
  const overlay = document.getElementById('smoke-overlay');
  const audio = document.getElementById('intro-audio');

  setTimeout(() => {
    overlay.style.opacity = '0';
    setTimeout(() => overlay.style.display = 'none', 1000);
  }, 3000);

  // Tenta tocar o áudio com volume reduzido
  audio.volume = 0.3;
  audio.play().catch(() => {
    console.log("Áudio bloqueado até interação.");
  });
});

// Filtro de produtos por categoria
function filterProducts(category) {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
