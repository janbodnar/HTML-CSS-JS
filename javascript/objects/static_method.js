// static methods are called without
// object creation

class Chrono {

    static now() {

        return new Date().toISOString().slice(0, 10)
    }
}

console.log(Chrono.now());
