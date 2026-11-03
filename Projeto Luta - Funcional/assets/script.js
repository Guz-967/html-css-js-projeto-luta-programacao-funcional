const hero = createMage('Roberto')
const monster = createGoblin()

stage.start(
    hero,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    document.querySelector('.log')
)
