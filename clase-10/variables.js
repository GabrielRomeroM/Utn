//Tipos de variables
//VAR: Se puede reasignar, se puede redeclarar
var variable;
variable = "Juan",
console.log(variable);

variable = 10;
console.log(variable);

variable = "Pedro";
console.log(variable);

var variable = 1000;

//LET: Se puede reasignar no se puede redeclarar
let variable2

variable2 = "mono";
variable2 = "jaula";
variable2 = 2;

//Const: No se puede reasignar, se puede redeclarar
const variable3 = "zapatilla";
console.log(variable3)

//Puerto
//Url

//Global
var x = 100;
console.log(x);

//Scope
//Implementacion
function varScope(){
    //cree una variable x
    var x = 10;
    //Condicional if
    if(true) {
        //bloque de codigo
        var x = 20;
        console.log(x);
    }
    console.log(x);
}

//Llamado de funcion - Ejecusion
varScope();

//Scope de Let
//te geneadifenetes variables locales con difernetes valores e 
function letScope(){
    let y = 1
    if(true) {
        let y = 2;
        console.log(y);
    }
    console.log(y);
}

letScope();