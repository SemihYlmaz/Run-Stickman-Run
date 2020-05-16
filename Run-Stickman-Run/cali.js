class cali{
    constructor(){
      this.r = 50;
      this.x = width;
      this.y = height;
  }
    hareket(){
      this.x -= 7;
  }
    show(){
      image(caliresim,this.x,this.y-this.r,this.r,this.r);
  }
  //Ana karakter ile çarpışan elemanın ekrandan kaçırılması
    devam(){
      this.x = -100;
  }
}
