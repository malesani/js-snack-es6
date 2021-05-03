//funzione  
var pointsPartita = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

var tiri_3 = (min, max) =>{
   return Math.floor(Math.random() * (max - min)) + min;
}



const casuale = () =>{
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let num_cod ="0123456789"
  let string_length = 3;
  let randomstring = '';
  let randomnum = "";
  let totale = "";
  for (let i=0; i<string_length; i++) {
    let rnum = Math.floor(Math.random() * chars.length);
    let rlett = Math.floor(Math.random() * num_cod.length); 
    randomstring += chars.substring(rnum,rnum+1);
    randomnum += num_cod.substring(rlett,rlett+1);
    totale = randomstring + randomnum
  } 
  return totale;  
}

//array
var squadra_basket = [

  {
    
  },

  {
    
  },

  {
    
  },

  {
    
  },

  {
    
  }
]

//ciclo per inserire dentro l'array
for(puntos of squadra_basket){
  
  //cicli valori
  var media_punti_parita = pointsPartita(0,50);
  var media_punti_3 = tiri_3(0, 100);
  var code_players = casuale();
  
  //inserire gli indici e valori
  puntos.code_player = code_players;
  puntos.media_punti = media_punti_parita;
  puntos.tiro_3  = media_punti_3;
}


console.log(squadra_basket)

















  
 




