function createGame(player1, hour, player2) {
    return `
      <li>
        <img src="../assets/icon-${player1}.svg" alt="Bandeira ${player1}" />
        <strong>${hour}</strong>
        <img src="../assets/icon-${player2}.svg" alt="Bandeira  ${player2}" />
    </li>
    `;
  }
  
  let delay = -0.3; /*variável para animation dos cards*/
  function createCard(date, day, games) {
    delay = delay + 0.5;
    return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date}<span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
      `;
  }
  /*concatenar linhas adicionando sinal de + */
  document.querySelector("#cards").innerHTML =
    createCard("09/12", "quarta", createGame("escudo", "12:00", "escudo")) +

    createCard("09/12", "quarta", createGame("netherlands", "16:00", "argentina")) +

    createCard("10/12", "quinta", createGame("escudo", "12:00", "escudo")) +
    
    createCard("10/12", "quinta", createGame("escudo", "16:00", "escudo"));

    $(function(){ 

      $("#filtro").keyup(function(){
       var texto = $(this).val();
       
       $(".card").each(function(){
         var resultado = $(this).text().toUpperCase().indexOf(' '+texto.toUpperCase());
         
         if(resultado < 0) {
           $(this).fadeOut();
         }else {
           $(this).fadeIn();
         }
       }); 
      
      });
      
      });