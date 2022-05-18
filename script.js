let cep = document.querySelector('#cep');
let rua = document.querySelector('#rua');
let bairro = document.querySelector('#bairro');
let cidade = document.querySelector('#cidade');
let UF = document.querySelector('#uf');
let ibge = document.querySelector('#ibge');
let ddd = document.querySelector('#ddd');
/*cep.value = '0';*/
cep.addEventListener('blur', function(e){
    let cep = e.target.value;
    let script = document.createElement('script');
    const small = document.getElementById('small');
    const Cep = document.getElementById('cep');
    if(Cep.value === '') {
        Cep.style.borderColor = "red"
        small.innerHTML = "Esse campo é obrigatório!"
    }
    script.src = 'https://viacep.com.br/ws/'+cep+'/json/?callback=callbackform';
    document.body.appendChild(script);
})(1000);

function callbackform(resposta){
    const small = document.querySelector("small");
    const inputs = document.querySelectorAll("input")
    if("erro" in resposta){
        cep.style.borderColor = "red"
        small.innerHTML = "CEP inválido!"
    }else {
        small.innerHTML = ""
        cep.style.borderColor = "green"
        rua.value = resposta.logradouro;
        bairro.value = resposta.bairro;
        cidade.value = resposta.localidade;
        UF.value = resposta.uf;
        ibge.value = resposta.ibge;
        ddd.value = resposta.ddd;
    }
}