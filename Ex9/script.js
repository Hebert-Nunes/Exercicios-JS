function Rock() {
  var rn = Math.floor(Math.random() * 3) + 1;
//rn == 1 - Pedra, rn == 2 - Papel, rn == 3- Tesoura
    if(rn == 1) [
        alert('A escolha da máquina foi pedra, o resultado é: Empate' )
    ]
    else {
        if(rn == 2) [
            alert('A escolha da máquina foi papel, o resultado é: Derrota')
        ]

        else [
            alert('A escolha da máquina foi tesoura, o resultado é: Vitória')
        ]
    }
}

function Paper() {
    var rn = Math.floor(Math.random() * 3) + 1;
  //rn == 1 - Pedra, rn == 2 - Papel, rn == 3- Tesoura
      if(rn == 1) [
          alert('A escolha da máquina foi pedra, o resultado é: Vitória' )
      ]
      else {
          if(rn == 2) [
              alert('A escolha da máquina foi papel, o resultado é: Empate')
          ]
  
          else [
              alert('A escolha da máquina foi tesoura, o resultado é: Derrota')
          ]
      }
  }

  function Scissors() {
    var rn = Math.floor(Math.random() * 3) + 1;
  //rn == 1 - Pedra, rn == 2 - Papel, rn == 3- Tesoura
      if(rn == 1) [
          alert('A escolha da máquina foi pedra, o resultado é: Derrota' )
      ]
      else {
          if(rn == 2) [
              alert('A escolha da máquina foi papel, o resultado é: Vitória')
          ]
  
          else [
              alert('A escolha da máquina foi tesoura, o resultado é: Empate')
          ]
      }
  }