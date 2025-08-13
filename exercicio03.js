// exercicio01.js (Corrected)
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Por favor, digite seu nome: ', (nome) => { // Changed 'questions' to 'question'
    rl.question('Agora, digite sua idade: ', (idade) => { // Changed 'questions' to 'question'
        rl.question('Você possui CNH? (sim/não): ', (respostaCNH) => {
            const usuario = {
                nome: nome,
                idade: parseInt(idade),
                possuiCNH: (respostaCNH.toLowerCase() === 'sim' || respostaCNH.toLowerCase() === 's')
            };
            console.log("\n--- Ficha de usuário ---")
            console.log(`Nome: ${usuario.nome}`)
            console.log(`Idade: ${usuario.idade} anos`)

            const statusCNH = usuario.possuiCNH ? 'Sim' : 'Não'
            console.log(`Possui CNH? ${statusCNH}`)
            console.log("-------------------------")

            console.log("\nObjeto Completo")
            console.log(usuario)

            rl.close()
        });
    });
});