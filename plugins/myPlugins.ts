export default defineNuxtPlugin((nuxtApp) =>{
  return {
    provide:{
      sayHello: (msg:string) => console.log(`HELLO ${msg}`),
    }
  }
});