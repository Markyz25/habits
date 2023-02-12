const form = document.querySelector("form");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector("header button")

button.addEventListener("click", add);
form.addEventListener("change", save)

function add() {
    const today = new Date().toLocaleDateString("pt-br").slice(0, -5);
    const dayExists = nlwSetup.dayExists(today)

    if (dayExists) {
        alert("Dia já incluso 🔴")
        return
    }

    alert("Dia adicionado ✔")
    nlwSetup.addDay(today)
}

function save() {
    localStorage.setItem("NLWSetup@habits1", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits1")) || {}
// const data = {
//     run: ["01-02", "01-03", "01-06"],
//     water: ["01-02"],
//     food: ["01-05", "01-06"],
//     academy: ["01-01", "01-02", "01-03", "01-04", "01-05"],
//     dog: ["01-01"]
// }

nlwSetup.setData(data)
nlwSetup.load()