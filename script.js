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

    document.querySelector("#menuknap").classList.add("hide");
    document.querySelector("#lukkeknap").classList.remove("hide");
    document.querySelector("#lukkeknap").addEventListener("click", clickMenuVoek);


}

function clickMenuVoek() {
    console.log("clickMenuVoek");
    document.querySelector("#lukkeknap").classList.add("hide");
    document.querySelector("#menuknap").classList.remove("hide");
    document.querySelector("#menu").classList.add("hidden");
}
