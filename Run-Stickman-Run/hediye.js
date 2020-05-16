class hediye{
    constructor(){
      this.r = 30;
      this.x = width;
      this.y = height;
  }
    hareket(){
      this.x -= 7;
  }
    show(){
      image(hediyeresim,this.x,this.y-this.r,this.r,this.r);
  }
  //Ana karakter ile çarpışan elemanın ekrandan kaçırılması
    devam(){
      this.x = -100;
  }
}
