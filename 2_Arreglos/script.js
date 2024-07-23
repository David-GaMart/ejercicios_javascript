function eje1(){
    alert("abra la consola para continuar")
    let tabla=[];
    for (var i = 0; i < 10; i++){
        let a = Math.floor(Math.random()*11);
        tabla.unshift(a);
        console.log(tabla);
    }
}

function eje2(){
    let tabla = prompt("Inserte una serie de numeros separados por comas para convertirlo en array");
    let arreglo = tabla.split(',');
    let iterador = arreglo[Symbol.iterator]();
    var arreglo2 =[]; 
    for (const value of iterador) {
        arreglo2.push(+value);
    }
    console.log(arreglo2);
}

function eje3(){
    alert("el proceso continua en la consola")
    let arreglo = [10,40,30,20,15,5];
    console.log("el arreglo a acomodar es el siguiente: " + arreglo);
    console.log("queda de la siguiente manera: "+arreglo.sort(function(a,b){return a-b}));
    console.log("teniendo como maximo: " + Math.max(...arreglo));
    console.log("teniendo como minimo: " + Math.min(...arreglo));
}