const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      
      card.classList.add("turned")

      if (!memoryGame.pickedCards.length) {
        memoryGame.pickedCards.push(card)
      }
      else if (memoryGame.pickedCards.length === 1) {
        memoryGame.pickedCards.push(card)
                      
        if (memoryGame.checkIfPair(memoryGame.pickedCards[0].dataset.cardName, memoryGame.pickedCards[1].dataset.cardName)) {
          memoryGame.pickedCards[0].classList.add("block")
          memoryGame.pickedCards[1].classList.add("block")
          memoryGame.pickedCards = []
        }
        else {
          memoryGame.pickedCards[0].classList.remove("turned")
          memoryGame.pickedCards[1].classList.remove("turned")
          memoryGame.pickedCards = []
        }
      }

      const pairsClicked = document.querySelector("#pairs-clicked")
      pairsClicked.innerText = memoryGame.pairsClicked

      const pairsGuessed = document.querySelector("#pairs-guessed")
      pairsGuessed.innerText = memoryGame.pairsGuessed

      if (memoryGame.checkIfFinished()) {
        const youWin = document.querySelector("#you-win")
        youWin.classList.remove("hiddenwin")
      }
    })

  })
})
