

// Keep track visually of how many ‘turns’ a player has had
// Visually display when all the pairs are revealed and show the number of ‘turns’ taken
// Visually display timer counting up starting at 0 when game begun
// Visually display total time taken when game is complete


let score = 0

const cardArray = [
    {
        name: 'one',
        img: 'assets/one.png'
    },
    {
        name: 'one',
        img: 'assets/one.png'
    },
    {
        name: 'two',
        img: 'assets/two.png'
    },
    {
        name: 'two',
        img: 'assets/two.png'
    },
    {
        name: 'three',
        img: 'assets/three.png'
    },
    {
        name: 'three',
        img: 'assets/three.png'
    },
    {
        name: 'four',
        img: 'assets/four.png'
    },
    {
        name: 'four',
        img: 'assets/four.png'
    },
    {
        name: 'five',
        img: 'assets/five.png'
    },
    {
        name: 'five',
        img: 'assets/five.png'
    },
    {
        name: 'six',
        img: 'assets/six.png'
    },
    {
        name: 'six',
        img: 'assets/six.png'
    }]


cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement('img')
        card.setAttribute('src', 'assets/back.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

createBoard()

function checkForMatch() {
    let cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'assets/back.png')
        cards[optionTwoId].setAttribute('src', 'assets/back.png')
        alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardsArray.length/2) {
        resultDisplay.textContent = 'Congrats you won!'
    }
}

function flipCard() {
    let cardId = this.getAttribute(`data-id`)
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}




// flip card
    // let cardId = get attribute from the create board function
    // make empty array for cards chosen
    // push cards from card array based on card id
    // once you have ID, get the name
    // add image to square based on ID it holds. so if 'fries' chosen then add 'fries' photo

// check for match
    // now we have two values in our cards chosen array
    // const optionOneId = cardsChosenId[0] and cardsChosenId[1] if they are matching then do XYZ (message/alert/keep flipped over)
    // then store them into a 'cards won' array so they cann't be chosen (push from array)
    // then else try again
    // then clear the cards choen array and the cards chosen Id array

// for results
    // can measure how long the cards won array is
    // if it == the total number of cards then the winner can be declared


// how do you shuffle the cards?



// display cards
// duplicate the cards to have 2 sets of 12
// randomise the display of cards
// add selected style for selected cards
// only allow two cards to be selected at a time
// determine if two selected cards are a match and hide them
// reset guess count after 2
// add delay to selections
// show back of card initially and flip on select
// finished game



// create a card array of 12 objects with a name and an image
// use get element by id to select the grid div and assign to const game
// create a section with a class of grid using set attribute - const grid = document/createElement('section') grid.setAttribute('class', 'grid')
// append the grid section to the game div game.appendChild(grid)
// this adds a section to the DOM
// to display the images on the front end, loop through each item in cardsArray with forEach
    // create a new card div for each object const card = document.createElement ('div')
    // apply a card class to that div card.cardList.add('card')
    // set the data-name attribute card.dataset.name = item.name
    // set background-image style property of the di card.style.backgroundImage
    // append to grid grid.appendChild(card)
// Duplicate the cards to have 2 sets of 12 then loop through that
    // let gameGrid = cardsArray.concat(cardsArray)
    // gameGrid.foreach with cardsArray
// shuffle the array using sort() and math.random() e.g. gameGrid.sort(() => 0.5 - Math.random())
// to check a selected card you can add a .selected style to CSS with a border
// add an event listener to the entire grid. anytime an element is clicked, the selected class is applied
    // grid.addEventListener('click', function (event) { let clicked = event.target if (clicked.nodeName === 'SECTION') {return}
    // clicked.classList.add('selected')
    // now every selected div will have a blue border when clicked
// only allow two cards to be selected at one time
    // let count = 0
    // modify the event listener to have an if statement that counts to two and only adds 'selected' to two cards.
    // if (count <2) { count++ clicked.classList.add('selected')
// determine if two selected cards are a match and hide them
    // give red border and remove bg image
    // don't remove from DOM because we need to preserve their space
    // .match { border:, background-image: none}
// let firstGuess = empty string, let secondGuess = empty string
// function for matching elements
    // loop through all selected elements when called and add match class
    //









