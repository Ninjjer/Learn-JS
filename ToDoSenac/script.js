/*
const tarefa = document.querySelector(".tarefa");
const btnTarefa = tarefa.querySelector(".btnTarefa");

btnTarefa.addEventListener("click", ()=> {
    alterarStatus(tarefa);
});

function alterarStatus(tarefa){
    const statusTarefa = ['default', 'feito', 'nao-feito', 'incompleto'] //constructor

    let valorInput = tarefa.querySelector('input');

    let statusAtual = statusTarefa.indexOf(valorInput.value);

    let proximoStatus = (statusAtual + 1) % statusTarefa.length;

    valorInput.value = statusTarefa[proximoStatus]
    
    statusTarefa.forEach(statusAtual => {
        tarefa.classList.remove(statusAtual)
    });

    tarefa.classList.add(statusTarefa[proximoStatus]);
}
*/



class Tarefa{
    constructor() {
        this.tarefa = document.querySelector(".tarefa");
        this.btnTarefa = tarefa.querySelector(".btnTarefa");
        this.statusTarefa = ['default', 'feito', 'nao-feito', 'incompleto'];
        this.addEventoTarefa();
    }

    addEventoTarefa(){
        this.btnTarefa.addEventListener("click", ()=> {
            alterarStatus(tarefa);
        });

    }
    alterarStatus(tarefa){
        
        this.valorInput = tarefa.querySelector('input');

        this.proximoStatus = (statusAtual + 1) % statusTarefa.length;

        this.valorInput.value = statusTarefa[proximoStatus]
    }


}