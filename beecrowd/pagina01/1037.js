const nmr = parseFloat(lines[0]);

if (nmr >= 0 && nmr <= 25.00) {
    console.log('Intervalo [0,25]')
} else if (nmr > 25.00 && nmr <= 50.00) {
        console.log('Intervalo (25,50]');
    } else if (nmr > 50.00 && nmr <= 75.00) {
        console.log('Intervalo (50,75]');
    } else if (nmr > 75.00 && nmr <= 100.00) {
        console.log('Intervalo (75,100]');
    } else {
        console.log('Fora de intervalo');
    }