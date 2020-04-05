const albumArt = document.getElementById('album-art');
const track1 = document.getElementById('track1');
const track2 = document.getElementById('track2');
const track3 = document.getElementById('track3');
const track4 = document.getElementById('track4');
const track5 = document.getElementById('track5');
const track6 = document.getElementById('track6');
const trackName = document.getElementById('track-name');
const audio = document.getElementById('audio');
const audioSource = document.getElementById('audioSource');

track1.addEventListener('click', () => {
    albumArt.src = "img/albumrain.png";
    trackName.innerText = track1.innerText;
    audioSource.src = "audio/ancestors.wav";
    audio.load();
    audio.play();
})

track2.addEventListener('click', () => {
    albumArt.src = "img/albumlips.png";
    trackName.innerText = track2.innerText;
    audioSource.src = "audio/cloud.wav";
    audio.load();
    audio.play();
})

track3.addEventListener('click', () => {
    albumArt.src = "img/albumcity.png";
    trackName.innerText = track3.innerText;
    audioSource.src = "audio/lake_city.wav";
    audio.load();
    audio.play();
})

track4.addEventListener('click', () => {
    albumArt.src = "img/albumflare.png";
    trackName.innerText = track4.innerText;
    audioSource.src = "audio/make_you.wav";
    audio.load();
    audio.play();
})

track5.addEventListener('click', () => {
    albumArt.src = "img/albumkang.png";
    trackName.innerText = track5.innerText;
    audioSource.src = "audio/no_friends.wav";
    audio.load();
    audio.play();
})

track6.addEventListener('click', () => {
    albumArt.src = "img/albumknight.png";
    trackName.innerText = track6.innerText;
    audioSource.src = "audio/switchblade.wav";
    audio.load();
    audio.play();
})