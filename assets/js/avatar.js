//randomizer variables
let aframe = document.getElementById("frame");
let gen = document.getElementById("gen");

//randomizer section
//avatar api randomizer function
function generate() {
    let id = Math.random();
    let url = `https://avatars.dicebear.com/api/adventurer/${id}.svg`
    aframe.src = url;
}

//event to prevent default img
gen.addEventListener('click', function(e) {
    e.preventDefault();
    generate();
});