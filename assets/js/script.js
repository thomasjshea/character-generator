// array including object of character features for saved characters 
characterFeatures = [{
    name:'',
    class:'',
    race:'',
    stats:''
}];

// saves users generated character and adds to local storage
function saveCharacter() {
  console.log("saveCharacter");
  localStorage.setItem("character", JSON.stringify(characterArr));
}
saveCharacter();

// loads saved character and their features for user
function retrieveSavedCharacter() {
  console.log("retrieveSavedCharacter");

  for (i = 0; i < characterArr.length; i++) {
    let character = document.getElementById("character-list");
    let savedCharacter = document.createElement("li");
    savedCharacter.innerText = JSON.stringify(characterArr[i]);
    character.appendChild(savedCharacter);
  }
}
