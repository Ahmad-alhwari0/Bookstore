const names = ["ben", "joel", "judy", "anne"];
const scores = [88, 98, 77, 88];

const nameinput = document.querySelector("#name");
const scoreinput = document.querySelector("#score");
const add_button = document.querySelector("#add_button");
const display_results_button = document.querySelector(
  "#display_results_button",
);
const display_scores_button = document.querySelector("#display_scores_button");
const resultsdiv = document.querySelector("#results");
const scoresTableBody = document.querySelector("#scores_table tbody");
const reset_button = document.querySelector("#reset_button");

add_button.addEventListener("click", addScore);
display_results_button.addEventListener("click", displayResults);
display_scores_button.addEventListener("click", displayScores);
reset_button.addEventListener("click", resetDisplay);
function addScore() {
  const namevalue = nameinput.value;
  const scorevalueRaw = scoreinput.value;
  const scorevalue = Number(scorevalueRaw);

  if (
    namevalue === "" ||
    scorevalueRaw === "" ||
    scorevalue < 0 ||
    scorevalue > 100
  ) {
    alert("You must enter a name and a valid score");
    return;
  }

  names.push(namevalue);
  scores.push(scorevalue);

  nameinput.value = "";
  scoreinput.value = "";
  nameinput.focus();
}

function displayResults() {
  let total = 0;
  let maxindex = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
    if (scores[i] > scores[maxindex]) {
      maxindex = i;
    }
  }

  const average = total / scores.length;
  const maxScoreValue = scores[maxindex];
  const maxScoreName = names[maxindex];
  resultsdiv.innerHTML =
    "<p>Average score = " +
    average +
    "</p>" +
    "<p>High score = " +
    maxScoreName +
    " with a score of " +
    maxScoreValue +
    "</p>";
}

function displayScores() {
  scoresTableBody.innerHTML = "";
  for (let i = 0; i < names.length; i++) {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.textContent = names[i];
    const scoreCell = document.createElement("td");
    scoreCell.textContent = scores[i];

    row.appendChild(nameCell);
    row.appendChild(scoreCell);

    scoresTableBody.appendChild(row);
  }
}
function resetDisplay() {
  resultsdiv.innerHTML = "";
  scoresTableBody.innerHTML = "";
}

nameinput.focus();
