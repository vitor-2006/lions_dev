const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let funcionarios = []
exibirMenu()

function exibirMenu() {
    console.log("qual opção você vai usar?: \n1 -> cadastrar usuário \n2 -> exibir usuários \n3 -> editar usuário \n4 -> remover usuário \n5 -> fechar programa\n")
    rl.question("escolha a opção", (input) => {
        const op = parseInt(input)
        switch (op) {
            case 1:
                cadastrarFuncionario()
                break
                
                case 2: 
                exibirFuncionario()
                break
                
                case 3: 
                editarFuncionario()
                break
                
                case 4: 
                excluirFuncionario()
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

function cadastrarFuncionario() {
    rl.question('digite o nome do usuário: ', (nome) => {
        rl.question('digite o cargo do usuário: ', (cargo) => {
            rl.question('digite o salário do usuário: ', (salario) =>{
                funcionarios.push({nomes: nome, cargos: cargo, salarios: parseFloat(salario)})
                console.log('Funcionário registrado com sucesso!\n')
                exibirMenu()
            })
        })
    })
}


function exibirFuncionario() {
    if(funcionarios.length === 0){
    console.log('nenhum usuário cadastrado!')
    exibirMenu()
    }else{
    console.log('Lista de usuários: ')
    funcionarios.forEach((funcionario, index) => {
        console.log(`${index + 1}. Nome: ${funcionario.nomes} \nCargo: ${funcionario.cargos} \nSalário: R$${funcionario.salarios.toFixed(2)}\n`)
        exibirMenu()
        })
    }
}
    
function editarFuncionario() {
    if(funcionarios.length === 0){
        console.log('nenhum usuário cadastrado!')
        exibirMenu()
    }else{
        rl.question('digite a posição do usário que você quer editar', (input) => {
            i = parseInt(input)
            if(funcionarios.length > i || funcionarios.lengh < i){
                console.log('posição inválida\n')
            }else{
                funcionarios.splice(i-1, 1)
                rl.question('digite o nome do usuário: ', (nome) => {
                    rl.question('digite o cargo do usuário: ', (cargo) => {
                        rl.question('digite o salário do usuário:', (salario) =>{
                            funcionarios.push({nomes: nome, cargos: cargo, salario: parseFloat(salario)})
                            console.log('Funcionário editado com sucesso!\n')
                            exibirMenu()
                        })
                    })
                })
            }
        })   
    }
}

function excluirFuncionario() {
    if(funcionarios.length === 0){
        console.log('nenhum usuário cadastrado!')
        exibirMenu()
    }else{
        rl.question('digite a posição do usário que você quer editar', (input) => {
            i = parseInt(input)
            if(funcionarios.length > i || funcionarios.lengh < i){
                console.log('posição inválida!\n')
            }else{
                funcionarios.splice(i-1, 1)
                console.log('Funcionário excluido com sucesso!\n')
                exibirMenu()
            }
        })
    }
}
