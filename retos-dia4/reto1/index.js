// class Professional {
//     constructor(nombre, edad, peso, altura) {
//         this.age = edad;
//         this.name = nombre;
//         this.weight = peso;
//         this.height = altura;

//     }
//     printAll() {
//         console.log(this);
//     }
// }
// module.exports = { Professional };



function postProfessional() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    let profesional = { name, age, weight, height }


    let url = "http://localhost:3000/profesionales";

    let param = {
        headers: { "Content-type": "application/json; charset= UTF-8" },
        body: JSON.stringify(profesional),
        method: "POST"
    }
    fetch(url, param)
        .then(function (data) {
            return data.json();
        })
        .then(function (data) {
            console.log(data);
            let q = document.getElementById("profesionales")

            q.innerHTML = `
                        <h5>Name: ${data.resultado.name}</h5>
                        <p>Edad: ${data.resultado.age}</p>
                        <p>Peso: ${data.resultado.weight}</p>
                        <p>Altura: ${data.resultado.height}</p>
        `})
        .catch(function (error) {
            console.log(error)
        })

}
function getProfessionals() {
    let id = document.getElementById("proID").value;
    if (id != "") {;
        let url = `http://localhost:3000/profesionales?id=` + id;
        let param = {
            headers: { "Content-type": "application/json; charset=UTF-8" },
            method: "GET"
        }
        fetch(url, param)
            .then(function (data) {
                return data.json();
            })
            .then(function (data) {
                console.log(data)
                document.getElementById("profesionales").innerHTML = `
                <p>Name: ${data.respuesta[0].name}</p>
                <p>Edad: ${data.respuesta[0].age}</p>
                <p>Peso: ${data.respuesta[0].weight}</p>
                <p>Altura: ${data.respuesta[0].height}</p>`
            })
            .catch(function (error) {
                console.log(error);
            })
    } else {
        let url = `http://localhost:3000/profesionales`;
        let param = {
            headers: { "Content-type": "application/json; charset=UTF-8" },
            method: "GET"
        }
        fetch(url, param)
            .then(function (data) {
                return data.json();
            })
            .then(function (data) {
                console.log(data)
                document.getElementById("profesionales").innerHTML= "";
                
                for (i = 0; i < data.respuesta.length; i++) {
                    document.getElementById("profesionales").innerHTML += `
                    <p>Name: ${data.respuesta[i].name}</p>
                    <p>Edad: ${data.respuesta[i].age}</p>
                    <p>Peso: ${data.respuesta[i].weight}</p>
                    <p>Altura: ${data.respuesta[i].height}</p>`
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}
function putProfessional() {

    
    let id = document.getElementById("proID").value;
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    let profesional = { name, age, weight, height , id }

    let param = {
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(profesional),
        method: "PUT"
    }

    let url = `http://localhost:3000/profesionales`;
    fetch(url, param)
        .then(function (data) {
            return data.json();
        })
        // .then(function (data) {
        //     console.log(data);
        //     let q = document.getElementById("profesionales")
        //     q.innerHTML = `
        //         <h5>Name : ${data.resultado.name}</h5>
        //         <p>Edad: ${data.resultado.age}</p>
        //         <p>Peso: ${data.resultado.weight}</p>
        //         <p>Altura: ${data.resultado.height}</p>`
        // })
        .catch(function (error) {
            console.log(error)
        })
}
function deleteProfessional() {
    let id = document.getElementById("proID").value;
    let url = `http://localhost:3000/profesionales?id=${id}`;
    let param = {
        headers: { "Content-type": "application/json; charset=UTF-8" },
        method: "DELETE",
        body : JSON.stringify({id :id})
    }
    fetch(url, param)
        .then(function (data) {
            return data.json();
        })
        .then(function (data) {
            console.log(data)
        })
}


