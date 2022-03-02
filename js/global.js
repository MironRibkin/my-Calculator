Particles.init({
    selector: '.background',
    color: ['#F57707', '#404B69', '#C0AE9F'],
    connectParticles: true,
    maxParticles: 300,
    speed: 1,
    maxDistance: 200,
    sizeVariations: 4
});

const VALUE_NUMBER = document.querySelector('.value-numbers');
let FIRST_ACTIVE_NUMBER = '';
let SECOND_ACTIVE_NUMBER = '';
let ACTIVE_OPERATION = '';