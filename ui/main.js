console.log('Loaded!');

var img = document.getElementById("madi");


img.onclick = function() {
    var interval = setInterval(moveRight,50);
};
marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft+5;
    img.style.marginLeft = marginLeft + 'px';
}