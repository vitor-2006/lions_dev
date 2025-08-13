const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const listaJogo = []
exibirMenu()

function exibirMenu() {
    console.log("qual opção você vai usar?: \n1 -> cadastrar jogo \n2 -> exibir jogos \n3 -> buscar jogo \n4 -> fechar programa")
    rl.question("escolha a opção: ", (input) => {
        const op = parseInt(input)
        switch (op) {
            case 1:
                cadastrar()
                break
                
                case 2: 
                exibir()
                break
                
                case 3: 
                buscar()
                break
                
                case 4: 
                console.log('até mais!')
                rl.close()
                break
           
                default:
                console.log('Operação inválida! Tente novamente')
                exibirMenu()
                break
        }
    })
}

function cadastrar() {
    rl.question('digite o nome do jogo: ', (nome) => {
        rl.question('digite o nome do criador: ', (criador) => {
            rl.question('digite o valor do jogo: ', (valor) =>{
                if(valor < 0 || isNaN(valor)){
                    console.log('valor inválido!')
                    return cadastrar()
                }
                const lista = {
                    nome,
                    criador,
                    valor: parseFloat(valor)
                }
                listaJogo.push(lista)
                console.log('Jogo registrado com sucesso! \nDeseja cadastar outro? (s/n)')
                rl.question('', (resposta) =>{
                    resposta.toLowerCase() === 's'
                    ? cadastrar()
                    : exibirMenu()
                })
            })
        })
    })
}


function exibir() {
    if(listaJogo.length === 0){
        console.log('nenhum jogo cadastrado! \nPrecione enter para voltar')
        return rl.question('', exibirMenu)
    }else{
    console.log('Lista de usuários: ')
    listaJogo.forEach((lista, index) => {
        console.log(`${index + 1}. Nome: ${lista.nome} \ncriador: ${lista.criador} \nvalor: R$${lista.valor.toFixed(2)}\n`)
        })
    }
    console.log('precione enter para voltar')
    rl.question('', exibirMenu)
}

function buscar() {
    if(listaJogo.length === 0){
        console.log('nenhum jogo cadastrado! \nPrecione enter para voltar')
        return rl.question('', exibirMenu)
    }
    rl.question('digite o nome do jogo: ', (jogo) => {
        const nomebusca = jogo
        const jogobusca = listaJogo.find(jogo => jogo.nome === nomebusca)
        console.log(jogobusca.nome)

        const resultado = listaJogo.filter(jogo => jogo.nome === nomebusca)
        console.log(resultado)
        console.log('precione enter para voltar')
        rl.question('', exibirMenu)
    })
}