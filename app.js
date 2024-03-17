/*let numeroSecreto = generarNumeroSecreto();//variable global
let intentos = 1;*/
let numeroSecreto = 0;
let intentos = 0;//se dejan estas 2 variables de este modo para que queden de manera global y sus valores se modifican a lo largo del codigo NO AQUI
let listaNumerosSorteados = [];//se agrega esta variable para gemerar una lista de numeros que ya han sido sorteados
let numeroMaximo = 10;//es necesario agregar esta variable para darle una salida a la recursividad de la funcion generar numero secreto

//let titulo = document.querySelector("h1");//h1 se refiere a un titulo. Esta variable pasa a formar parte de la funcion asignar texto elemento
//el document es como enlazamos el javascript con el archivo html, como un puente
//el query selector le pasa un nombre a la etiqueta h1, asi se le atribuye a la variable titulo. NO es un texto, es un OBJETO. Algo que se puede hacer es colocarle un texto
//titulo.innerHTML = "Juego del numero secreto"; //hay que correr el html con live server para que se actualice en cuanto detecte los cambios en el VS

//esta declaracion de variable igualmente paso a ser parte de la funcion automatizada de asignacion de texto a un elemento
//let parrafo = document.querySelector("p"); //indicando la variable, y utilizando el query, se seleccionan las etiquetas del codigo html con el que s eva a trabajar
//parrafo.innerHTML = "Indica un número del 1 al 10";//describiendo la etiqueta html mas el inner html, es como se asignara el texto que irá dentro de esas cajas o etiquetas en el codigo html
//DOM = Document Object Model
//En JS hay EVENTOS, los que se inician o corren su proceso hasta que el usuario hace una actividad determinada
//Todos los eventos en JS inician con ON y tenemos variadas opciones para eso
//Se puede hacer combinacion de codigo JS en HTML, sin embargo, es una buena practica dejar todo el codigo JS en dicho programa

function asignarTextoElemento (elemento, texto){//se asignan estas variables en la funcion para que sea generica y nos sirva de manera automatizada
    let elementoHTML = document.querySelector(elemento);//las comillas dentro de los parentesis ya no se usan porque hace referencia a una variable y no a un valor literal
    elementoHTML.innerHTML = texto;//de esta manera a funcion recibe parametros y no texto en especifico, y asi se puede reutilizar en diferentes momentos
    return;//se agrega esta parte solo por ser buena practica de programación, esto se rige bajo los mismos principios que en lenguaje C
}//la funcion recibe dos parametros, el elemento html, y el texto

function verificarIntento(){//declaracion de funcion, algo similar a C. En el codigo HTML se ejecuta la funcion, aqui se declara
    //let numeroUsuario = document.querySelector("input");//input es una etiqueta de codigo dentro del html en la linea 24
    //input representa la caja de texto. En este ejemplo al input se le asignó un id para poder llamarlo desde JS con una funcion diferente a querySelector
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);//colocamos PARSEINT para forzar que este string se haga numero
    /*console.log(typeof(numeroUsuario));//esto es para ver el tipo de dato que se está manejando
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));//al hacer esto nos damos cuenta que se está comparando un string con un numero
    console.log(numeroUsuario);
    console.log(numeroUsuario === numeroSecreto);//de esta manera se utiliza un booleano. Al agregar "3=" se asegura la comparacion de dos tipos de datos identicos*/
    
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);//recordando que se usa $ para invocar un parametro o variable
        document.getElementById('reiniciar').removeAttribute('disabled');//removemos atributo a caja de texto NUEVO JUEGO una vez que se acierta el numero secreto
    } else{
        //el usuario NO acerto
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();//selimpia la caja solo cuando el usuario NO acierta
    }
    return;//buena practica
}

function limpiarCaja(){//funcion para limpiar caja de texto con cada intento
    let valorCaja = document.querySelector('#valorUsuario').value = '';//nuevamente se usa el id del input para buscar el valor de la caja
    //valorCaja.value = ''; para optimizar el codigo,se deja como se muestra en la linea 49
}

function generarNumeroSecreto() {//se creará funcion para poder generar un numero aleatorio
    //let numeroSecreto = Math.floor (Math.random()*10)+1;//math floor => para retornar parte sin decimal  math.random=> genera numero aleatorio
    //al declarar variable dentro de la funcion, se puede prestar a confusion, por lo que es mejor optar por la opcion ternaria, que es la funcion posterior al return
    //return Math.floor (Math.random()*10)+1;//variable de bloque o local//se cambia nombre de la variable para utilizar arreglos
    let numeroGenerado = Math.floor (Math.random()*numeroMaximo)+1;//si el numero generado esta en la lista se hace un operacion, si no no
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros?
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }else {
        if(listaNumerosSorteados.includes(numeroGenerado)){//esta funcion es para ver si el numero generado se encuentra en la lista
            return generarNumeroSecreto();
        }else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
//con la definicion de la funcion de esa manera se ahorran varias lineas de codigo

function condicionesIniciales(){//en esta funcion se guardan los mensajes iniciales
    asignarTextoElemento("h1", "Juego del numero secreto!!");//en la convocacion de la funcion es donde asignamos en especifico lo que se va a llamar en dicha ocasion
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar numero aleatorio
     //inicializar numero de intentos
     condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');//con esta linea se selecciona el boton reiniciar para iniciar la fucion reiniciarJuego
}

condicionesIniciales();

//console.log te imprime datos en la consola del navegador, no del programa en si, revisa el console control dentro del navegador
//para visualizar las actividades de la consola, F12 es un buen atajo

  