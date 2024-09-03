
// 1)	Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0; 
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA); 
// Ao final do processamento, qual será o valor da variável SOMA? 

// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. 

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código; 

// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne: 
// • O menor valor de faturamento ocorrido em um dia do mês; 
// • O maior valor de faturamento ocorrido em um dia do mês; 
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal. 

// IMPORTANTE: 
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal; 
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média; 

// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado: 
// •	SP – R$67.836,43 
// •	RJ – R$36.678,66 
// •	MG – R$29.229,88 
// •	ES – R$27.165,48 
// •	Outros – R$19.849,53 

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  

//  5) Escreva um programa que inverta os caracteres de um string. 

// IMPORTANTE: 
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código; 
// b) Evite usar funções prontas, como, por exemplo, reverse; 


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