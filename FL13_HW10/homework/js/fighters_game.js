function Fighter({name, damage, hp, strength, agility} = {}) {
  const maxPersent = 100;
  const correctNumber = 101;
  let wins = 0;
  let losses = 0;
  let currentHp = hp;
  this.getName = () => name;
  this.getDamage = () => damage;
  this.getStrength = () => strength;
  this.getAgility = () => agility;
  this.getHealth = () => currentHp;
  this.attack = function(defender) {
    const chanceToHit = maxPersent - (defender.getStrength() + defender.getAgility());
    if (Math.floor(Math.random() * correctNumber) <= chanceToHit) {
      console.log(`${name} makes ${damage} damage to ${defender.getName()}`);
      defender.dealDamage(damage);      
    } else {
      console.log(`${name} attack missed`);
    }
  }
  this.logCombatHistory = function() {
    console.log(`Name: ${name}, Wins: ${wins}, Losses: ${losses}`);
  }
  this.heal = function(value) {
    if ((currentHp += value) > hp) {
      currentHp = hp;
    }
  }
  this.dealDamage = function(value) {
    if ((currentHp -= value) < 0) {
      currentHp = 0;
    }
  }
  this.addWin = () => wins++;
  this.addLoss = () => losses++;
}

function battle(fighter1, fighter2) {
  if (fighter1.getHealth() === 0) {
    console.log(`${fighter1.getName()} is dead and can't fight.`);
  } else if (fighter2.getHealth() === 0) {
    console.log(`${fighter2.getName()} is dead and can't fight.`)
  } else {
    let first = 1;
    let module = 2;
    while (fighter1.getHealth() && fighter2.getHealth() !== 0) {
      first++ % module === 0 ? fighter2.attack(fighter1) : fighter1.attack(fighter2);
    }
    if (fighter1.getHealth() === 0) {
      console.log(`${fighter2.getName()} has won!`);
      fighter2.addWin();
      fighter1.addLoss();
    } else {
      console.log(`${fighter1.getName()} has won!`);
      fighter1.addWin();
      fighter2.addLoss();
    }
  }
}