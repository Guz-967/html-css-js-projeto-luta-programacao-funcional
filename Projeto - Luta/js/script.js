let log = new Log(document.querySelector('.log'))
let char = new Knight('Roberto')
let monster = new Cyclops()

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
)
stage.start()