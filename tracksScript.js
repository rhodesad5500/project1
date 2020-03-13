const albumArt = document.getElementById('album-art');
const track1 = document.getElementById('track1');
const track2 = document.getElementById('track2');
const track3 = document.getElementById('track3');
const track4 = document.getElementById('track4');
const track5 = document.getElementById('track5');

track1.addEventListener('click', () => {
    albumArt.src = "img/track1.png";
})

track2.addEventListener('click', () => {
    albumArt.src = "img/track2.png";
})

track3.addEventListener('click', () => {
    albumArt.src = "img/track3.png";
})

track4.addEventListener('click', () => {
    albumArt.src = "img/track4.png";
})

track5.addEventListener('click', () => {
    albumArt.src = "img/track5.png";
})