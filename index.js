// create vars for buttons
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let hScore = 0
let gScore = 0
// create functions for +1, +2, +3 when button clicked and replace text score with current score

// add 1 point for home
function homeAdd1() {
    hScore += 1
    homeScore.textContent = hScore
    console.log("Home Score: " + hScore)
}

// add 2 points for home
function homeAdd2() {
    hScore += 2
    homeScore.textContent = hScore
    console.log("Home Score: " + hScore)
}

// add 3 points for home
function homeAdd3() {
    hScore += 3
    homeScore.textContent = hScore
    console.log("Home Score: " + hScore)
}

// add 1 point for guest
function guestAdd1() {
    gScore += 1
    guestScore.textContent = gScore
    console.log("Guest Score: " + gScore)
}

// add 2 points for guest
function guestAdd2() {
    gScore += 2
    guestScore.textContent = gScore
    console.log("Guest Score: " + gScore)
}

// add 3 points for guest
function guestAdd3() {
    gScore += 3
    guestScore.textContent = gScore
    console.log("Guest Score: " + gScore)
}

function newGame() {
    hScore = hScore * 0
    gScore = gScore * 0
    homeScore.textContent = hScore
    guestScore.textContent = gScore
    console.log("New game has started")
}