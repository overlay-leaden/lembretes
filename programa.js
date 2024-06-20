const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lembretes = []
executar()

function executar() {
    console.log("-*- -*- -*- Lembretes -*- -*- -*-")
    console.log(`
1. Adicionar lembrete
2. Listar lembretes
3. Editar lembrete
4. Marcar lembrete como concluído
5. Sair
`)
    rl.question("Escolha uma opção: ", opcao => {
        switch (opcao) {
            case '1':
                adicionar()
                break
            case '2':
                listar()
                executar()
                break
            case '3':
                editar()
                break
            case '4':
                marcarConcluido()
                break
            case '5':
                rl.close()
                break
            default:
                console.log("Opção inválida")
                break
        }
    })
}

function adicionar () {
    
}