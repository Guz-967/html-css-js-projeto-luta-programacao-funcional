//Knight ou Sorcerer
//LittleMonster ou BigMonster

class Character{

    _life = 1
    max_life = 1
    attack = 0
    defense = 0

    constructor(name){
        this.name = name
    }

    get life(){
        return this._life
    }

    set life(newLife){
        this._life = newLife < 0 ? 0 : newLife
    }
}

class Knight extends Character{

    constructor(name){
        super(name)
        this.life = 100
        this.max_life = this.life
        this.attack = 10
        this.defense = 7
    }
}

class Mage extends Character{

    constructor(name){
        super(name)
        this.life = 80
        this.attack = 15
        this.defense = 4
        this.max_life = this.life
    }
}

class Goblin extends Character{

    constructor(){
        super('Goblin')
        this.life = 50
        this.attack = 4
        this.defense = 5
        this.max_life = this.life
    }
}

class Cyclops extends Character{

    constructor(){
        super('Cyclops')
        this.life = 115
        this.attack = 16
        this.defense = 6
        this.max_life = this.life
    }
}

class Stage{

    constructor(fighter1, fighter2, fighter1_el, fighter2_el, logObject){
        this.fighter1 = fighter1
        this.fighter2 = fighter2
        this.fighter1_el = fighter1_el
        this.fighter2_el = fighter2_el
        this.log = logObject
    }

    start(){
        this.update()

        //ATACAR
        this.fighter1_el.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2))
        this.fighter2_el.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1))
    }

    update(){
        //Fighter1
        this.fighter1_el.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`
        let F1pct = (this.fighter1.life / this.fighter1.max_life) * 100
        this.fighter1_el.querySelector('.bar').style.width = `${F1pct}%`

        //Fighter2
        this.fighter2_el.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`
        let F2pct = (this.fighter2.life / this.fighter2.max_life) * 100
        this.fighter2_el.querySelector('.bar').style.width = `${F2pct}%`
    }

    doAttack(attacking, attacked){
        

        if(attacking.life <= 0 || attacked.life <= 0){
            this.log.addMessage('Não é possível atacar')
            return
        }

        let attackFactor = (Math.random() * 2).toFixed(2)
        let actualAttack = attacking.attack * attackFactor

        let defenseFactor = (Math.random() * 2).toFixed(2)
        let actualDefense = attacked.defense * defenseFactor

        if(actualAttack > actualDefense){
            attacked.life -= actualAttack
            this.log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`)
        } else{
            this.log.addMessage(`${attacked.name} conseguiu defender!`)
        }
        
        this.update()
    }
}

class Log{

    list = []

    constructor(listEl){
        this.listEl = listEl
    }

    addMessage(msg){
        this.list.push(msg)
        this.render()
    }

    render(){
        this.listEl.innerHTML = ''

        for(let i in this.list){
            this.listEl.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}
