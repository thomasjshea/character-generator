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
randomizeBtnEl.click(function(){
    fetch(abilityScores)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
    })
    // Fetch classes to assign a random class to the generated character
    fetch(classes)
    .then(function(response){
        return response.json()
    })
    // Select a random class from the dataset
    .then(function(data){
        console.log(data)
        let randomClass = Math.floor(Math.random() * data.results.length)
        let selectedClass = data.results[randomClass].name
        console.log(selectedClass)
    })
    // Fetch races to assign a random race to the generated character
    fetch(races)
    .then(function(response){
        return response.json()
    })
    // Select a random race from the dataset
    .then(function(data){
        console.log(data)
        let randomRace = Math.floor(Math.random() * data.results.length)
        let selectedRace = data.results[randomRace].name
        console.log(selectedRace)
    })
})

       


