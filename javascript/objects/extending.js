// Child objects are derived from parents with extends

class Base {

    constructor() {
        this.name = 'Base';
        this.id = 1;
    }
}

class Derived extends Base {

    constructor() {
        super();
        this.name = 'Derived';
    }

    info() {
        console.log("This is Derived class");
        console.log("Members:");

        console.log(`Name: ${this.name}`);
        console.log(`Id: ${this.id}`);
    }
}

let derived = new Derived();
derived.info();
