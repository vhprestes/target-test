
const exercicio1 = () => {
    let INDICE = 13, SOMA = 0, K = 0; 
    while(K < INDICE) {
        K = K + 1; 
        SOMA = SOMA + K; 
    }
    console.log(SOMA);
}

exercicio1();

const exercicio2 = (numero) => {
    let a = 0, b = 1, c = 0;
    let pertence = false;
    while(c <= numero) {
        if(c === numero) {
            pertence = true;
        }
        c = a + b;
        a = b;
        b = c;
    }
    console.log(pertence ? 'Pertence a sequência de Fibonacci' : 'Não pertence a sequência de Fibonacci');
}


exercicio2(22);


const exercicio3 = (faturamento) => {
    let menor = faturamento[0];
    let maior = faturamento[0];
    let media = 0;
    let soma = 0;
    let dias = faturamento.length - 1;
    for(let i = 0; i < faturamento.length; i++) {
        if(faturamento[i] < menor) {
            menor = faturamento[i];
        }
        if(faturamento[i] > maior) {
            maior = faturamento[i];
        }
        if(faturamento[i]) {
            soma += faturamento[i];
        }
    }
    media = soma / dias;
    console.log(`Média: ${media}`);
    console.log(`Menor faturamento: ${menor}`);
    console.log(`Maior faturamento: ${maior}`);
    console.log(`Dias com faturamento acima da média: ${faturamento.filter(f => f > media).length}`);
}

exercicio3([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 30]);


const FATURAMENTO_MENSAL = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
}

const exercicio4 = (faturamento) => {
    let total = 0;
    for(const key in faturamento) {
        total += faturamento[key];
    }
    for(const key in faturamento) {
        console.log(`${key}: ${((faturamento[key] / total) * 100).toFixed(2)}%`);
    }
}

exercicio4(FATURAMENTO_MENSAL);



const exercicio5 = (string) => {
    let novaString = '';
    for(let i = string.length - 1; i >= 0; i--) {
        novaString += string[i];
    }
    console.log(novaString);
}

exercicio5('teste');