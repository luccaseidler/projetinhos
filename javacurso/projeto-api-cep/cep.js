function buscarCEP(){

    var estadoInput = document.getElementById('estado').value;
    var estado = estadoInput;

    var cidadeInput = document.getElementById('cidade').value;
    var cidade = cidadeInput;

    var enderecoInput = document.getElementById('endereco').value;
    var endereco = enderecoInput;

    var xhr =  new XMLHttpRequest();
    xhr.open("GET", "https://viacep.com.br/ws/" + estado + "/" + cidade + "/" + endereco + "/json/", true)

    xhr.onreadystatechange = function (){
        if(xhr.readyState === 4 && xhr.status === 200){
            var resposta = JSON.parse(xhr.responseText);
            var cep = resposta[0].cep;

            var resultadoDiv = document.getElementById("cep");
            resultadoDiv.innerHTML = "CEP encontrado: " + cep;
        }
    };
    
    xhr.send();
}  