function calculateProfit() {
    const country = document.getElementById('country').value;
    const revenue = parseFloat(document.getElementById('revenue').value);
    const buyerCost = parseFloat(document.getElementById('buyer-cost').value);
    const warehouseCost = parseFloat(document.getElementById('warehouse-cost').value);
    const extraCost = parseFloat(document.getElementById('extra-cost').value) || 0; // Eğer ekstra maliyet girilmediyse varsayılan değer 0 olarak ayarlanır

    let exchangeRate;
    let countryText;
    switch(country) {
        case 'UAE':
            exchangeRate = 0.27;
            countryText = 'Birleşik Arap Emirlikleri';
            break;
        case 'Saudi Arabia':
            exchangeRate = 0.27;
            countryText = 'Suudi Arabistan';
            break;
        case 'Canada':
            exchangeRate = 0.74;
            countryText = 'Kanada';
            break;
        case 'Mexico':
            exchangeRate = 0.059;
            countryText = 'Meksika';
            break;
        default:
            exchangeRate = 1;
            countryText = '';
    }

    const revenueUSD = revenue * exchangeRate;
    const totalCost = buyerCost + warehouseCost + extraCost;
    const grossProfitUSD = revenueUSD - totalCost;
    const withdrawalCommission = grossProfitUSD * 0.032; // Çekim komisyonu hesabı
    const netProfit = grossProfitUSD - withdrawalCommission; // Net kar hesabı

    const grossProfit = netProfit + withdrawalCommission; // Brüt kar hesabı

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <h3>Toplam Maliyet:</h3>
        <p>${totalCost.toFixed(2)} USD</p>
        <h3>Brüt Kar:</h3>
        <p>${(grossProfit * 0.955).toFixed(2)}</p> <!-- Yüzde 4.5 kesinti yapılarak brüt kar hesaplanır -->
        <h3>Net Kar:</h3>
        <p>${netProfit.toFixed(2)} USD</p>
        <h3>Kar Marjı:</h3>
        <p>${((netProfit / revenueUSD) * 100).toFixed(2)}%</p>
    `;
}

