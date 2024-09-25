function divideBy(){
    num1 = document.getElementById("horaIni").value;
    splitIni = num1.split(":");
    hora = parseInt(splitIni[0]);
    min = parseInt(splitIni[1]);

    num2 = document.getElementById("horaSoma").value;
    splitSoma = num2.split(":");
    horaSoma = parseInt(splitSoma[0]);
    minSoma = parseInt(splitSoma[1]);

    horaFinal = (parseInt(splitIni[0]) + parseInt(splitSoma[0])) %24;
    minFinal = parseInt(splitIni[1]) + parseInt(splitSoma[1]);

    if (minFinal>=59){
            novoMinFinal = minFinal - 60;
            novaHoraFinal = horaFinal + 1;
        if (novoMinFinal<=9){
           document.getElementById("result").innerHTML = novaHoraFinal + ":" + "0" + novoMinFinal; 
        } else{
            document.getElementById("result").innerHTML = novaHoraFinal + ":" + novoMinFinal;
        } 
    } else if(minFinal<=9){
        document.getElementById("result").innerHTML = horaFinal + ":" + "0" + minFinal; inal; 
    } else{
        document.getElementById("result").innerHTML = horaFinal + ":" + minFinal;
    }
}

