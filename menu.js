function activateNightMode() {
    document.querySelector("body").classList.add("night");
    document.querySelector("#night-mode").classList.add("active");
    document.querySelector("#day-mode").classList.remove("active");
}

function activateDayMode() {
    document.querySelector("body").classList.remove("night");
    document.querySelector("#day-mode").classList.add("active");
    document.querySelector("#night-mode").classList.remove("active");
}

document.querySelector("#day-mode").classList.add("active");
document.querySelector("#night-mode").addEventListener("click", activateNightMode);
document.querySelector("#day-mode").addEventListener("click", activateDayMode);
