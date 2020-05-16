class kacan{
  constructor(){
  this.r = 50;
  this.yukseklik = 100;
  this.x = 200;
  this.y = height - this.yukseklik;
  this.hizY = 0;
  this.yerCekimi = 1.5;
 }
 //Hareketi sağlama ve yerçekimi efekti sağlama
  hareket(){
  this.y += this.hizY;
  this.hizY += this.yerCekimi;
  this.y = constrain(this.y, 0, height - this.yukseklik);
}
//Sadece belirli y noktasında zıplama
  zipla(){
 if(this.y == height - this.yukseklik){
 this.hizY = -24;
 ziplaSes.play();
 }
}
//Eğilme ve yerçekimini uygulama
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
//Eğilme bırakılınca, karakterin normal sınırlarına dönmesi
  normal(){
    if(this.y == height - this.yukseklik){
    this.yerCekimi = 1.5;
    }
    this.yukseklik = 100;
    this.r = 50;
    kacanGif = loadImage('FotoGif/kacan.gif');
}
//Çalılar dizisinin elemanları ile çarpışma kontrolü
  hitcali(calilar){
  return collideRectRect(this.x,this.y,this.r,this.yukseklik,calilar.x+7,calilar.y,calilar.r,calilar.r)
}
//Yarasalar dizisinin elemanları ile çarpışma kontrolü
  hityarasa(yarasalar){
  return collideRectRect(this.x,this.y,this.r,this.yukseklik,yarasalar.x+12,yarasalar.y-yarasalar.r,yarasalar.r,yarasalar.r)
}
//Hediyeler dizisinin elemanları ile çarpışma kontrolü
  hithediye(hediyeler){
  return collideRectRect(this.x,this.y,this.r,this.yukseklik,hediyeler.x+7,hediyeler.y,hediyeler.r,hediyeler.r)
}
//Kovalayan ile çarpışma kontrolü
  hitkovala(kovala){
  return collideRectRect(this.x+5,this.y,this.r,this.yukseklik,kovala.x,kovala.y,kovala.r,kovala.yukseklik)
}
//Yarasa ve Çalı ile çarpıştığında karakterin geri gitmesi
  geritepme(){
    this.x-=26;
}
//Hediye ile çarpıştığında karakterin geri gitmesi
  ilerle(){
    if(this.x<300){
    this.x+=26;
  }
}
  show(){
  image(kacanGif, this.x, this.y, this.r, this.yukseklik);
}
}
