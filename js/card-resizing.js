
function setCardHeight() {
    const cardFront = document.querySelector('.card-front');
    const cardContainer = document.querySelector('.card-container');
    const cardFrontHeight = cardFront.offsetHeight;
    console.log('Card height: ' + cardFrontHeight + 'px');
    cardContainer.querySelectorAll('.card').forEach(card => {
      card.style.height = cardFrontHeight + 'px';
    });
  }
  
function initializeCardHeight() {
    setCardHeight();
    window.addEventListener('resize', setCardHeight);
  }
  
document.addEventListener('DOMContentLoaded', initializeCardHeight);

  

//   document.addEventListener('DOMContentLoaded', function() {
//     const cardFront = document.querySelector('.card-front');
//     const card = cardContainer.querySelector('.card');  


//     function setCardHeight() {
//     const cardFrontHeight = cardFront.offsetHeight;
//     console.log('Card height: ' + cardFrontHeight + 'px');

//     cardContainer.querySelectorAll('.card').forEach(card => {
//         card.style.height = cardFrontHeight + 'px';
//       });
//   }
  
//   // Initial height calculation
//   setCardHeight();
  
//   // Recalculate height when the window is resized
//   window.addEventListener('resize', setCardHeight);
// });


  
  
  
  