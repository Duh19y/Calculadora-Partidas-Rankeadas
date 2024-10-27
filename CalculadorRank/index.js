let saldoVitorias = saberRank(240, 157)


function saberRank(vitorias, derrotas){
    let resultVD = vitorias - derrotas

    

    let rank 
    if (resultVD <= 10){
        rank = "Ferro"
  } else if (resultVD >= 11 && resultVD <= 20){
        rank = "Bronze"
  } else if (resultVD >= 21 && resultVD <= 50){
        rank = "Prata"
  } else if (resultVD >= 51 && resultVD <= 80){
        rank = "Ouro"
  } else if (resultVD >= 81 && resultVD <= 90){
        rank = "Diamante"
  } else if (resultVD >= 91 && resultVD <= 100){
        rank = "Lendário"
  } else if (resultVD >= 101){
        rank = "Imortal"
  }   

        console.log(`O Herói de saldo ${resultVD}, está no nível de ${rank}!`)
     
        return resultVD
  
    
    
}

