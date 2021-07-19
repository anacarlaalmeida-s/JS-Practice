//Faça um programa que calcule quanto Álvaro vem acumulando, em média, por dia.
//A entrada é uma lista que contém quanto Álvaro guarda no cofre a cada dia.

function solucao(lista) {
    const media = lista.reduce((acc, item) => {
        return acc + item;
    })
    console.log(media / lista.length)
}


//resolução

let soma = 0;
for (let item of lista) {
    soma += item;
}
console.log(soma / lista.length);



