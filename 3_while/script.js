function eje1(){
    let num = prompt("Por favor ingrasa un numero");
    let n=0;
    let x=0;
    let sob=num-n;
    let arreglo=[];
    while(n < num && sob >= 5){
        x++;
        n=x*5;
        sob=num-n;
        arreglo.push(n);
    }
    alert("por favor abre la consola para el resultado");
    console.log("Los numeros multiplos de 5 por debajo de tu numero elejido son los siguientes:  " + arreglo);
}

function eje2(){
    alert("Ingresa a contunuacion dos numeros entre 1 y 50");
    let num1 = prompt("Ingrese su primer numero");
    let num2 = prompt("Ingrese su segundo numero");
    let grande = Math.max(num1,num2);
    let pequeño = Math.min(num1,num2);
    let n=0;
    while (n < grande){
        n++;
        if (n == pequeño){
            console.log(n);
        }
    }
    console.log(n)
    console.log("¡Lotería!")
}

function eje3(){
    alert("a continuacion introduzca nuneros, para terminar introduzca un 0");
    let num=1;
    let arreglo=[];
    while(num>0){
        num = prompt("Introduzca numeros");
        arreglo.push(num);
    }
    alert("siga el resultado de su operacion en la consola");
    console.log("sus numeros capturados son:  " + arreglo);
}

function eje4(){
    alert("a continuacion introduzca palabra, para terminar deje el espacio en blanco y pulse aceptar");
    let palab="l";
    let arreglo=[];
    while(palab != ""){
        palab = prompt("Introduzca palabras");
        arreglo.push(palab);
    }
    alert("siga el resultado de su operacion en la consola");
    console.log("sus palabras capturadas son:  " + arreglo);
}

function eje5(){
    alert("a continuacion introduzca un dia de la semana");
    let palab="l";
    while(palab.toLowerCase() != "domingo"){
        palab = prompt("Introduzca palabras");
        if(palab.toLowerCase() == "lunes"){
            alert("Yo odio los lunes :'(")
        }else if(palab.toLowerCase() == "viernes"){
            alert("Es viernes y el cuerpo lo sabe")
        }else if (palab.toLowerCase() == "sabado"){
            alert("fiestaaaaa")
        }else if (palab.toLowerCase() == "martes"){
            alert("Buena desicion pero solo es un dia mas")
        }else if (palab.toLowerCase() == "miercoles"){
            alert("Ombligo de semana")
        }else if (palab.toLowerCase() == "jueves"){
            alert("jueves con olor a viernes")
        }else if (palab.toLowerCase() == "domingo"){
            alert("Ve a descansar")
        }else{
            alert("ese no es un dia de la semana por favor intenta de nuevo")
        }
    }
}