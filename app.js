let inputArea = document.getElementById("input-area");
let outputArea = document.getElementById("output-container");
let translateButton = document.querySelector(".translate-button")
let url = "https://api.funtranslations.com/translate/wakanda.json";
// let url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
let enteredText = "";


/* --------------------- Storing input text in variable -------------------- */
inputArea.addEventListener("change", (e) => {
    enteredText = e.target.value;
});

/* ----------------- Encoding the text and appending to url ----------------- */
function joinUrl(text) {
    let encodedUrl = encodeURI(text);
    return `${url}?text=${encodedUrl}`;


}

/* ------------------------- On Click Buttton Event ------------------------- */
let onClick = () => {
    if (enteredText) {
        let finalUrl = joinUrl(enteredText);
        fetch(finalUrl)
            .then(res => res.json())
            .then(json => { outputArea.innerText = json.contents.translated })
            .catch(() => { outputArea.innerText = "As this is a free api it only allows 5 requests/hour. Please try after an hour :)" })
    } else {

        inputArea.classList.add("error");
        inputArea.placeholder = "Please Enter Some Text";
        setTimeout(() => { inputArea.classList.remove("error"); inputArea.placeholder = "Type the text here that you want to convert to banana and speak like minions...yaaayyy"; }, 1700)
    }
}
translateButton.addEventListener("click", onClick);


