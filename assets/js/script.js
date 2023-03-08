const saveBtn = document.getElementsByClassName("button");

const character = document.getElementById("character");

characterArr = ["Arthur"];

function saveCharacter() {
  console.log("saveCharacter");
  localStorage.setItem("character", characterArr);
}
saveCharacter();

function retrieveSavedCharacter() {
  // localStorage.getItem('character')
  console.log("retrieveSavedCharacter");

  for (i = 0; i < characterArr.length; i++) {
    let character = document.getElementById("character-list");
    let savedCharacter = document.createElement("li");
    savedCharacter.innerText = characterArr[i];
    character.appendChild(savedCharacter);
  }
}
