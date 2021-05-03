$(document).ready(function () {
 
  var persons = [
    { nome: "Mario",
      cognome: "Rossi",
       eta: 60
     },

	  { nome: "Luigi",
      cognome: "Verdi",
      eta: 12
     },

	  { nome: "Silvia",
      cognome: "Neri",
      eta: 25 
    }
  ]

  const guidaPerson = persons.map(function(person){
    if(person.eta >= 18){
      person.capacita = " puo guidare"
    }else{
      person.capacita = " non puo gudiare"
    }
    return person.nome + person.cognome + person.capacita
  })
  
  console.log(guidaPerson)

  
  
  





});