const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let funcionarios = {
    nome: null,
    cargo: null,
    salario: null
}
exibirMenu()

function exibirMenu() {
    console.log("qual opção você vai usar?: \n1 -> cadastrar usuário \n2 -> exibir usuários \n3 -> editar usuário \n4 -> remover usuário \n5 -> fechar programa")
    rl.question("escolha a opção", (input) => {
        cadastrarFuncionario()
        exibirFuncionario()
        editarFuncionario()
        excluirFuncionario()
        const op = parseInt(input)
        switch (op) {
            case 1: function cadastrarFuncionario() {
                rl.question('digite o nome do usuário: ', (nome) => {
                    rl.question('digite o cargo do usuário: ', (cargo) => {
                        rl.question('digite o salário do usuário', (salario) =>{
                            funcionarios.push({nome, cargo, salario: parseFloat(salario)})
                            console.log('Funcionário registrado com sucesso!')
                            exibirMenu()
                        })
                    })
                })
            }
            break

            case 2: function exibirFuncionario() {
                if(funcionarios.length === 0){
                    console.log('nenhum usuário cadastrado!')
                }else{
                    console.log('Lista de usuários: ')
                    funcionarios.forEach((funcionario, index) => {
                        console.log(`${index + 1}. Nome: ${funcionario.nome} \nCargo: ${funcionario.cargo} \nSalário: R$${funcionario.salario.toFixed(2)}\n`)
                    })
                }
                exibirMenu()
            }
            break

            case 3: function editarFuncionario() {
                if(funcionarios.length === 0){
                    console.log('nenhum usuário cadastrado!')
                }else{
                    rl.question('digite a posição do usário que você quer editar', (input) => {
                        i = parseInt(input)
                        if(funcionarios.length > i || funcionarios.lengh < i){
                        console.log('posição inválida')
                        }else{
                            funcionarios.splice(i-1, 1)
                            rl.question('digite o nome do usuário: ', (nome) => {
                                rl.question('digite o cargo do usuário: ', (cargo) => {
                                    rl.question('digite o salário do usuário', (salario) =>{
                                        funcionarios.push({nome, cargo, salario: parseFloat(salario)})
                                        console.log('Funcionário editado com sucesso!')
                                    })
                                })
                            })
                            exibirMenu()
                        }
                    })   
                }
                exibirMenu()
            }
            break

            case 4: function excluirFuncionario() {
                if(funcionarios.length === 0){
                    console.log('nenhum usuário cadastrado!')
                }else{
                    rl.question('digite a posição do usário que você quer editar', (input) => {
                        i = parseInt(input)
                        if(funcionarios.length > i || funcionarios.lengh < i){
                        console.log('posição inválida')
                        }else{
                            funcionarios.splice(i-1, 1)
                            console.log('Funcionário excluido com sucesso!')
                            exibirMenu()
                        }
                    })
                }
                exibirMenu()
            }
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