// Declare variables
let charClasses = 'https://www.dnd5eapi.co/api/classes'
let races = 'https://www.dnd5eapi.co/api/races'
let abilityScores = 'https://www.dnd5eapi.co/api/ability-scores'
let raceEl = document.getElementById('race-select')
let classEl = document.getElementById('class-select')
let generateBtnEl = $('#generate-btn')
let randomizeBtnEl = $('#randomize-btn')
let outputEl = document.getElementById('output')
let possibleScores = [15, 14, 13, 12, 10, 8]
let possibleBackgrounds = ['Acolyte', 'Charlatan', 'Criminal', 'Entertainer', 'Folk Hero', 'Guild Artisan', 'Hermit', 'Noble', 'Outlander', 'Sage', 'Sailor', 'Soldier', 'Urchin']
var threeDSixStr = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1)
var threeDSixDex = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1)
var threeDSixCon = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1)
var threeDSixWis = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1)
var threeDSixInt = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1)
var threeDSixCha = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1)
var threeDSix = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1)
console.log(threeDSix)

// Populate Races to Dropdown Menu
function populateRaces() {

    fetch(races)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
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

    fetch(charClasses)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
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
generateBtnEl.click(function () {
    fetch(abilityScores)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            for (let i = 0; i < data.results.length; i++) {
                let ability = document.createElement('p')
                ability.setAttribute("class", "ability")
                ability.innerHTML = data.results[i].name
                outputEl.appendChild(ability)
                const initialValue = 0
                var fourDSixRoll = [(Math.floor(Math.random() * 6) + 1), (Math.floor(Math.random() * 6) + 1), (Math.floor(Math.random() * 6) + 1), (Math.floor(Math.random() * 6) + 1)]
                console.log(fourDSixRoll)
                var fourDSixRemove = (fourDSixRoll.sort()).shift()
                console.log(fourDSixRoll)
                var fourDSix = fourDSixRoll.reduce(
                    (accumulator, currentValue) => accumulator + currentValue,
                    initialValue
                );
                console.log(fourDSix)
                let score = document.createElement("span")
                score.innerHTML = fourDSix
                ability.appendChild(score)
            }
        })

})

// Added event listener to randomize button
randomizeBtnEl.click(function () {
    fetch(abilityScores)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            // Randomize Stats for abilities
            for (let i = 0; i < data.results.length; i++) {
                let ability = document.createElement('p')
                ability.setAttribute("class", "ability")
                ability.innerHTML = data.results[i].name
                outputEl.appendChild(ability)
                const initialValue = 0
                var fourDSixRoll = [(Math.floor(Math.random() * 6) + 1), (Math.floor(Math.random() * 6) + 1), (Math.floor(Math.random() * 6) + 1), (Math.floor(Math.random() * 6) + 1)]
                console.log(fourDSixRoll)
                var fourDSixRemove = (fourDSixRoll.sort()).shift()
                console.log(fourDSixRoll)
                var fourDSix = fourDSixRoll.reduce(
                    (accumulator, currentValue) => accumulator + currentValue,
                    initialValue
                );
                console.log(fourDSix)
                let score = document.createElement("span")
                score.innerHTML = fourDSix
                ability.appendChild(score)
            }
        })
        let randomClass = Math.floor(Math.random() * classEl.children.length)
        let selectedClass = classEl.children[randomClass].value
        let randClass = document.getElementById("class-select")
        randClass.value = selectedClass
        console.log(selectedClass)
        let randomRace = Math.floor(Math.random() * raceEl.children.length)
        let selectedRace = raceEl.children[randomRace].value
        let randRace = document.getElementById("race-select")
        randRace.value = selectedRace
        
        console.log(selectedRace)
    // Fetch classes to assign a random class to the generated character
    // fetch(charClasses)
    //     .then(function (response) {
    //         return response.json()
    //     })
    //     // Select a random class from the dataset
    //     .then(function (data) {
    //         console.log(data)
    //         let randomClass = Math.floor(Math.random() * data.results.length)
    //         let selectedClass = data.results[randomClass].name
    //         console.log(selectedClass)
    //     })
    // // Fetch races to assign a random race to the generated character
    // fetch(races)
    //     .then(function (response) {
    //         return response.json()
    //     })
    //     // Select a random race from the dataset
    //     .then(function (data) {
    //         console.log(data)
    //         let randomRace = Math.floor(Math.random() * data.results.length)
    //         let selectedRace = data.results[randomRace].name
    //         console.log(selectedRace)
    //     })
})

let characterList = document.getElementById("character-list");


// saves users generated character and adds to local storage
function handleSaveClick() {
    console.log("saveCharacter");
    const characterArr = getCharacters()
    if (characterArr.length > 4) {
        characterArr.shift()
    }
    console.log(characterArr)
    let characterClass = document.getElementById("class-select");
    let classValue = characterClass.value;
    let characterRace = document.getElementById("race-select");
    let raceValue = characterRace.value;
    let characterAbilities = document.getElementsByClassName("ability");
    let abilitiesResult = ""
    for(let i=0; i < characterAbilities.length; i++) {
        let abilityStats = characterAbilities[i];
        let abilityValue = abilityStats.innerText
        console.log(abilityValue)
        abilitiesResult += abilityValue + " "
    }
    console.log(classValue)
    console.log(raceValue)
    const newCharacter = {
        race: raceValue,
        class: classValue,
        ability: abilitiesResult
    }
    console.log(newCharacter)
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
    document.getElementById("output").innerHTML = '';
    localStorage.clear()
    clearItems()
}

// clears loaded character list
function clearItems() {
    characterList.innerHTML = '';
}

// loads saved character and their features for user
function retrieveSavedCharacter() {
    clearItems()
    const characterArr = getCharacters()
    console.log(characterArr);
    console.log("retrieveSavedCharacter");
    for (i = 0; i < characterArr.length; i++) {
        let savedCharacter = document.createElement("li");
        const characterText = `class: ${characterArr[i].class + ','} race: ${characterArr[i].race + ','} abilities: ${characterArr[i].ability}`
        savedCharacter.innerText = (characterText);
        characterList.appendChild(savedCharacter);
    }
}
