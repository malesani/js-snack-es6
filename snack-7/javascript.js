$(document).ready(function(){
  carros = [
    {
      marca : "lancia",
      modello : "y 2021",
      alimentazione : "gpl",
    },
    {
      marca : "audi",
      modello : "a7",
      alimentazione : "diesel",
    },
    {
      marca : "tesla",
      modello : "",
      alimentazione : "elettrico",
    },
    {
      marca : "bmw",
      modello : "x",
      alimentazione : "metano",
    },
    {
      marca : "mercedes",
      modello : "benz 2",
      alimentazione : "benzina",
    },
    {
      marca : "mercedes",
      modello : "benz 3",
      alimentazione : "benzina",
    },
    {
      marca : "mercedes",
      modello : "benz",
      alimentazione : "benzina",
    },
    {
      marca : "alfa romeo",
      modello : "giulia",
      alimentazione : "diesel",
    },
    {
      marca : "audi",
      modello : "a6",
      alimentazione : "diesel",
    },
    {
      marca : "lancia",
      modello : "y",
      alimentazione : "gpl"
    }
  ]
  

  const autoBenzina = carros.filter((element) => {
    if(element.alimentazione === "benzina"){
      return element
    }
  })  

  const autoDiesel = carros.filter((element) => {
    if(element.alimentazione === "diesel"){
      return element
    }
  })
  
  const autoAltre = carros.filter((element) => {
    if(element.alimentazione !== "diesel" && element.alimentazione !== "benzina"){
      return element
    }
  })

  console.log(autoBenzina)
  console.log(autoDiesel)
  console.log(autoAltre)
})