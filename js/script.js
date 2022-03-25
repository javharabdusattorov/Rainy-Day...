function rain() {
    const image = document.getElementById('background');
    image.onload = function() {
        var rainyDay = new RainyDay({
            image: this,
            blur: 10,
            fps: 40,
            gravityAngleVariance: 0,
            gravityThreshold: 3,
        })
        RainyDay.rain([
            [5,2,2]
        ],0)
    }
    image.src = 'img/bg.jpg';
}
rain() 