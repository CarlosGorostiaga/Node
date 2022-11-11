class Professional{
    constructor(nombre, edad, peso, altura, retirado,){
        this.age = edad;
        this.name = nombre;
        this.weight = peso;
        this.height = altura;
        this.isRetired = retirado;

    }
    printAll(){
        console.log(this);
    }
}
module.exports = {Professional};