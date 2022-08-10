"use strict";
class coisa {
    constructor() {
        this.nome = 'João';
    }
}
class punga {
    constructor() {
        this.nome = 'Pingo';
    }
}
function ex(user) {
    console.log(`${user.nome}`);
}
ex(new coisa());
ex(new punga());
