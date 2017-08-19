console.log('Loaded!');

var element = document.getElementById('main-txt');
element.innerHTML = "New Value";

// Making the image move

var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
    }
img.onclick = function () {
    var interval = setInterval(moveRight,100);
};