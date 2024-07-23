function eje1(){
    let sign = prompt("¿Eres bellisimo/a?");

    if (sign.toLowerCase() == "si") {
        alert("Ciertamente");
    }
    if (sign.toLowerCase() == "no") {
        alert("No te creo")
    }
    else{
        alert("Responde solo con si o no")
    }
}

function eje2(){
    let sign = prompt("Escribe un número");
    let div = sign % 2;

    if (div == 0) {
        alert("El número es divisible entre 2");
    }
    else {
        alert("No es divisible entre 2");
    }
}

function eje3(){
    let sign = prompt("Escribe un número para determinar si es par");
    let div = sign % 2;

    if (div == 0) {
        alert("Es numero par");
    }
    else {
        alert("No es numero par");
    }
}

function eje4(){
    let sign = prompt("Por favor Introduzca su numero de cliente");

    if (sign == 1000) {
        alert("Ganaste un premio");
    }
    else {
        alert("Lo sentimos, sigue participando");
    }
}

function eje5(){
    let num1 = prompt("Ingrese el primer numero");
    let num2 = prompt("Ingrese el segundo numero");

    if (num1 < num2) {
        alert("el primer numero es menor, verifica en la consola");
        console.log("el numero menor es " + num1)
    }
    else {
        alert("el segundo es menor, verifica en la consola");
        console.log("el numero menor es " + num2)
    }
}

function eje6(){
    let num1 = prompt("Ingrese el primer numero");
    let num2 = prompt("Ingrese el segundo numero");
    let num3 = prompt("Ingrese el tercer numero");
    alert("para el resultado, verifique la consola");
    
    if(num1>num2 && num1>num3){
        console.log("El numero mayor es el " + num1);
    }else if(num2>num1 && num2>num3){
        console.log("El numero mayor es el " + num2);
    }else if(num3>num1 && num3>num2){
        console.log("El numero mayor es el " + num3);
    }else if(num1 == num3){
        console.log("hay dos numeros mayores que tienen el valor de " + num1);
    }else if(num2 == num3){
        console.log("hay dos numeros mayores que tienen el valor de " + num2);
    }else if(num1 == num2){
        console.log("hay dos numeros mayores que tienen el valor de " + num1);
    }else if(num1 == num2 == num3){
        console.log("Todos los numeros son iguales");
    }
}

function eje7(){
    let dia = prompt("Escribe tu dia favorito de la semana");
    
    if(dia.toLowerCase() == "lunes"){
        alert("Yo odio los lunes :'(")
    }else if(dia.toLowerCase() == "viernes"){
        alert("Es viernes y el cuerpo lo sabe")
    }else if (dia.toLowerCase() == "sabado" || dia.toLowerCase() == "domingo"){
        alert("excelente desicion")
    }else if (dia.toLowerCase() == "martes" || dia.toLowerCase() == "miercoles" || dia.toLowerCase() == "jueves"){
        alert("Buena desicion pero solo es un dia mas")
    }else{
        alert("ese no es un dia de la semana por favor intenta de nuevo")
    }
}

function eje8(){
    let calif = prompt("Intoduce una calificacion para este ejercicio del 1 al 10");

    if(calif < 0){
        alert("solo arriba de 0 por favor :'(");
    }
    if(calif > 0 && calif < 6) {
        alert("reprobado");
    }
    if(calif >= 6 && calif <= 8){
        alert("regular");
    }
    if(calif == 9){
        alert("bien");
    }
    if(calif == 10){
        alert("excelente");
    }
}

function eje9(){
    alert("bienvenido, gracias por elegirnos, a continuacion desplegamos nuestro menu de topping para nuestro helado natural")
    let seleccion = prompt("por favor seleccione el el topping del helado de la siguiente lista: Oreo, Kitkat, Brownie");

    if (seleccion.toLowerCase() == "oreo"){
        let aceptar = prompt("el topping de su helado cuesta 10 MXN más, escriba ok para continuar");
        
        if (aceptar.toLowerCase() == "ok"){
            alert("pase al mostrador por su helado y gracias por su compra");
        }
        else {
            alert("su compra fue cancelada, por favor inicie nuevamente")
        }
    }else if (seleccion.toLowerCase() == "kitkat"){
        let aceptar = prompt("el topping de su helado cuesta 15 MXN más, escriba ok para continuar");
        
        if (aceptar.toLowerCase() == "ok"){
            alert("pase al mostrador por su helado y gracias por su compra");
        }
        else {
            alert("su compra fue cancelada, por favor inicie nuevamente")
        }
    }else if (seleccion.toLowerCase() == "brownie"){
        let aceptar = prompt("el topping de su helado cuesta 20 MXN más, escriba ok para continuar");
        
        if (aceptar.toLowerCase() == "ok"){
            alert("pase al mostrador por su helado y gracias por su compra");
        }
        else {
            alert("su compra fue cancelada, por favor inicie nuevamente")
        }
    }else{
        alert("no contamos con ese topping lo sentimos")
        let natural = prompt("contamos con helado sin ningun topping, su valor es de 50 MXN, digite ok para continuar")
        if (natural.toLowerCase() == "ok"){
            alert("pase al mostrador por su helado y gracias por su compra");
        }
        else {
            alert("su compra fue cancelada, por favor inicie nuevamente")
        }
    }
}

