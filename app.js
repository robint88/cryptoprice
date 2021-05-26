let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcgbp@trade');
let cryptoPrice = document.getElementById('crypto-price');
let lastPrice = null

ws.onmessage = (res) =>  {
    let cryptoData = JSON.parse(res.data);
    let price = parseFloat(cryptoData.p).toFixed(2);
    cryptoPrice.innerText = `£${price}`;

    cryptoPrice.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';
    lastPrice = price;
}