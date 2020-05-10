class kacan{
  constructor(){
  this.r = 50;
  this.yukseklik = 100;
  this.x = 200;
  this.y = height - this.yukseklik;
  this.hizY = 0;
  this.yerCekimi = 1.5;
 }
  hareket(){
  this.y += this.hizY;
  this.hizY += this.yerCekimi;
  this.y = constrain(this.y, 0, height - this.yukseklik);
}
  zipla(){
 if(this.y == height - this.yukseklik){
 this.hizY = -24;
 ziplaSes.play();
 }
}
  egil(){
  if(this.y == height - this.yukseklik){
    this.yukseklik = 50;
    this.r = 75;
    kacanGif = loadImage('FotoGif/kay.gif');
    }
  else{
    this.yerCekimi = 3;
  }
}
  normal(){
    if(this.y == height - this.yukseklik){
    this.yerCekimi = 1.5;
    }
    this.yukseklik = 100;
    this.r = 50;
    kacanGif = loadImage('FotoGif/kacan.gif');
}
  hitcali(calilar){
  return collideRectRect(this.x,this.y,this.r,this.yukseklik,calilar.x+7,calilar.y,calilar.r,calilar.r)
}
  hityarasa(yarasalar){
  return collideRectRect(this.x,this.y,this.r,this.yukseklik,yarasalar.x+12,yarasalar.y-yarasalar.r,yarasalar.r,yarasalar.r)
}
  hithediye(hediyeler){
  return collideRectRect(this.x,this.y,this.r,this.yukseklik,hediyeler.x+7,hediyeler.y,hediyeler.r,hediyeler.r)
}
  hitkovala(kovala){
  return collideRectRect(this.x+5,this.y,this.r,this.yukseklik,kovala.x,kovala.y,kovala.r,kovala.yukseklik)
}

  geritepme(){
    this.x-=26;
}
  ilerle(){
    if(this.x<150){
    this.x+=26;
  }
}
  show(){
  image(kacanGif, this.x, this.y, this.r, this.yukseklik);
}
}