function eje10(){
    const cou = 4999;
    const car = 3999;
    const mas = 2999;
    const fb = .20;
    const gg = .15;
    const jsu = .5; 
    alert("Hola, somos DEV.F te invitamos a conocer nuestro menu de carreras para el desarrollo de aplicaciones");
    let programa = prompt("elige una opcion del siguiente listado                                               (Course:$4999 MXN) (Carrera:$3999 MXN) (Master:$2999 MXN)", "escribe aqui solo el nombre del programa");
        if(programa.toLowerCase() == "course"){
            let beca = prompt("Cuentas con alguna beca", "Beca: Facebook, Google o Jesua");
            if(beca.toLowerCase() == "facebook"){
                alert("esta beca te otorga el 20% de descuento, y el curso una duracion de dos meses")
                ptotal=(cou*2)-(cou*2*fb);
                console.log("El precio total es: ",ptotal);
                alert("el precio total lo puedes visualizar en la consola");
                let fin = prompt("si el precio y la duracion son convenitentes para ti, digita ok, en caso contrario, digita salir")
                if(fin.toLowerCase() == "ok"){
                    alert("gracias por tu confianza, pulsa aceptar para terminar el formulario")
                }
                else{
                    alert("Tenemos mas programas para ti, puedes inicar otra vez e intentar con otro")
                }
            }else if(beca.toLowerCase() == "google"){
                alert("esta beca te otorga el 20% de descuento, y el curso una duracion de dos meses")
                ptotal=(cou*2)-(cou*2*gg);
                console.log("El precio total es: ",ptotal);
                alert("el precio total lo puedes visualizar en la consola");
                let fin = prompt("si el precio y la duracion son convenitentes para ti, digita ok, en caso contrario, digita salir")
                if(fin.toLowerCase() == "ok"){
                    alert("gracias por tu confianza, pulsa aceptar para terminar el formulario")
                }
                else{
                    alert("Tenemos mas programas para ti, puedes inicar otra vez e intentar con otro")
                }
            }else if(beca.toLowerCase() == "jesua"){
                alert("esta beca te otorga el 20% de descuento, y el curso una duracion de dos meses")
                ptotal=(cou*2)-(cou*2*jsu);
                console.log("El precio total es: ",ptotal);
                alert("el precio total lo puedes visualizar en la consola");
                let fin = prompt("si el precio y la duracion son convenitentes para ti, digita ok, en caso contrario, digita salir")
                if(fin.toLowerCase() == "ok"){
                    alert("gracias por tu confianza, pulsa aceptar para terminar el formulario")
                }
                else{
                    alert("Tenemos mas programas para ti, puedes inicar otra vez e intentar con otro")
                }
            }
        }else if(programa.toLowerCase() == "carrera"){
            let beca = prompt("Cuentas con alguna beca", "Beca: Facebook, Google o Jesua");
            if(beca.toLowerCase() == "facebook"){
                alert("esta beca te otorga el 20% de descuento, y el curso una duracion de dos meses")
                ptotal=(car*2)-(car*2*fb);
                console.log("El precio total es: ",ptotal);
                alert("el precio total lo puedes visualizar en la consola");
                let fin = prompt("si el precio y la duracion son convenitentes para ti, digita ok, en caso contrario, digita salir")
                if(fin.toLowerCase() == "ok"){
                    alert("gracias por tu confianza, pulsa aceptar para terminar el formulario")
                }
                else{
                    alert("Tenemos mas programas para ti, puedes inicar otra vez e intentar con otro")
                }
            }else if(beca.toLowerCase() == "google"){
                alert("esta beca te otorga el 20% de descuento, y el curso una duracion de dos meses")
                ptotal=(car*2)-(car*2*gg);
                console.log("El precio total es: ",ptotal);
                alert("el precio total lo puedes visualizar en la consola");
                let fin = prompt("si el precio y la duracion son convenitentes para ti, digita ok, en caso contrario, digita salir")
                if(fin.toLowerCase() == "ok"){
                    alert("gracias por tu confianza, pulsa aceptar para terminar el formulario")
                }
                else{
                    alert("Tenemos mas programas para ti, puedes inicar otra vez e intentar con otro")
                }
            }else if(beca.toLowerCase() == "jesua"){
                alert("esta beca te otorga el 20% de descuento, y el curso una duracion de dos meses")
                ptotal=(car*2)-(car*2*jsu);
                console.log("El precio total es: ",ptotal);
                alert("el precio total lo puedes visualizar en la consola");
                let fin = prompt("si el precio y la duracion son convenitentes para ti, digita ok, en caso contrario, digita salir")
                if(fin.toLowerCase() == "ok"){
                    alert("gracias por tu confianza, pulsa aceptar para terminar el formulario")
                }
                else{
                    alert("Tenemos mas programas para ti, puedes inicar otra vez e intentar con otro")
                }
            }
        }else if(programa.toLowerCase() == "master"){
            let beca = prompt("Cuentas con alguna beca", "Beca: Facebook, Google o Jesua");
            if(beca.toLowerCase() == "facebook"){
                alert("esta beca te otorga el 20% de descuento, y el curso una duracion de dos meses")
                ptotal=(mas*2)-(mas*2*fb);
                console.log("El precio total es: ",ptotal);
                alert("el precio total lo puedes visualizar en la consola");
                let fin = prompt("si el precio y la duracion son convenitentes para ti, digita ok, en caso contrario, digita salir")
                if(fin.toLowerCase() == "ok"){
                    alert("gracias por tu confianza, pulsa aceptar para terminar el formulario")
                }
                else{
                    alert("Tenemos mas programas para ti, puedes inicar otra vez e intentar con otro")
                }
            }else if(beca.toLowerCase() == "google"){
                alert("esta beca te otorga el 20% de descuento, y el curso una duracion de dos meses")
                ptotal=(mas*2)-(mas*2*gg);
                console.log("El precio total es: ",ptotal);
                alert("el precio total lo puedes visualizar en la consola");
                let fin = prompt("si el precio y la duracion son convenitentes para ti, digita ok, en caso contrario, digita salir")
                if(fin.toLowerCase() == "ok"){
                    alert("gracias por tu confianza, pulsa aceptar para terminar el formulario")
                }
                else{
                    alert("Tenemos mas programas para ti, puedes inicar otra vez e intentar con otro")
                }
            }else if(beca.toLowerCase() == "jesua"){
                alert("esta beca te otorga el 20% de descuento, y el curso una duracion de dos meses")
                ptotal=(mas*2)-(mas*2*jsu);
                console.log("El precio total es: ",ptotal);
                alert("el precio total lo puedes visualizar en la consola");
                let fin = prompt("si el precio y la duracion son convenitentes para ti, digita ok, en caso contrario, digita salir")
                if(fin.toLowerCase() == "ok"){
                    alert("gracias por tu confianza, pulsa aceptar para terminar el formulario")
                }
                else{
                    alert("Tenemos mas programas para ti, puedes inicar otra vez e intentar con otro")
                }
            }
        }else {
            alert("Tu eleccion fue incorrecta, intentalo mas tarde")
        }
}

