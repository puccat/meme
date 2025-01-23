// Set up a placeholder chart for the price of CryptoMeme Coin
const ctx = document.getElementById('coinChart').getContext('2d');
const coinChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7'],  // Placeholder time axis
        datasets: [{
            label: 'Price in USD',
            data: [0.001, 0.002, 0.003, 0.002, 0.005, 0.007, 0.008],  // Placeholder price data
            borderColor: '#ff6f61',
            backgroundColor: 'rgba(255, 111, 97, 0.2)',
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 16,
                        family: 'Verdana, sans-serif',
                    },
                    color: '#fff',
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: '#e0e0e0',
                },
                grid: {
                    color: '#333',
                }
            },
            y: {
                ticks: {
                    color: '#e0e0e0',
                },
                grid: {
                    color: '#333',
                }
            }
        }
    }
});
