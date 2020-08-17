class yarasa{
  constructor(){
  this.h = 50;
  this.r = 35;
  this.x = width;
  this.y = height - 51;
  }
  hareket(){
    this.x -= 7;
  }
  show(){
  image(yarasaresim,this.x,this.y-this.h,this.r,this.r);
  }
  //Ana karakter ile çarpışan elemanın ekrandan kaçırılması
  devam(){
  this.x = -100;
  }
}
