let fila = [];
let opcao;

while (true) {
    
    let menu = "Fila de Pacientes:\n";
    
    if (fila.length === 0) {
        menu += "Nenhum paciente na fila.\n";
    } else {
        for (let i = 0; i < fila.length; i++) {
            menu += `${i + 1}º ${fila[i]}\n`;
        }
    }

    menu += "\nEscolha uma opção:\n";
    menu += "1. Novo paciente\n";
    menu += "2. Consultar paciente\n";
    menu += "3. Sair\n";
    
    opcao = prompt(menu);

    if (opcao === '1') {
        let nome = prompt("Digite o nome do novo paciente:");
        if (nome) {
            fila.push(nome);
            alert(`${nome} foi adicionado à fila.`);
        } else {
            alert("Nome não pode ser vazio.");
        }
    } else if (opcao === '2') {
        if (fila.length > 0) {
            let pacienteConsultado = fila.shift();
            alert(`Paciente consultado: ${pacienteConsultado}`);
        } else {
            alert("Não há pacientes na fila para consultar.");
        }
    } else if (opcao === '3') {
        alert("Saindo do sistema.");
        break; 
    } else {
        alert("Opção inválida. Por favor, escolha novamente.");
    }
}
