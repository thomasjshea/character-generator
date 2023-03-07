let classes = 'https://www.dnd5eapi.co/api/classes'
let races = 'https://www.dnd5eapi.co/api/races'
let abilityScores = 'https://www.dnd5eapi.co/api/ability-scores'
let raceE1 = document.getElementById('race-select')

function populateRaces() {
    
    fetch(races)
    .then(function (response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)
    for(let i=0; i< data.results.length; i++){
        let raceOption =document.createElement('option')
        raceOption.classList = 'dropdown-option'
        raceOption.value = data.results[i].index
        console.log(raceOption.value)
        raceOption.innerHTML= data.results[i].name
        raceE1.appendChild(raceOption)
    }
    })
}

populateRaces()