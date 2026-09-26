const formlist = document.querySelector("#formlist");
const inputitem = document.querySelector("#inputitem");
const addbtn = document.querySelector("#addbtn");
const shoppingList = document.querySelector("#shoppingList");

formlist.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputitemValue = inputitem.value;
  if (inputitemValue.trim() === "") {
    return;
  }
  inputitem.value = "";

  const listitem = document.createElement("li");
  listitem.textContent = inputitemValue;
  
  listitem.textContent = inputitemValue + " ";

  const deletebtn = document.createElement("button");
  deletebtn.textContent = "  Delete";

  listitem.appendChild(deletebtn);
  deletebtn.addEventListener("click", function () {
    listitem.remove();
  });

  shoppingList.appendChild(listitem);
  inputitem.focus();
});
