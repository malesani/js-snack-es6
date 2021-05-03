$(document).ready(function () {
  
  var animali = [

    { nome: "leone", 
      famiglia: "felidi", 
      classe: "mammiferi" 
    },
  
    { nome: "cane",
     famiglia: "canidi",
     classe: "mammiferi" 
    },
  
    { nome: "gallina",
      famiglia: "fasianidi",
      classe: "uccelli" 
    }
  ]

  const mammiferiArray = animali.filter(function(animal){
    if(animal.classe === "mammiferi"){
      return animal
    }
  })

  console.log(mammiferiArray)
  






});