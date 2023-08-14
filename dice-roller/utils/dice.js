class DicePool {
    size = 0;
    sides = 2;

    constructor(size, sides) {
        this.size = size;
        this.sides = sides;
    }

    rollDie() {
        return Math.floor(Math.random() * (this.sides)) + 1;
    }

    rollDicePool() {
        let sum = 0;
        const results = [];
        for (let i=0; i< this.size; i++) {
            const roll = this.rollDie();
            results.push(roll);
            sum += roll;
            console.log(`Rolled ${roll} on a(n) ${this.sides} sided die`)
        }
        console.log(`Die total is ${sum}.`)
        return {results: results, total: sum}
    }

    addDie() {
        this.size +=1;
    }

    removeDie() {
        if (this.size > 1) {
            this.size -= 1;
        }
        else {
            console.log("Cannot have less than 1 die")
        }
    }
}

function unitTest() {
    const d6DicePool = new DicePool(2, 6);
    d6DicePool.rollDicePool();

    d6DicePool.addDie();
    d6DicePool.rollDicePool();

    const d20 = new DicePool(1, 20);
    d20.rollDicePool();
}

// unitTest();

export default DicePool;