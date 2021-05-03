$(document).ready(function () {
  
  stardNomi = [
    "PLUTO",
    "MICKEY",
    "DEISY",
    "GOOFY",
    "DONALD"
  ]

  const finishNomi = stardNomi.map(function(nome){
   return changeName(nome)
  }) 

  console.log(finishNomi)
  
  

  function changeName(nome){
    let firstCambio = nome.toLowerCase();
    return firstCambio.charAt(0).toUpperCase() + firstCambio.slice(1);
  }

  
})