const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const listaJogo = []
exibirMenu()

function exibirMenu() {
    console.log("qual opção você vai usar?: \n1 -> cadastrar jogo \n2 -> exibir jogos \n3 -> editar jogo \n4 -> remover jogo \n5 -> fechar programa\n")
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
                editar()
                break
                
                case 4: 
                excluir()
                break
            
            case 5: 
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
    
function editar() {
    if(listaJogo.length === 0){
        console.log('nenhum jogo cadastrado! \nPrecione enter para voltar')
        rl.question('', exibirMenu)
    }

    console.log('Lista de usuários: ')
    listaJogo.forEach((lista, index) => {
        console.log(`${index + 1}. Nome: ${lista.nome} \nCriador: ${lista.criador} \nvalor: R$${lista.valor.toFixed(2)}\n`)
    })

    rl.question('digite o número do jogo que você quer editar: ', (input) => {
        let i = parseInt(input, 10) - 1
        if(i >= 0 && i < listaJogo.length){
            rl.question('digite o novo nome do jogo: ', (nome) => {
                rl.question('digite o novo nome do criador: ', (criador) => {
                    rl.question('digite o novo valor do jogo: ', (valor) =>{
                        if(valor < 0 || isNaN(valor)){
                            console.log('valor inválido!')
                            return editar()
                        }

                        listaJogo[i] = {
                            nome,
                            criador,
                            valor: parseFloat(valor)
                        }
                       
                        console.log('Jogo editado com sucesso! \nDeseja editar outro? (s/n)')
                        rl.question('', (resposta) =>{
                            resposta.toLowerCase() === 's'
                            ? editar()
                            : exibirMenu()
                        })
                    })
                })
            })
        }else{
            console.log('posição inválida!\n')
            console.log('precione enter para voltar')
            rl.question('', exibirMenu)
        }
    })  
}

function excluir() {
    if(listaJogo.length === 0){
        console.log('nenhum jogo cadastrado! \nPrecione enter para voltar')
        return rl.question('', exibirMenu)
    }

    console.log('Lista de usuários: ')
    listaJogo.forEach((lista, index) => {
        console.log(`${index + 1}. Nome: ${lista.nome} \nCargo: ${lista.criador} \nSalário: R$${lista.valor.toFixed(2)}\n`)
    })

    rl.question('digite o número do jogo que você quer excluir: ', (input) => {
        const i = parseInt(input, 10) - 1
        if(i >= 0 && i < listaJogo.length){
            const [removido] = listaJogo.splice(i, 1)

            console.log('Jogo deletado com sucesso! \nDeseja deletar outro? (s/n)')
            rl.question('', (resposta) =>{
                resposta.toLowerCase() === 's'
                ? excluir()
                : exibirMenu()
            })
        }else{
            console.log('posição inválida!\n')
            console.log('precione enter para voltar')
            rl.question('', exibirMenu)
        }
    })  
}
