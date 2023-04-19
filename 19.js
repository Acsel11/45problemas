function ponerEnHora() {
 let horas = Number(prompt("Introduce las horas: "));
 let minutos = Number(prompt("Introduce los minutos: "));
 let segundos = Number(prompt("Introduce los segundos: "));


 if (horas < 0 || horas > 23 || minutos < 0 || minutos > 59 || segundos < 0 || segundos > 59) {
   console.log("Hora introducida incorrecta.");
   return;
 }


 let tiempo = setInterval(function() {
   console.log(horas + ":" + minutos + ":" + segundos);


   segundos++;


   if (segundos === 60) {
     segundos = 0;
     minutos++;
   }


   if (minutos === 60) {
     minutos = 0;
     horas++;
   }


   if (horas === 24) {
     horas = 0;
   }
 }, 1000);


 return tiempo;
}


let miReloj = ponerEnHora();

