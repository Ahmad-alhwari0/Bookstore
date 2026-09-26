const storyText = document.querySelector("#storyText");
const heading = document.querySelector("#heading");

const originalText = storyText.textContent;

const sourceLink = document.createElement("a");
sourceLink.href = "https://google.com/";
sourceLink.textContent = "Source";
document.body.appendChild(sourceLink);

const words = originalText.split(" ");
const wordcount = words.length;
heading.textContent = heading.textContent + " (word count: " + wordcount + ")";

const sentences = originalText.split(".");

let finalHTML = "";

for (let i = 0; i < sentences.length; i++) {
  const sentence = sentences[i];

  if (sentence.trim() === "") {
    continue;
  }

  const sentenceWords = sentence.split(" ");
  let highlightedSentence = "";

  for (let j = 0; j < sentenceWords.length; j++) {
    const word = sentenceWords[j];

    if (word.length > 8) {
      highlightedSentence = highlightedSentence + "<span class='highlight'>" + word + "</span> ";
    } else {
      highlightedSentence = highlightedSentence + word + " ";
    }
  }

  finalHTML = finalHTML + "<p>" + highlightedSentence + ".</p>";
}
 
storyText.innerHTML = finalHTML;