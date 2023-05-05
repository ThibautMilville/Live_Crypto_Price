fetch('https://api.coingecko.com/api/v3/simple/price?ids=cardano%2Ctether%2Cethereum%2Cbitcoin%2Clitecoin%2Cdogecoin&vs_currencies=usd&include_24hr_change=true')
  .then(response => response.json()) // CONVERT THE RESPONSE TO JAVASCRIPT
  .then(json => { // 'json' CONTAINS THE JSON RESPONSE
    const container = document.querySelector('.container');
    const coins = Object.getOwnPropertyNames(json); // RECUPERATE THE PROPERTY NAMES OF THE JSON OBJECT (HERE, COINS NAMES)

    for (let coin of coins) {
      const coinInfo = json[`${coin}`]; // RECUPERATE THE COIN INFOS
      const price = coinInfo.usd; // RECUPERATE THE PRICE
      const change = coinInfo.usd_24h_change.toFixed(5); // RECUPERATE THE CHANGE (5 NUMBERS AFTER THE DOT)

      container.innerHTML += `
        <div class="coin ${change < 0 ? 'falling' : 'rising'}">
          <div class="coin-logo">
            <img src="images/${coin}.png">
          </div>
          <div class="coin-name">
            <h3>${coin}</h3>
            <span>/USD</span>
          </div>
          <div class="coin-price">
            <span class="price">$${price}</span>
            <span class="change">${change}</span>
          </div>
        </div>
      `;
    }
  });