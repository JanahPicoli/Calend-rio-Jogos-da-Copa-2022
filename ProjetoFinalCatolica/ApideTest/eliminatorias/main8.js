function createGame(player1, score1, versus, score2, player2) {
  return `
    <li>
      <img src="../assets/icon-${player1}.svg" alt="Bandeira ${score1} ${ player1}" />
      <strong>${score1}</strong>
      <strong>${versus}</strong>
      <strong>${score2}</strong>
      <img src="../assets/icon-${player2}.svg" alt="Bandeira ${score2} ${player2}" />
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
    createCard("03/12", "sábado", createGame("netherlands", "3", "x", "1", "united states")) +

    createCard("03/12", "sábado", createGame("argentina", "2", "x", "1", "australia"))+

    createCard("04/12", "domingo", createGame("france","", "12:00","", "poland")) +

    createCard("04/12", "domingo", createGame("england","", "16:00", "","senegal"))+

    createCard("05/12", "segunda", createGame("japan", "", "12:00", "", "croatia")) +

    createCard("05/12", "segunda", createGame("brazil", "", "16:00", "", "south korea"))+

    createCard("06/12", "terça", createGame("morocco", "", "12:00", "", "spain")) +

    createCard("06/12", "terça", createGame("portugal", "", "16:00", "", "switzerland"));

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