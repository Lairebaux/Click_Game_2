const elemType = "button"
const buttonNames = []
const buttons = []
let lost = false
let won = false


const randomNum = (n) => {
    // random int generator
    return Math.ceil(Math.random() * n) + 1
}

const nums = randomNum(5)

// create button names form random int
for (let i = 1; i < nums; i++) {
    buttonNames.push(String(i))
}

// set clicked status of buttons
let clicked = buttonNames.map(x => x = false)


const createElement = (elem, name) => {
    // create html elements
    btn = document.createElement(elem)
    btn.innerHTML = name
    return btn
}
const addToView = (elem) => {
    // add to DOM
    document.querySelector("body").appendChild(elem)
}

// create elements
for (let j = 0; j < buttonNames.length; j++) {
    let x = createElement(elemType, buttonNames[j])
    buttons.push(x)
    addToView(x)
}

const contents = () => {
    // post contents of clicked buttons status
    clicked_contents_title = createElement("h2", "Contents of clicked")
    addToView(clicked_contents_title)
    clicked_contents = createElement("h3", clicked.toString())
    addToView(clicked_contents)
}

const addEvents = (i) => {
    // add events to buttons
    buttons[i].addEventListener("click", () => {
        if (won || lost) return
        clicked[i] = true
        if (clicked.every((elem) => elem === true)) {
            won = true
            document.getElementById("status").innerText = "you won!"
        }
        // contents()
    })
}

for (let i = 0; i < buttonNames.length; i++) {
    addEvents(i)
}

setTimeout(() => { 
    // set timer for constraint
    if (won || lost) return 
    lost = true 
    document.getElementById('status').innerText = "You lost!" 
}, 1000 * buttons.length - 1) 
