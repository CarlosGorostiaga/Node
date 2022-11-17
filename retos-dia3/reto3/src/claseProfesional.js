class Professional{
    constructor(nombre, edad, peso, altura){
        this.age = edad;
        this.name = nombre;
        this.weight = peso;
        this.height = altura;

    }
    printAll(){
        console.log(this);
    }
}
module.exports = {Professional};