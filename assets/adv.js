




//advanced section//
//skin color function//
let skin = document.querySelector('#skin', function(e) {
    e.preventDefault();
    generate(e);

})

skin.addEventListener('click', function () {
    let aframe = document.getElementById("frame")
    id = ('9e5622', '763900', 'ecad80','f2d3b1')
    let url = `https://api.dicebear.com/5.x/adventurer/svg?skinColor=${id}`
    aframe.src = url
    return id[result];



    console.log('yes')
})










//hair color funtion//
let haircolor = document.querySelector('#haircolor')

haircolor.addEventListener('click', function () {
    let aframe = document.getElementById("frame")
    id = ('9e5622', '763900', 'ecad80','f2d3b1')
    mouth = Math.random(id);
    let url = `https://api.dicebear.com/5.x/adventurer/svg?hairColor=${id}`
    aframe.src = url
    



    console.log('yes')
})









//hair style function//
let hairstyle = document.querySelector("#hairstyle")

hairstyle.addEventListener('click', function () {
    let aframe = document.getElementById("frame")
    id = ('long01','long02')
    mouth = Math.random(id);
    let url = `https://api.dicebear.com/5.x/adventurer/svg?hair=${id}`
    aframe.src = url
    



    console.log('yes')
})







//eyes function//
let eyes = document.querySelector("#eyes")

eyes.addEventListener('click', function () {
    let aframe = document.getElementById("frame")
    id = ('01', '02', '03', '04')
    mouth = 1 + Math.random(id);
    let url = `https://api.dicebear.com/5.x/adventurer/svg?eyes=variant${id}`
    aframe.src = url
    



    console.log('yes')
})









//mouth function//
let mouth = document.querySelector("#mouth")

mouth.addEventListener('click', function (e) {
    let aframe = document.getElementById("frame")
    id = ('01', '02', '03')
    mouth = Math.random(id);
    let url = `https://api.dicebear.com/5.x/adventurer/svg?mouth=variant${id}`
    aframe.src = url




    console.log('yes')
})

