//advanced avatar creator section start//
//advanced variable//




//hair randomizer function//
function generate() {
    let id = Math.random();
    let url = `https://avatars.dicebear.com/api/adventurer/hair/${id}.svg`
    aframe.src = url;
}

gen.addEventListener('click', function(e) {
    e.preventDefault();
    generate();
});

//hair color randomizer function//
//eyebrows randomizer function//
//eyes randomizer function//
//glasses randomizer function//
//special feature randomizer function//
//mouth randomizer function//
//skin color randomizer function//