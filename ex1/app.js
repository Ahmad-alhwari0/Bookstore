let name = prompt("Enter your name:");
let membership = prompt("Enter your membership type (student/regular):");

let title;
if (membership === "student") {
  title = "Scholar";
} else if (membership === "regular") {
  title = "Member";
} else {
  title = "";
}

alert(`Welcome ${name}  ${title}`);


let genre = prompt("Do you prefer fiction or non-fiction books?");
let bookTitle = prompt("Enter the title of the book you want to borrow:");


alert("Your requested book is being reserved.");

console.log(name + " ordered the book: " + bookTitle);