function eje11(){
    let tipo = prompt("Le ayudaremos a calcular su total a pagar, por favor digite su tipo de carro: coche, moto o autobus");
    let kms = prompt("digite sus kilometros recorridos");
    if(kms <= 100){
        if(tipo.toLowerCase() == "coche"){
            let total = (.20 * kms)+5;
            alert("Verifica tu total a pagar en la consola")
            console.log("Tu total a pagar es de: ", total);
        }else if(tipo.toLowerCase() == "moto"){
            let total = (.10 * kms)+5;
            alert("Verifica tu total a pagar en la consola")
            console.log("Tu total a pagar es de: ", total);
        }else if(tipo.toLowerCase() == "autobus"){
            let total = (.50 * kms)+5;
            alert("Verifica tu total a pagar en la consola")
            console.log("Tu total a pagar es de: ", total);
        }
    }else{
        if(tipo.toLowerCase() == "coche"){
            let total = (.20 * kms)+10;
            alert("Verifica tu total a pagar en la consola")
            console.log("Tu total a pagar es de: ", total);
        }else if(tipo.toLowerCase() == "moto"){
            let total = (.10 * kms)+10;
            alert("Verifica tu total a pagar en la consola")
            console.log("Tu total a pagar es de: ", total);
        }else if(tipo.toLowerCase() == "autobus"){
            let total = (.50 * kms)+10;
            alert("Verifica tu total a pagar en la consola")
            console.log("Tu total a pagar es de: ", total);
        }
    }
}