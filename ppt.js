const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question("Pedra,Papel ou tesoura?: ", (input) => {
    const escolharobo = Math.floor(Math.random() * 3)
    const opcoes = ['pedra', 'papel', 'tesoura']
    const escolhausuario = input.toLowerCase()
    
    if(escolhausuario !== 'pedra' || 'papel' || 'tesoura'){
        console.log('erro')
        process.exit()
    }

    if(escolhausuario === 'pedra' && opcoes[escolharobo] === 'tesoura' || escolhausuario === 'papel' && opcoes[escolharobo] === 'pedra' || escolhausuario === 'tesoura' && opcoes[escolharobo] === 'papel'){
        console.log(`escolha computador: ${opcoes[escolharobo]} \nescolha usuário: ${escolhausuario} \nvocê ganhou!`)
    }else if(escolhausuario === 'pedra' && opcoes[escolharobo] === 'papel' || escolhausuario === 'papel' && opcoes[escolharobo] === 'tesoura' || escolhausuario === 'tesoura' && opcoes[escolharobo] === 'pedra'){
        console.log(`escolha computador: ${opcoes[escolharobo]} \nescolha usuário: ${escolhausuario} \nvocê perdeu!`)
    }else{
        console.log(`escolha computador: ${opcoes[escolharobo]} \nescolha usuário: ${escolhausuario} \nempate!`)
    }
    rl.close()
})