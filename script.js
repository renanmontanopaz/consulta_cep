let cep = document.querySelector('#cep');
let rua = document.querySelector('#rua');
let bairro = document.querySelector('#bairro');
let cidade = document.querySelector('#cidade');
let UF = document.querySelector('#uf');
let ibge = document.querySelector('#ibge');
let ddd = document.querySelector('#ddd');
let tempo = ''
/*cep.value = '0';*/
function delay(n){
    return new Promise(function(resolve){
        rua.value = 'carregando...'
        bairro.value = 'carregando...'
        UF.value = '...'
        ibge.value = 'carregando...'
        ddd.value = '...'
        cidade.value = 'carregando...'
        setTimeout(resolve,n*1000);
    });
}
cep.addEventListener('blur', async function(e){
    let cep = e.target.value;
    let script = document.createElement('script');
    const small = document.getElementById('small');
    const Cep = document.getElementById('cep');
    const inputis = document.querySelectorAll("input")
    if(Cep.value === '') {
        Cep.style.borderColor = "red"
        small.innerHTML = "Esse campo é obrigatório!"
    }
    script.src = 'https://viacep.com.br/ws/'+cep+'/json/?callback=callbackform';
    document.body.appendChild(script);
});

async function callbackform(resposta){
    const small = document.querySelector("small");
    const inputs = document.querySelectorAll("input")
    small.innerHTML = ""
    if("erro" in resposta){
        cep.style.borderColor = "red"
        small.innerHTML = "CEP inválido!"
        inputs.value = ""
    }else {
        cep.style.borderColor = "green"
        await delay(1);
        rua.value = resposta.logradouro;
        bairro.value = resposta.bairro;
        cidade.value = resposta.localidade;
        UF.value = resposta.uf;
        ibge.value = resposta.ibge;
        ddd.value = resposta.ddd;
    }
}
