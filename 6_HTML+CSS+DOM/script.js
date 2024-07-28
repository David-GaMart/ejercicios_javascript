var trabajador1 = {
    nombre: "juana",
    productos:0,
    ganancias:0,
    divisa:"usd"
}

var trabajador2 = {
    nombre: "pedro",
    productos:0,
    ganancias:0,
    divisa:"usd"
}


function registro() {
    let nombre = document.getElementById("recipient-name").value;
    let producto1 = document.getElementById("product-acua").value;
    let producto2 = document.getElementById("product-emocion").value;
    let producto3 = document.getElementById("product-alegria").value;
    let producto4 = document.getElementById("product-frescura").value;
    console.log("Sus productos han sido procesados por favor espere su ticket y precione cerrar para continuar");
    console.log("el dia de hoy te atendio: ", nombre);
    console.log("tu compra fue");
    console.log("Producto   Cantidad   Total");
    var t_p1 = producto1*200;
    var t_p2 = producto2*180;
    var t_p3 = producto3*160;
    var t_p4 = producto4*150;
    var total=t_p1+t_p2+t_p3+t_p4;
    //trate de hacer que cuando no tuviera datos un producto que no se visualizara en el consol log pero sigo sin saber como
    var ticket = {
        acua: [+producto1, t_p1],
        emocion: [+producto2, t_p2],
        alegria: [+producto3, t_p3],
        frescura: [+producto4, t_p4]
        }
    
    for(let key in ticket){
        let arreglo = ticket[key]
        var imprecion = [];
        for (let i=0;i< arreglo.length;i++){
            imprecion.push(arreglo[i]);
            //console.log(key, "    ", imprecion);
        }
        console.log(key, "        ", imprecion[0], "       ", imprecion[1]);
    }
    console.log("el total de la compra fue: ", total);
    if(nombre.toLowerCase() == "juana"){
        trabajador1.productos = trabajador1.productos + (+producto1 + +producto2 + +producto3 + +producto4);
        trabajador1.ganancias = trabajador1.ganancias + total;
        console.log("datos guardados en el servidor");
    }else if(nombre.toLowerCase() == "pedro"){
        trabajador2.productos = trabajador2.productos + (+producto1 + +producto2 + +producto3 + +producto4);
        trabajador2.ganancias = trabajador2.ganancias + total;
        console.log("datos guardados en el servidor");
    }
}


//falta ver como puedo guardar y desplegar lo guardado

function desplegar(){
    console.log("Recabando datos del servidor...");
    console.log("El empleado del mes es: ... ");
    if (trabajador1.ganancias > trabajador2.ganancias){
        console.log(trabajador1.nombre, " Que consigo vender lo siguiente ...");
        console.log("vendio un total de ", trabajador1.productos, " productos");
        console.log("Con un valor total de ", trabajador1.ganancias,trabajador1.divisa);
        console.log("Muchas gracias por tu esfuerzo");
    }else if (trabajador2.ganancias > trabajador1.ganancias){
        console.log(trabajador2.nombre, " Que consigo vender lo siguiente ...");
        console.log("vendio un total de ", trabajador2.productos, " productos");
        console.log("Con un valor total de ", trabajador2.ganancias,trabajador2.divisa);
        console.log("Muchas gracias por tu esfuerzo");
    }else if (trabajador1.ganancias === trabajador2.ganancias){
        console.log("Es un empate y consiguieron vender lo siguiente ...");
        console.log("vendio un total de ", trabajador1.productos, " productos");
        console.log("Con un valor total de ", trabajador1.ganancias,trabajador1.divisa);
        console.log("Muchas gracias por su esfuerzo");
    }
}

