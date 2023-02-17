let graph = document.getElementById('graph').getContext('2d');

let newGraph = new Chart(graph, {
    type: 'line',
    data: {
        labels: ['5Nov', '6Nov', '7Nov', '8Nov', '9Nov', '10Nov', '11Nov', '12Nov', '13Nov', '14Nov'],
        datasets: [
            {
                label: 'ETH',
                data: [358, 298, 283, 324, 475, 593, 683, 639, 617, 283],
                borderColor: 'rgba(48, 159, 215, 1)',
                backgroundColor: 'transparent',
            },
            {
                label: 'BTC',
                data: [283, 309, 483, 624, 675, 530, 380, 239, 127, 283],
                borderColor: 'rgba(123, 99, 210, 1)',
                backgroundColor: 'transparent',
            },
            {
                label: 'BNB',
                data: [628, 587, 603, 636, 575, 462, 486, 270, 276, 615],
                borderColor: 'rgba(92, 151, 218, 1)',
                backgroundColor: 'transparent',
            }
        ]
    },
    options: {
        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    callback: function(value, index, values) {
                        return '$ ' + value;
                    }
                }
            }]
        }
    }
});