let classes = 'https://www.dnd5eapi.co/api/classes'
let races = 'https://www.dnd5eapi.co/api/races'
let abilityScores = 'https://www.dnd5eapi.co/api/ability-scores'
let classEl = document.getElementById('class-select')

// Populate Classes to Dropdown Menu
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
let raceE1 = document.getElementById('race-select')

}
