const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let valor = 0

rl.question("qual tabuada você quer?: ", (input1) => {
    const tabuada = parseInt(input1)
    if(isNaN(tabuada)){
        console.log("Digite um valor válido!")
    }else{
        for(let i = 0; i <= 10; i++){
            valor = tabuada * i
            console.log(`${tabuada} * ${i} = ${valor}`)
            valor = 0
        }
    }
    rl.close()
})