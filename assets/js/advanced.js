//randomizer section start//
//randomizer variables//

let aframe = document.getElementById("frame");
let gen = document.getElementById("skin");


//skin color//
function generate() {
    let id = Math.floor(Math.random()*4)+1;
    let url = `https://api.dicebear.com/5.x/adventurer/svg?skinColor=9e5622,763900,ecad80`
    aframe.src = url;
};

gen.addEventListener('click', function(e) {
    e.preventDefault();
    generate();
    
});



//hair style function//

