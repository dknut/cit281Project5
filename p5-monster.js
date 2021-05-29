module.exports = class Monster {
  constructor({ monsterName = "Unknown", minimumLife = 0, currentLife = 100 }) {
    this.monsterName = monsterName;
    this.minimumLife = minimumLife;
    this.currentLife = currentLife;
    this.isAlive = true;
  }
  updateLife(lifeChangeAmount = 0) {
    this.currentLife =
      this.currentLife - lifeChangeAmount < 0
        ? 0
        : this.currentLife - lifeChangeAmount;
    this.isAlive = this.currentLife >= this.minimumLife ? true : false;
  }
  randomLifeDrain(minimumLifeDrain, maximumLifeDrain) {
    let min = minimumLifeDrain;
    let max = maximumLifeDrain + 1;
    let lifedrain = Math.floor(Math.random() * (max - min) + min);
    this.updateLife(lifedrain);
    console.log(`${this.monsterName} random power drain of ${lifedrain}`);
  }
};
