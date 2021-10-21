const chanchosFelices = ['chancho 1', 'chancho 2', 'chancho 3']
export const chanchosTristes = ['triste 1', 'triste 2']
export const otrosChanchos = []

const fn1 = () => {
  console.log('soy la funcion 1');
}

const fn2 = () => {
  console.log('soy la funcion 2');
}

// ! Forma vieja
/* module.exports = {
  chanchosFelices,
  chanchosTristes
} */


// ! Formar actual

export default chanchosFelices;
export { fn1, fn2}