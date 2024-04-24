// Обработчик для первого маркера
document.querySelector('#animated-marker1').addEventListener('markerFound', function () {
    log.write("KK")
    const backgroundMusic = document.querySelector('#background-music');
    if (backgroundMusic) {
        backgroundMusic.play();
    }

});


// Обработчики потери маркера
document.querySelector('#animated-marker1').addEventListener('markerLost', () => {
    const backgroundMusic = document.querySelector('#background-music');
    if (backgroundMusic) {
        backgroundMusic.pause();
    }
});

