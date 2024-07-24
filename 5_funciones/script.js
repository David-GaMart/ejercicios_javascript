
function eje1(){
        setTimeout(() =>{
            document.getElementById("semaforo").innerHTML = "<img src='./assets/verde.png' class='card-img-top' alt='semaforo'></img>";
            console.log("f1");
                setTimeout(() =>{
                    document.getElementById("semaforo").innerHTML = "<img src='./assets/amarillo.png' class='card-img-top' alt='semaforo'></img>";
                    console.log("f2");
                    setTimeout(() =>{
                        document.getElementById("semaforo").innerHTML = "<img src='./assets/rojo.png' class='card-img-top' alt='semaforo'></img>";
                        console.log("f3");
                        setTimeout(eje1(), 2000);
                    }, 2000);
                }, 2000);
        }, 2000);
}
