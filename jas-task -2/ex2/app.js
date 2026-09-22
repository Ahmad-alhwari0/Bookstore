// let name = prompt("Enter your name:");
// let membership = prompt("Enter your membership type (student/regular):");
// while (membership !== "student" && membership !== "regular") {
//   membership = prompt("Enter your membership type (student/regular):");
// }
// let bookGenre = prompt("Do you prefer fiction or non-fiction books?");
// let titlebook = prompt("enter titel book");

// let arr = [];
// arr[0] = name;
// arr[1] = membership;
// arr[2] = bookGenre;
// arr[3] = titlebook;

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

function collectUserData() {
  let arr2 = [];
  let name = prompt("Enter your name:");
  let membership=checkMembership();
  let bookGenre = prompt("Do you prefer fiction or non-fiction books?");
  let titlebook = prompt("enter titel book");

  arr2[0] = name;
  arr2[1] = membership
  arr2[2] = bookGenre;
  arr2[3] = titlebook;
  return arr2;
}

function checkMembership() {
  let membership = prompt("Enter your membership type (student/regular):");

  while (membership !== "student" && membership !== "regular") {
    membership = prompt("Enter your membership type (student/regular):");
  }
  return membership;
}

let userData = collectUserData();

userData.forEach(element => {
    console.log(element);
    
});







