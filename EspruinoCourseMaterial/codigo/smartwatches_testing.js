//Codigo para  Espruino Bangle Smartwatches
//probar subir a RAM y subir a fichero (storage)
//reset();
//not for dk08 0x07FF, name: "Cyan" 
//0xF800, name: "Red"  0xF81F, name: "Magenta" 

//DK08  g.setColor(1);
//DK08.isPower() 
//Bangle.isPower() 

console.log("Espruino Bangle Smartwatches v01 ");
var vwidth=g.getWidth();
console.log(vwidth);
var cont_col=0;

g.clear();
g.setFont("Vector",15).setFontAlign(0,0);

for (color=0;color<5;color++){  
 g.setColor(color);
 for (cont_row=0;cont_row<=110;cont_row=cont_row+7){  
    g.drawString("hola", 18+cont_row+cont_col, 30+cont_row);
    console.log("cont_row, color"+cont_row+","+color);
    g.flip();
 }
 cont_col=cont_col+30;
 g.fillRect(120, 120, g.getWidth(),g.getHeight());
 g.flip();
}

g.setColor(3);
//g.setColor("#0x65E0"); not for dk08
g.setFontVector(30).setFontAlign(0,0);
g.drawString("Adios", 100, 100);
console.log("adios ");   
g.flip();