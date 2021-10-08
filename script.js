var original;
function loadImage(){
  fileinput=document.getElementById("file");
  var canvas=document.getElementById("can");
  image=new SimpleImage(fileinput);
  image.drawTo(canvas);
}
function doGray(){
  for(var pixel of image.values()){
    var avg=        (pixel.getRed()+pixel.getGreen()+pixel.getBlue())  /3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  var canvas=document.getElementById("can");
  image.drawTo(canvas);
}
function redFilter(){
  for (var pixel of image.values()){
    var avg=      (pixel.getRed()+pixel.getGreen()+pixel.getBlue())   /3;
    if (avg<128){
      pixel.setRed(2*avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    else{
      pixel.setRed(255);
      pixel.setGreen(2*avg-255);
      pixel.setBlue(2*avg-255);
    }
    var canvas=document.getElementById("can");
    image.drawTo(canvas);  
  }
}
function gridlines(){
   var width=image.getWidth();
   var height=image.getHeight();
  for( var pixel of image.values()){
    var x=pixel.getX();
    var y=pixel.getY();
   
  if ( x<=(width/3) && x>=(width/3) ){
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);}
  if ( x<=(2*width/3) && x>=(2*width/3) ){
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);}
  if ( y<=(height/3) && y>=(height/3) ){
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);}
  if ( y<=(2*height/3) && y>=(2*height/3) ){
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);}
  }
  var canvas=document.getElementById("can");
  image.drawTo(canvas);
}
function rainbow(){
  var h=image.getHeight();
  for (var pixel of image.values()){
    var y=pixel.getY();
    var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if (avg<128){
      if(y<h/7){
        pixel.setRed(2*avg);
        pixel.setGreen(0);
        pixel.setBlue(0);}
      if(y>=h/7 && y<(2*h/7)){
        pixel.setRed(2*avg);
        pixel.setGreen(0.8*avg);
        pixel.setBlue(0);}
      if(y>=(2*h/7) && y<(3*h/7)){
        pixel.setRed(2*avg);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);}
      if(y>=(3*h/7) && y<(4*h/7)){
        pixel.setRed(0);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);}
      if(y>=(4*h/7) && y<(5*h/7)){
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);}
       if(y>=(5*h/7) && y<(6*h/7)){
        pixel.setRed(0.8*avg);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);}
       if(y>=(6*h/7) && y<=h){
        pixel.setRed(1.6*avg);
        pixel.setGreen(1.6*avg);
        pixel.setBlue(1.6*avg);}}
    else{
      if(y<h/7){
        pixel.setRed(255);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(2*avg-255);}
      if(y>=h/7 && y<(2*h/7)){
        pixel.setRed(255);
        pixel.setGreen(1.2*avg-51);
        pixel.setBlue(2*avg-255);}
      if(y>=(2*h/7) && y<(3*h/7)){
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg-255);}
      if(y>=(3*h/7) && y<(4*h/7)){
        pixel.setRed(2*avg-255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg-255);}
      if(y>=(4*h/7) && y<(5*h/7)){
        pixel.setRed(2*avg-255);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(255);}
       if(y>=(5*h/7) && y<(6*h/7)){
        pixel.setRed(1.2*avg-51);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(255);}
       if(y>=(6*h/7) && y<=h){
        pixel.setRed(0.4*avg+153);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(0.4*avg+153);
      }}}
  var canvas=document.getElementById("can");
  image.drawTo(canvas);
}
function reset(){
 fileinput=document.getElementById("file");
 image=new SimpleImage(fileinput);
 var canvas=document.getElementById("can");
 image.drawTo(canvas);
}
