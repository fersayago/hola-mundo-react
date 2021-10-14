// funciones que se DECLARAN con al palabara reservada function
function Fn(){
  this.prop = 'propiedad'
  return this
}

// creamos una funcion dentro de Fn que se va asignar a prototipo (tambien se pueden asignar como propiedad)
Fn.proptotype.lala = function FuncionDePrototipo(){}

const r = Fn()
console.log(r);
