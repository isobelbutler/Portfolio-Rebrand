cardContainer.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', (e) => {
      card.classList.toggle('flipCard');
    });
  });