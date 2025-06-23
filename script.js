async function getStockPrice() {
  const input = document.getElementById("stockInput").value.trim().toUpperCase();
  const symbol = input + ".NS";
  const proxyUrl = "https://api.allorigins.win/raw?url=";
  const apiUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`;

  try {
    const response = await fetch(proxyUrl + encodeURIComponent(apiUrl));
    const data = await response.json();
    const price = data.chart.result[0].meta.regularMarketPrice;

    document.getElementById("result").innerHTML = `🟢 <strong>${symbol}</strong> price: ₹${price}`;
  } catch (error) {
    console.error(error);
    document.getElementById("result").innerHTML = "❌ Stock not found or API blocked.";
  }
}