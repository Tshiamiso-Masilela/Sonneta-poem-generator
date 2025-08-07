function displayPoem(response) {
  console.log("poem-generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "18b3c2d737dfoaa59t8ca496b42af0e4";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic poem expert and you love writing short sonnets in basic HTML, and it should have a maximum of 14 lines. Make sure to follow the users instructions. please don't include the instructions in the poem";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⌛ Generating Poem about ${instructionsInput.value}</div> `;

  console.log("generating poem");
  console.log(`prompt ${prompt}`);
  console.log(`context ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
