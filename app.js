// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; //Creación de lista

// esta función agrega los nombres y borra el recuadro
function agregarAmigo() {
    let nombreDeamigo = document.getElementById("amigo").value;
        if (nombreDeamigo == "") {
            alert("Debe ingresar un nombre valido");
            document.getElementById("amigo").focus(); //linea para poner el cursor en el cuadro de nombre
        }
             else {
                    amigos.push(nombreDeamigo);
                    document.getElementById("amigo").value="";//para borrar el recuadro luego de ingresar nombre
                    document.getElementById("amigo").focus();//linea para poner el cursor en el cuadro de nombre
                    despeglarLista(); //Se ejecuta la función creada más abajo, en donde muestra nombre en HTML
                }
                console.log(nombreDeamigo);//Lo agregue para saber si servia
                console.log(amigos);//Lo agregue para saber si servia
}

// esta función muestra la lista de amigos en la pagina.
function despeglarLista() {
    let lista = document.getElementById("listaAmigos"); //obtengo el contenedor
    lista.innerHTML =""; //limpiar la lista
    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement ("li"); //creando un elemento para cada amigo
        li.textContent = amigos[i]; //Asignando nombre de amigo como texto del elemento 
        lista.appendChild(li); //Agrego cada elemento a la lista
    }
}   

//esta funcion elige al amigo sorteado
function sortearAmigo() {
    if (amigos.length === 0){
        document.getElementById("resultado").innerHTML = "No hay amigos"; //No ejecutarse si no hay amigos y mensaje
    }
      else{
            let numeroAleatorio = Math.floor(Math.random()*amigos.length); //Se elije número aleatorio.
            let amigoElegido = amigos[numeroAleatorio]; //Se elije posición aleatoria de los amigos.
            document.getElementById("resultado").innerHTML = `El amigo elegido es ${amigoElegido}`; //Mensaje de amigo elegido
        }
}
