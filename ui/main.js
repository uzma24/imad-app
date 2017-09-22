console.log('Loaded!');

var img = getElementById('madi');


img.onclick = function() {
    var interval = setinterval(moveRight,50);
};
marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft+5;
    img.style.marginLeft = marginLeft + 'px';
}