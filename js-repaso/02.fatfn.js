// funciones que se DECLARAN con al palabara reservada function

function Fn(){
this.prop = 'propiedad'
return this
}


// creamos una funcion dentro de Fn que se va asignar a prototipo (tambien se pueden asignar como propiedad)
Fn.prototype.lala = function FuncionDePrototipo(){}

const r = Fn()
/*
console.log(r);
console.log(r.__proto__);
 */


// FAT ARROW FUNCTION

// ! NO EXISTE EL THIS DENTRO DE LAS FAT ARROW FUNCTION
const fatFn = () => {
  console.log(this)
  const obj = {}
  obj.prop = 'propiedad'
  return obj
}

const r1 = fatFn()

console.log(r1);

// ! LAS FAT ARROW FUNCTION TIENEN UN RETORNO IMPLICITO

const fnR = () => "returno sin llaves"
console.log("retorno implicito =>", fnR())
