let cep = document.querySelector('#cep');
let rua = document.querySelector('#rua');
let bairro = document.querySelector('#bairro');
let cidade = document.querySelector('#cidade');
let UF = document.querySelector('#uf');
let ibge = document.querySelector('#ibge');
let ddd = document.querySelector('#ddd');
cep.value = '01001000';
cep.addEventListener('blur', function(e){
    let cep = e.target.value;
    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/'+cep+'/json/?callback=callbackform';
    document.body.appendChild(script);
});

function callbackform(resposta){

    if("erro" in resposta){

    }
    rua.value = resposta.logradouro;
    bairro.value = resposta.bairro;
    cidade.value = resposta.localidade;
    UF.value = resposta.uf;
    ibge.value = resposta.ibge;
    ddd.value = resposta.ddd;
}