const username = document.querySelector("#username");
const membershipType = document.querySelector("#membershipType");
const bookGenre = document.querySelector("#bookGenre");
const bookTitle = document.querySelector("#bookTitle");
const submitBtn = document.querySelector("#submitBtn");
const registerForm = document.querySelector("#registerForm");
const result_card = document.querySelector("#result-card");

function renderResult(student) {
  const usernameValue = student[0];
  const membershipTypeValue = student[1];
  const bookGenreValue = student[2];
  const bookTitleValue = student[3];

  const resultItem = document.createElement("div");
  resultItem.classList.add("result-item");

  const p1 = document.createElement("p");
  p1.textContent = "Username: " + usernameValue;

  const p2 = document.createElement("p");
  p2.textContent = "Membership: " + membershipTypeValue;

  const p3 = document.createElement("p");
  p3.textContent = "Genre: " + bookGenreValue;

  const p4 = document.createElement("p");
  p4.textContent = "Book Title: " + bookTitleValue;

  resultItem.appendChild(p1);
  resultItem.appendChild(p2);
  resultItem.appendChild(p3);
  resultItem.appendChild(p4);

  resultItem.addEventListener("click", function () {
    resultItem.remove();
  });

  result_card.appendChild(resultItem);
}

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  document.querySelectorAll(".error-message").forEach((msg) => msg.remove());

  const usernameValue = username.value;
  const membershipTypeValue = membershipType.value;
  const bookGenreValue = bookGenre.value;
  const bookTitleValue = bookTitle.value;
  let isValid = true;

  if (usernameValue === "") {
    const errorMsg = document.createElement("span");
    errorMsg.textContent = "This field is required";
    errorMsg.classList.add("error-message");
    username.parentElement.appendChild(errorMsg);
    isValid = false;
  }

  if (bookGenreValue === "") {
    const errorMsg = document.createElement("span");
    errorMsg.textContent = "This field is required";
    errorMsg.classList.add("error-message");
    bookGenre.parentElement.appendChild(errorMsg);
    isValid = false;
  }

  if (bookTitleValue === "") {
    const errorMsg = document.createElement("span");
    errorMsg.textContent = "This field is required";
    errorMsg.classList.add("error-message");
    bookTitle.parentElement.appendChild(errorMsg);
    isValid = false;
  }

  if (membershipTypeValue === "") {
    const errorMsg = document.createElement("span");
    errorMsg.textContent = "This field is required";
    errorMsg.classList.add("error-message");
    membershipType.parentElement.appendChild(errorMsg);
    isValid = false;
  }

  if (isValid) {
    const student = [
      usernameValue,
      membershipTypeValue,
      bookGenreValue,
      bookTitleValue,
    ];
    renderResult(student);
  }
});
