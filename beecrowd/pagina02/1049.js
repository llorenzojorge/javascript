const coluna = lines[0];
const classe = lines[1];
const tipo = lines[2];

if (coluna === 'vertebrado' && classe === 'ave' && tipo === 'carnivoro') {
    console.log('aguia');
} else if (coluna === 'vertebrado' && classe === 'ave' && tipo === 'onivoro') {
    console.log('pomba');
} else if (coluna === 'vertebrado' && classe === 'mamifero' && tipo === 'onivoro') {
    console.log('homem');
} else if (coluna === 'vertebrado' && classe === 'mamifero' && tipo === 'herbivoro') {
    console.log('vaca');
} else if (coluna === 'invertebrado' && classe === 'inseto' && tipo === 'hematofago') {
    console.log('pulga');
} else if (coluna === 'invertebrado' && classe === 'inseto' && tipo === 'herbivoro') {
    console.log('lagarta');
} else if (coluna === 'invertebrado' && classe === 'anelideo' && tipo === 'hematofago') {
    console.log('sanguessuga');
} else if (coluna === 'invertebrado' && classe === 'anelideo' && tipo === 'onivoro') {
    console.log('minhoca');
}