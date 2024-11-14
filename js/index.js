const buttonA = document.getElementById("a-btn");
const buttonB = document.getElementById("b-btn");
const buttonC = document.getElementById("c-btn");
const hideA = document.getElementById("hide-a");
const hideB = document.getElementById("hide-b");
const hideC = document.getElementById("hide-c");

const topA = document.getElementById("a-top");
const topB = document.getElementById("b-top");
const topC = document.getElementById("c-top");

function onClickShowA() {
    topA.style.visibility = "visible";
}

function onClickHideA() {
    topA.style.visibility = "hidden";
}

function onClickShowB() {
    topB.style.visibility = "visible";
}

function onClickHideB() {
    topB.style.visibility = "hidden";
}

function onClickShowC() {
    topC.style.visibility = "visible";
}

function onClickHideC() {
    topC.style.visibility = "hidden";
}

buttonA.addEventListener("click", onClickShowA);
hideA.addEventListener("click", onClickHideA);
buttonB.addEventListener("click", onClickShowB);
hideB.addEventListener("click", onClickHideB);
buttonC.addEventListener("click", onClickShowC);
hideC.addEventListener("click", onClickHideC);