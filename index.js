setInterval(() => {
    var date = new Date;
    var day = date.toLocaleDateString();
    var hour = date.toLocaleTimeString();

    document.getElementById('date').textContent = day;
    document.getElementById('hour').textContent = hour;
}, 1000);//dar data e hora

function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
    //pega o num e junta com o que ja esta na tela (num pode ser /,*,+,etc tambem)
}
function clean()
{
    document.getElementById('resultado').innerHTML = "";//coloca o valor 'vazio' na tela
}
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
    /*assim como uma frase o numero na tela tem um tamanho, apenas tiro o ultimo numero da tela
    usando o metodo substring que pega o inicio e o final que voce quer filtrar*/ 
}
function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
        //pega o string da tela e faz um calculo e essa e a funcao do eval
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Digite um numero"
        setTimeout(() => {
            document.getElementById('resultado').innerHTML = "";
        }, 3000);
    }
}