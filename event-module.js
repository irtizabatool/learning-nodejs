const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('event', (num1, num2) => {
    console.log(num1 + num2);
});
eventEmitter.emit('event', 3, 6);

class Person extends EventEmitter {
    constructor (name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let john = new Person('john doe');
john.on('name', () => {
    console.log(`my name is ${john.name}`);
});

john.emit('name');