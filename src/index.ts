interface IUser {
    nome: string;
}

class coisa {
    nome:string;
    constructor() {
        this.nome = 'João';
    }
}

class punga {
    nome:string;
    constructor() {
        this.nome = 'Pingo';
    }
}

function ex (user:IUser) {

    console.log(`${user.nome}`);
}

ex(new coisa())
ex(new punga())