//hvad starter js med?
window.addEventListener("load", startVises);

// Hvad skal i skrive for at skjule den div?

function startVises() {
    console.log("startVises");
    document.querySelector("#menu").addEventListener("click", clickMenuKnap);

}

function clickMenuKnap() {
    console.log("clickMenuKnap");
    document.querySelector("#menu").classList.remove("hidden");
    document.querySelector("#menuknap").addEventListener("click", clickMenuVoek);

}

function clickMenuVoek() {
    console.log("clickMenuVoek");
    document.querySelector("#menu").classList.add("hidden");
}
