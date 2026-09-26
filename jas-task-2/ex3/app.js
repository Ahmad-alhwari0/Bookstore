let availableGenres = ["Fiction", "Science", "History", "Biography"];

function applyDiscount(userData) {
  if (userData[1] === "student") {
    userData.push("20% Discount");
  } else if (userData[1] === "regular") {
    userData.push("No Discount");
  }
  return userData;
}

function addNewGenre(genre) {
  availableGenres.push(genre);
}

function displayGenres() {
  for (let i = 0; i < availableGenres.length; i++) {
    console.log("- We offer: " + availableGenres[i]);
  }
}