mostrarMensagem.addEventListener("click", mostrarMensagemF);
somarNumeros.addEventListener("click", somarNumerosF);
calcularNumeros.addEventListener("click", calcularNumerosF);
calcularPotencia.addEventListener("click", calcularPotenciaF);
calcularRaizQuadrada.addEventListener("click", calcularRaizQuadradaF);
gerarTabuada.addEventListener("click", gerarTabuadaF);

function mostrarMensagemF(){
    window.alert("Olá mundo!");
}

function somarNumerosF(){
    var n1 = Number(window.prompt("Informe o primeiro número:"));
    var n2 = Number(window.prompt("Informe o segundo número:"));
    window.alert("O resultado da soma é " + (n1 + n2));
}

function calcularNumerosF(){
    var n1 = Number(window.prompt("Informe o primeiro número:"));
    var op = window.prompt("Informe a operação | * = Multiplicação | / = Divisão | + = Soma | - = Subtração");
    var n2 = Number(window.prompt("Informe o segundo número"));
    var resultado;

    if(op == "+"){
        resultado = n1 + n2;
    }else if(op == "-"){
        resultado = n1 - n2;
    }else if(op == "/"){
        resultado = n1 / n2;
    }else if(op == "*"){
        resultado = n1 * n2;
    }else{
        resultado = "O operador escolhido não é válido";
    }

    if(typeof(resultado) == "number"){
        window.alert("O resultado da operação é " + resultado);
    }else{
        window.alert(resultado);
    }
}

function calcularPotenciaF(){
    var n1 = Number(window.prompt("Informe o número base:"));
    var n2 = Number(window.prompt("Informe a potência a ser calculada em relação ao número anterior:"));
    var n3 = n1;

    for(i = 1;i < n2;i++){
        n3 = n3 * n1;
    }

    window.alert("O resultado é: " + n3);
    //Também poderia ser feito dizendo que n3 = Math.pow(n1,n2);
}

function calcularRaizQuadradaF(){
    var n1 = Number(window.prompt("Informe o número a ser calculada a raíz:"));
    window.alert("A raíz quadrada de " + n1 + " é " + Math.sqrt(n1));
}

function gerarTabuadaF(){
    var n1 = Number(window.prompt("Informe o número que você deseja ver a tabuada: "));
    var tabelaTabuada = document.createElement("table");
    for(i = 0; i <= 10; i++){
        var novaLinha = document.createElement("tr");
        var novaCelula = document.createElement("td");
        var conteudoCelula = document.createTextNode(n1 + " X " + i + " = " + (n1 * i));
        novaCelula.appendChild(conteudoCelula);
        novaLinha.appendChild(novaCelula);
        tabelaTabuada.appendChild(novaLinha);    
    }

    fieldset_tabuada.appendChild(tabelaTabuada);
}