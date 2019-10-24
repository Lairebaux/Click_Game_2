let win = false
let clickCounter = 0
let clicksToWin = 3

const createElement = (type, value) => {
    const button = document.createElement(type)
    button.innerText = value
    return button
}

const addToView = (elem) => {
    const body = document.getElementById("status")
    body.appendChild(elem)
}

const click_btn = createElement("button", "Click me!")
addToView(click_btn)


click_btn.addEventListener("click", () => {
    clickCounter += 1
    click_btn.innerText = `${clicksToWin - clickCounter} Clicks left.`
    if (clickCounter >= 3) {
        click_btn.innerText = "No More clicks felt."
    } 
    if (clickCounter >= clicksToWin) {
        win = true
    }
})

const countClicks = () => {
    const clickedListTitle = createElement("p", `Button clicked: ${clickCounter} times.`)
    addToView(clickedListTitle)
}


const message = () => {
    let msg
    if (win) {
        msg = createElement("p", "You win!")
    } else {
        msg = createElement("p", "You lose!\n Too Slow!\n Must click at least 3 times.")
    }
    msg.id = "results"
    addToView(msg)
}


const randomNum = () => {
    return Math.floor(Math.random() * 100) + 1
}

const restartDiv = createElement("div", "")
restartDiv.id = "restart"

const restart_btn = createElement("button", "Restart!")
restartDiv.appendChild(restart_btn)
addToView(restartDiv)


restart_btn.addEventListener("click", () => {
    clickCounter = 0
    win = false
    click_btn.innerText = `${clicksToWin} Clicks left.`
    clearMsg()
    randPos()
    startGame()
})


const clearMsg = () => {
    // clear messages
    text = document.getElementById("results")
    text.remove()
}

const startGame = () => {
    setTimeout(() => {
        message()
    }, 1000)
}


const randPos = () => {
    // randomize restart button position
    for (let i = 0; i < randomNum(100); i++) {
        restartDiv.style.position = "absolute"
        restartDiv.style.top = `${i * 10}px`
        restartDiv.style.right = `${i * 20}px`
    }
}

startGame()