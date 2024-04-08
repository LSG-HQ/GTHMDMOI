const wordContainer = document.getElementById("wordContainer");
const header = document.querySelector(".we_exist");
const wordsSets = [
  ["Raise the potential of the human race"],
  ["Inspire life without limits"],
  ["Build the future"],
  ["Disrespect the impossible"],
  ["Playing infinite games"],
  ["Technology"],
  ["Delivering on hope"],
  ["Ourselves"],
];

let currentIndex = 0;

function typewrite(text, element, callback) {
  const characters = text.split("");
  let charIndex = 0;

  const intervalId = setInterval(() => {
    if (charIndex < characters.length) {
      // Add the letter
      element.innerHTML += characters[charIndex];
      charIndex++;
    } else {
      clearInterval(intervalId);
      setTimeout(callback, 500);
    }
  }, 100);
}

function displayWords() {
  header.textContent = "";
  wordContainer.innerHTML = ""; // Clear the word container

  const wordsSet = wordsSets[currentIndex];

  Promise.all([
    new Promise((resolve) =>
      typewrite(
        currentIndex < 4 ? "We exist to" : "We Believe In",
        header,
        resolve
      )
    ),
    ...wordsSet.map(
      (sentence, index, array) =>
        new Promise((resolve) => {
          typewrite(sentence, wordContainer, () => {
            // Add a caret after each word except the last one
            if (index < array.length +1) {
              wordContainer.innerHTML += "<span class='caret'>|</span>";
            }
            resolve();
          });
        })
    ),
  ]).then(() => {
    currentIndex = (currentIndex + 1) % wordsSets.length;
    setTimeout(displayWords, 1000);
  });
}

displayWords();