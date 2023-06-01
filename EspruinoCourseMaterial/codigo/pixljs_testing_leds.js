//CODE for PIXL.JS
//reset();
console.log("pixl.js basic LED testing v01 ");

var contador = 0;
var estado = true;
D11.write(estado); //encender led

v_intv = setInterval(function() {
  if (contador < 2) console.log("interval : " + v_intv);
  estado = !estado; 
  D7.write(estado);
  D1.write(estado);
  contador++;
  console.log("contador,  interval, estado : " + contador + " , " + v_intv+" , "+estado);
  if (contador == 20) clearInterval(v_intv);
}, 1000);

var estado = true;
D11.write(estado);
D7.write(estado);
D1.write(estado);


D11.read();
