var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#input-field");
var outputDiv = document.querySelector("#output-field");
var serverURL = "	https://api.funtranslations.com/translate/shakespeare.json";

function createTranslationURL(text) {
  return serverURL + "?text=" + text;
}

function handleError(error) {
  console.log("Error: ", error);
  alert("Something went wrong! try again after some time");
}

function clickHandler() {
  fetch(createTranslationURL(inputText.value))
    .then(response => response.json())
    .then(json => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(handleError);
}

btnTranslate.addEventListener("click", clickHandler);
