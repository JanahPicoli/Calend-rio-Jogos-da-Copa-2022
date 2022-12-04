function createGame(player1, score1, versus, score2, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira ${score1} ${ player1}" />
      <strong>${score1}</strong>
      <strong>${versus}</strong>
      <strong>${score2}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira ${score2} ${player2}" />
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
  createCard("20/11", "domingo", createGame("qatar", "0", "x", "2", "ecuador")) +
  createCard("21/11", "segunda", createGame("england",  "6", "x", "2", "iran")) +
  createCard("21/11", "segunda", createGame("senegal", "0", "x", "2", "netherlands")) +
  createCard("21/11", "segunda", createGame("united states", "1", "x", "1", "wales")) +
  createCard("22/11", "terça", createGame("argentina", "1", "x", "2", "saudi arabia")) +
  createCard("22/11", "terça", createGame("denmark",  "0", "x", "0", "tunisia")) +
  createCard("22/11", "terça", createGame("mexico",  "0", "x", "0", "poland")) +
  createCard("22/11", "terça", createGame("france",  "4", "x", "1", "australia")) +
  createCard("23/11", "quarta", createGame("morocco",  "0", "x", "0", "croatia")) +
  createCard("23/11", "quarta", createGame("germany",  "1", "x", "2", "japan")) +
  createCard("23/11", "quinta", createGame("spain",  "7", "x", "0", "costa rica")) +
  createCard("23/11", "quarta", createGame("belgium",  "1", "x", "0", "canada")) +
  createCard("24/11", "quinta", createGame("switzerland",  "1", "x", "0", "cameroon")) +
  createCard("24/11", "quinta", createGame("uruguay",  "0", "x", "0", "south korea")) +
  createCard("24/11", "quinta", createGame("portugal",  "3", "x", "2", "ghana")) +
  createCard("24/11", "quinta", createGame("brazil",  "2", "x", "0", "serbia")) +
  createCard("25/11", "sexta", createGame("wales",  "0", "x", "2", "iran")) +
  createCard("25/11", "sexta", createGame("qatar",  "1", "x", "3", "senegal")) +
  createCard("25/11", "sexta", createGame("netherlands",  "1", "x", "1", "ecuador")) +
  createCard("25/11", "sexta", createGame("england",  "0", "x", "0", "united states")) +
  createCard("26/11", "sábado", createGame("tunisia",  "0", "x", "1", "australia")) +
  createCard("26/11", "sábado", createGame("poland",  "2", "x", "0", "saudi arabia")) +
  createCard("26/11", "sábado", createGame("france",  "2", "x", "1","denmark")) +
  createCard("26/11", "sábado", createGame("argentina",  "2", "x", "0", "mexico")) +
  createCard("27/11", "domingo", createGame("japan",  "0", "x", "1", "costa rica")) +
  createCard("27/11", "domingo", createGame("belgium",  "0", "x", "2", "morocco")) +
  createCard("27/11", "domingo", createGame("croatia",  "4", "x", "1", "canada")) +
  createCard("27/11", "domingo", createGame("spain",  "1", "x", "1", "germany")) +
  createCard("28/11", "segunda", createGame("cameroon",  "3", "x", "3", "serbia")) +
  createCard("28/11", "segunda", createGame("south korea",  "2", "x", "3", "ghana")) +
  createCard("28/11", "segunda", createGame("brazil",  "1", "x", "0", "switzerland")) +
  createCard("28/11", "segunda", createGame("portugal",  "2", "x", "0", "uruguay")) +
  createCard("29/11", "terça", createGame("ecuador", "1", "x", "2", "senegal")) +
  createCard("29/11", "terça", createGame("netherlands", "2", "x", "0", "qatar")) +
  createCard("29/11", "terça", createGame("iran", "0", "x", "1", "united states")) +
  createCard("29/11", "terça", createGame("wales", "0", "x", "3", "england")) +
  createCard("30/11", "quarta", createGame("tunisia", "1", "x", "0", "france")) +
  createCard("30/11", "quarta", createGame("australia", "1", "x", "0", "denmark")) +
  createCard("30/11", "quarta", createGame("poland", "0", "x", "2", "argentina")) +
  createCard("30/11", "quarta", createGame("saudi arabia", "1", "x", "2", "mexico")) +
  createCard("01/12", "quinta", createGame("croatia", "0", "x", "0", "belgium")) +
  createCard("01/12", "quinta", createGame("canada", "1", "x", "2", "morocco")) +
  createCard("01/12", "quinta", createGame("japan", "2", "x", "1", "spain")) +
  createCard("01/12", "quinta", createGame("costa rica", "2", "x", "4", "germany")) +
  createCard("02/12", "sexta", createGame("south korea", "2", "x", "1", "portugal")) +
  createCard("02/12", "sexta", createGame("ghana", "0", "x", "2", "uruguay")) +
  createCard("02/12", "sexta", createGame("serbia", "2", "x", "3", "switzerland")) +
  createCard("02/12", "sexta", createGame("cameroon","1", "x", "0", "brazil"));

  // função para busca dos jogos por data
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