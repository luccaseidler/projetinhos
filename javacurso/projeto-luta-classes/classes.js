
class Character {

    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor(name){
        this.name = name;
    }

    get life(){
        return this._life;
    }
    set life(newLife){
        if(newLife < 0){
            this._life = 0;
        }
        else{
            this._life = newLife;
        }
    }

}   

class Assassin extends Character {
    constructor(name){
        super(name);
        this.life = 75;
        this.attack = 15;
        this.defense = 7;
        this.maxLife = this.life;
    }
}

class Marksman extends Character {
    constructor(name){
        super(name);
        this.life = 50;
        this.attack = 20;
        this.defense = 5;
        this.maxLife = this.life;
    }
}

class Red extends Character {
    constructor(){
        super('Red');
        this.life = 500;
        this.attack = 4;
        this.defense = 4
        this.maxLife = this.life;

    }
}

class Blue extends Character {
    constructor(){
        super('Blue');
        this.life = 300;
        this.attack = 6;
        this.defense = 5;
        this.maxLife = this.life;

    }
}

class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El, logObject){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
        this.log = logObject;
    }

    start(){
        this.update();

        this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
        this.fighter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));
    }

    update(){
        this.fighter1El.querySelector('.name').innerHTML = this.fighter1.name + ' - ' + this.fighter1.life.toFixed(1) + 'HP';
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector('.bar').style.width = f1Pct + '%';


        this.fighter2El.querySelector('.name').innerHTML = this.fighter2.name + ' - ' + this.fighter2.life.toFixed(1) + 'HP';
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.bar').style.width = f2Pct + '%';
    }

    doAttack(attacking, attacked){

        if(attacking.life <= 0 || attacked.life <= 0){
           this.log.addMessage('Adversário morto');
            return;
        }
        
        let attackFactor = (Math.random() * 2). toFixed(2);
        let defenseFactor = (Math.random() * 2). toFixed(2);

        let actualAttack = attacking.attack * attackFactor;
        let actualDefense = attacked.defense * defenseFactor;

        if(actualAttack > actualDefense){
            attacked.life -= actualAttack;
            this.log.addMessage(attacking.name + ' causou ' + actualAttack + ' de dano...');

        } else{
            this.log.addMessage(attacked.name + ' conseguiu defender...');
        }
        

        this.update();
    }
}

class Log {
    list = [];

    constructor(listEl){
        this.listEl = listEl;
    }

    addMessage(msg){
        this.list.push(msg);
        this.render();
    }

    render(){
        this.listEl.innerHTML = '';

        for(let i in this.list){
            this.listEl.innerHTML += '<li>' + this.list[i] + '</li>';
        }
    }
}