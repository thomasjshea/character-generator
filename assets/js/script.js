// Declare variables
let classes = 'https://www.dnd5eapi.co/api/classes'
let races = 'https://www.dnd5eapi.co/api/races'
let abilityScores = 'https://www.dnd5eapi.co/api/ability-scores'
let raceEl = document.getElementById('race-select')
let classEl = document.getElementById('class-select')
let generateBtnEl = $('#generate-btn')
let randomizeBtnEl = $('#randomize-btn')
let outputEl = document.getElementById('output')
let possibleScores = [15, 14, 13, 12, 10, 8]


// Populate Races to Dropdown Menu
function populateRaces() {

    fetch(races)
        .then(function (response) {
            return response.json()
        })
        .then(function(data) {
            console.log(data)
            for (let i = 0; i < data.results.length; i++) {
                let raceOption = document.createElement('option')
                raceOption.classList = 'dropdown-option'
                raceOption.value = data.results[i].index
                console.log(raceOption.value)
                raceOption.innerHTML = data.results[i].name
                raceEl.appendChild(raceOption)
            }
        })
let raceE1 = document.getElementById('race-select')

}
populateRaces()

// Populate Classes to dropdown Menu
function populateClasses() {

    fetch(classes)
        .then(function (response) {
            return response.json()
        })
        .then(function(data) {
            console.log(data)
            for (let i = 0; i < data.results.length; i++) {
                let classOption = document.createElement('option')
                classOption.classList = 'dropdown-option'
                classOption.value = data.results[i].index
                console.log(classOption.value)
                classOption.innerHTML = data.results[i].name
                classEl.appendChild(classOption)
            }
        })


}


populateClasses()

// add event listener to generate button
generateBtnEl.click(function(){
    fetch(abilityScores)
        .then(function(response){
            return response.json()
        })
        .then(function (data){
            console.log(data)
            for (let i=0; i<data.results.length; i++){
                let ability = document.createElement('p')
                ability.innerHTML = data.results[i].name
                outputEl.appendChild(ability)
            }
        })

})

let characterList = document.getElementById("character-list");

// saves users generated character and adds to local storage
function handleSaveClick() {
    console.log("saveCharacter");
  const characterArr = getCharacters()
  if (characterArr.length>4) {
    characterArr.shift()
  }
  console.log(characterArr)
  let characterClass = document.getElementById("class-select");
  let classValue = characterClass.value;
  let characterRace = document.getElementById("race-select");
  let raceValue = characterRace.value;
  console.log(classValue)
  console.log(raceValue)
  const newCharacter = {
    race: raceValue,
    class: classValue
  }
  characterArr.push(newCharacter);
  localStorage.setItem("character", JSON.stringify(characterArr));
}

// gets characters from local storage
function getCharacters() {
    const characterStorage = localStorage.getItem("character");
    const characterArr = JSON.parse(characterStorage);
    return characterArr || []
}

// clears saved characters from local storage
function clearAll() {
    localStorage.clear()
    clearItems()
}

// clears loaded character list
function clearItems() {
    characterList.innerHTML='';
}

// loads saved character and their features for user
function retrieveSavedCharacter() {
    clearItems()
    const characterArr = getCharacters()
  console.log(characterArr);
  console.log("retrieveSavedCharacter");
  for (i = 0; i < characterArr.length; i++) {
    let savedCharacter = document.createElement("li");
    const characterText = `class: ${characterArr[i].class + ','} race: ${characterArr[i].race}`
    savedCharacter.innerText = (characterText);
    characterList.appendChild(savedCharacter);
  }
}