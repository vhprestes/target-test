const fs = require('fs');
const xml2js = require('xml2js');



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


// const exercicio3 = (filePath) => {
//     const data = fs.readFileSync(filePath, 'utf8');
//     const faturamento = JSON.parse(data);

//     let menor = faturamento[0].valor;
//     let maior = faturamento[0].valor;
//     let soma = 0;
//     let dias = faturamento.length;

//     for (let i = 0; i < faturamento.length; i++) {
//         // console.log(`Dia ${i + 1}: ${faturamento[i].valor}`);
//         if (faturamento[i].valor.toFixed(2) < menor) {
//             menor = faturamento[i].valor;
//         }
//         if (faturamento[i].valor.toFixed(2) > maior) {
//             maior = faturamento[i].valor;
//         }
//         if (faturamento[i].valor.toFixed(2)) {
//             soma += faturamento[i].valor;
//         }
//     }

//     const media = (soma / dias).toFixed(2);

//     console.log(`Média: ${media}`);
//     console.log(`Menor faturamento: ${menor}`);
//     console.log(`Maior faturamento: ${maior}`);
//     console.log(`Dias com faturamento acima de ${media}: ${faturamento.filter((item) => item.valor > media).length}`);
// }

// exercicio3('./dados.json');


const parseXML = (filePath) => {
    const data = fs.readFileSync(filePath, 'utf8');
    let result;
    xml2js.parseString(`<root>${data}</root>`, (err, parsedData) => {
        if (err) {
            throw new Error('Erro ao parsear XML');
        }
        result = parsedData;
    });
    return result;
};

const exercicio3 = (filePath) => {
    const ext = filePath.split('.').pop();
    let faturamento;

    if (ext === 'json') {
        const data = fs.readFileSync(filePath, 'utf8');
        faturamento = JSON.parse(data);
    } else if (ext === 'xml') {
        const parsedData = parseXML(filePath);
        faturamento = parsedData.root.row.map(item => ({ valor: parseFloat(item.valor[0]) }));
    } else {
        throw new Error('Formato de arquivo não suportado');
    }

    let menor = faturamento[0].valor;
    let maior = faturamento[0].valor;
    let soma = 0;
    let dias = faturamento.length;

    for (let i = 0; i < faturamento.length; i++) {
        if (faturamento[i].valor < menor) {
            menor = faturamento[i].valor;
        }
        if (faturamento[i].valor > maior) {
            maior = faturamento[i].valor;
        }
        if (faturamento[i].valor) {
            soma += faturamento[i].valor;
        }
    }

    const media = (soma / dias).toFixed(2);

    console.log(`Média: ${media}`);
    console.log(`Menor faturamento: ${menor}`);
    console.log(`Maior faturamento: ${maior}`);
    console.log(`Dias com faturamento acima de ${media}: ${faturamento.filter((item) => item.valor > media).length}`);
}

// Exemplo de uso
exercicio3('./dados.json');
exercicio3('./dadosxml.xml');



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