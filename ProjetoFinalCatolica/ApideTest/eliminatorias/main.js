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
    createCard("18/12", "domingo", createGame("escudo", "12:00", "escudo"))