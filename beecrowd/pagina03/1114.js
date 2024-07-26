let lines = [2200, 1020, 2022, 2002]

for (let i = 0; i > lines.length; i++) {
    if (lines[i] === 2002) {
        console.log('Acesso Permitido');
        return
    } else {
        console.log('Senha Invalida');
    }
}