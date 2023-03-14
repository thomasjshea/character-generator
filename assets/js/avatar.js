//randomize avatar function//
let gen =  document.querySelector('#gen')

gen.addEventListener('click', function (e) {
    let id = Math.random();
    let aframe = document.getElementById("frame");
    let url = `https://avatars.dicebear.com/api/adventurer/${id}.svg`
    aframe.src = url;

})






