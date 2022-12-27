/*  My widget free text in a Widget area v2.2
//Render inside the box this.x, this.y, this.x + this.width-1, this.y + 23
run widgets in their own function scope so they don't interfere with
currently-running apps */
(() => {
  //var font_size='14';
  //g.setFontVector(font_size);  
  var v_mode_debug=0; //, 0=no, 1 min, 2 prone detail
  var my_string="by DPG #MPL"; 
  //var my_string="#espruino #MPL by DPG"; 
  //calc width out of the function

  g.setFont("6x8", 1); 
  // g.setFont("6x8",2); //also in draw must have same value
  var text_width = g.stringWidth(my_string); // width of the widget after set font

  if (g.theme.dark==true) var v_color=0xFFFF; //white
      else var v_color=0x0000; //black

  function draw() {    
   // reset the graphics context to defaults (color/font/etc)
    //y - Y alignment. -1=top (default), 0=center, 1=bottom
    g.reset().setColor(v_color).setFont("6x8", 1).setFontAlign(-1, -1); 
    //identify widget area and calc position y   
    //optional for mem
    //(my_string+mem.free+"/"+mem.total, this.x, this.y+1);   
    //alternatives: this vs height vs bangle.rect
    if (v_mode_debug>0) console.log("this.y "+this.y+" this.x "+this.x);
    //if (this.y>100) g.drawString(my_string, this.x, this.y+4, true);  
    //else {
       var yposition=g.getHeight()-22; //239 for BJS1
       //(my_string+mem.free+"/"+mem.total, this.x, yposition);
       if (v_mode_debug>0) console.log(" yposition"+yposition);
       g.drawString(my_string, this.x, yposition);
    //}    
  }
  
  WIDGETS["widtextareaBottom"]={
    area:"bl", // tl (top left), tr (top right), bl (bottom left), br (bottom right)
    width: text_width, // var with calculated  width 
    draw:draw // called to draw the widget
  };
})();

