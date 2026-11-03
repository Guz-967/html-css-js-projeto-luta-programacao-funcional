const defaultCharacter = {
    
    name: '',
    life: 1,
    max_life: 1,
    attack: 0,
    defense: 0
}       

const createKnight = (name) => {

    return{
        ...defaultCharacter,
        name: name,
        life: 100,
        max_life: 100,
        attack: 10,
        defense: 8
    }
}
const createMage = (name) => {

    return{
        ...defaultCharacter,
        name: name,
        life: 75,
        max_life: 75,
        attack: 13,
        defense: 6 
    }
}
const createGoblin = (name) => {

    return{
        ...defaultCharacter,
        name: 'Goblin',
        life: 50,
        max_life: 50,
        attack: 7,
        defense: 6
    }
}
const createOgre = () => {

    return{
        ...defaultCharacter,
        name: 'Ogro',
        life: 125,
        max_life: 125,
        attack: 13,
        defense: 7
    }
}



const stage = {

    
    start(fighter1, fighter2, fighter1El, fighter2El, logEl){
        this.fighter1 = fighter1
        this.fighter2 = fighter2
        this.fighter2El = fighter2El
        this.fighter1El = fighter1El
        this.logEl = logEl
        
        
        this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2))
        this.fighter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1))
        this.update()
    },

    update(){
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)}HP`
        let f1Pct = (this.fighter1.life / this.fighter1.max_life) * 100
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`
        
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)}HP`
        let f2Pct = (this.fighter2.life / this.fighter2.max_life) * 100
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`
    },

    doAttack(attacking, attacked){
        let attackCalc = (Math.random() * 2)
        let defenseCalc = (Math.random() * 2)
        let realAttack = (attacking.attack * attackCalc)
        let realDefense = (attacked.defense * defenseCalc)


        if(attacking.life <= 0){
            log.addMesage('Morto nn briga')
            return
        } else if (attacked.life <= 0){
            log.addMesage('Tá morto já')
            return 
        }

        if(realAttack > realDefense){
            attacked.life -= realAttack
            attacked.life = attacked.life < 0 ? 0 : attacked.life
            log.addMesage(`${attacking.name} causou ${realAttack.toFixed(2)}, e ${attacked.name }com ${realDefense.toFixed(2)} nn conseguiu defender`)
        } else{
            log.addMesage(`${attacked.name} defendeu o ataque que causou ${realAttack} de dano`)
        }
        
       this.update()
    },

}

const log = {
    list: [],
    addMesage(msg){
        this.list.push(msg)
        this.render()
    },
    render(){
        const logEl = document.querySelector('.log')
        logEl.innerHTML = ''
        for(let i in this.list){
            logEl.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}

