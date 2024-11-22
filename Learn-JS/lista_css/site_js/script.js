const btn = document.querySelector('.botao_principal');
const formulario = document.getElementById('formulario');

formulario.addEventListener('change', mudar);

const funcoes = {
    text(valor)
    {
        btn.innerText = valor;
    },
    color(valor)
    {
        btn.style.color = valor;
    },
    backgroundcolor(valor){
        btn.style.backgroundColor = valor;
    },
    width(valor){
        btn.style.width = valor + 'px';
    },
    height(valor){
        btn.style.height = valor + 'px';
    },
    border(valor){
        btn.style.border = valor;
    },
    borderradius(valor){
        btn.style.borderRadius = valor + 'px';
    },
    fontsize(valor){
        btn.style.fontsize = valor;
    }

}

function mudar(event){
    const valor = event.target.value;
    const nome = event.target.name;
    funcoes[nome](valor);
    colocarStorage(nome,valor);
}

function colocarStorage(nome,valor){
    localStorage[nome] = valor;
};

colocarCss();

function colocarCss(){
    const variaveisLocal = Object.keys(localStorage);
    variaveisLocal.forEach(function(variavelAtual){
    funcoes[variavelAtual](localStorage[variavelAtual])
    })
};