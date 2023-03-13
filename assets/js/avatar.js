//randomizer section start//
//randomizer variables//
let aframe = document.getElementById("frame");
let gen = document.getElementById("gen");



//avatar api randomizer function//
function generate() {
    let id = Math.random();
    let url = `https://avatars.dicebear.com/api/adventurer/${id}.svg`
    aframe.src = url;
}

gen.addEventListener('click', function(e) {
    e.preventDefault();
    generate();
});



//adv
function generate() {
    let id = Math.floor(Math.random()*4)+1;
    let url = `https://api.dicebear.com/5.x/adventurer/svg?skinColor=9e5622,763900,ecad80`
    aframe.src = url;
};


gen.addEventListener('click', function(e) {
    e.preventDefault();
    generate();
    
});


