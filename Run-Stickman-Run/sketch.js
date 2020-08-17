function keyPressed(){
  if(key == ' ' || key == 'w') {
   kac.zipla();
  }
  if(key == 's') {
   kac.egil();
  }
}

function keyReleased(){
  if(key == 's'){
    kac.normal();
  }
}

function preload(){
  ziplaSes = loadSound('sound/zipla.mp3');
  bitisSes = loadSound('sound/bitis.mp3');

  myFont = loadFont('libraries/Helv.otf');

  arkaplan = loadImage('FotoGif/arkaplan.png');
  caliresim = loadImage('FotoGif/cali.png');
  yarasaresim = loadImage('FotoGif/yarasa.png');
  kacanGif = loadImage('FotoGif/kacan.gif');
  kovalayanGif = loadImage('FotoGif/kovalayan.gif');
  hediyeresim = loadImage('FotoGif/hediye.png');
}

function setup() {
  createCanvas(windowWidth-4, windowHeight-4);
  buton = createButton('Yeniden Dene');
  buton.hide();
  kac = new kacan();
  kovala.push(new kovalayan());
  frameRate(60);
}

function draw() {
  background(255);

  image(arkaplan, 0, 0, windowWidth, windowHeight-100);

//Çalı ve Yarasa Oluşturma
    if(random(1) < 0.005){
    calilar.push(new cali());
}
  if(random(1) < 0.005){
  yarasalar.push(new yarasa());
}

  if(random(1) < 0.001){
  hediyeler.push(new hediye());
}

// Her yarasa için hareket ve çarpışma halinde olaylar
  for(let y of yarasalar){
    y.hareket();
    y.show();
  if(kac.hityarasa(y)){
    kac.geritepme();
    y.devam();
  }
}

// Her çalı için hareket ve çarpışma halinde olaylar
  for(let c of calilar){
  c.hareket();
  c.show();
  if(kac.hitcali(c)){
    kac.geritepme();
    c.devam();
  }
}

//// Her hediye için hareket ve çarpışma halinde olaylar
  for(let h of hediyeler){
  h.hareket();
  h.show();
  if(kac.hithediye(h)){
    kac.ilerle();
    h.devam();
  }
}

//Skor Elementleri
score+=1;
textSize(20);
textFont(myFont);
let z = "Puan: " +score;

//Kovala elemanı için
  for(let k of kovala){
//Kovalayan Gösterme
    k.show();
//Kaçan ve Kovalayan çarpıştığında oyun bitme
    if(kac.hitkovala(k)){
      z = " ";

      buton.show();
      buton.position(windowWidth/2 - 50 , 120);
      buton.style('border-color', '#1eb4e6');
      buton.style('background-color', '#1eb4e6');
      buton.style('color', '#ffffff');
      buton.style('cursor', 'pointer');

      bitisSes.play();

  push();
      textSize(25);
      textFont(myFont);
      textAlign(CENTER);
    push();
      fill(30,180,230);
      text('Oyun Bitti',windowWidth/2,50);
      text('Puan: ' + score, windowWidth/2, 100);
    pop();
  pop();
      buton.mousePressed(reset);
      noLoop();
    }
}

//Skor yazdırma
text(z,10,10,400,400);

//Ana karakter gösterme ve hareket
kac.show();
kac.hareket();
}

function reset(){
  //Reset tuşu ile oyunun sıfırlanması
  buton.hide();
  calilar=[];
  yarasalar=[];
  kac.x=200;
  loop();
  score=0;
}

//_________________¶¶¶1___¶¶¶____¶¶¶1_______________
//__________________¶¶¶____¶¶¶____1¶¶1______________
//___________________¶¶¶____¶¶¶____¶¶¶______________
//___________________¶¶¶____¶¶¶____¶¶¶______________
//__________________¶¶¶____1¶¶1___1¶¶1______________
//________________1¶¶¶____¶¶¶____¶¶¶1_______________
//______________1¶¶¶____¶¶¶1___¶¶¶1_________________
//_____________¶¶¶1___1¶¶1___1¶¶1___________________
//____________1¶¶1___1¶¶1___1¶¶1____________________
//____________1¶¶1___1¶¶1___1¶¶¶____________________
//_____________¶¶¶____¶¶¶1___¶¶¶1___________________
//______________¶¶¶¶___1¶¶¶___1¶¶¶__________________
//_______________1¶¶¶1___¶¶¶1___¶¶¶¶________________
//_________________1¶¶1____¶¶¶____¶¶¶_______________
//___________________¶¶1____¶¶1____¶¶1______________
//___________________¶¶¶____¶¶¶____¶¶¶______________
//__________________1¶¶1___1¶¶1____¶¶1______________
//_________________¶¶¶____¶¶¶1___1¶¶1_______________
//________________11_____111_____11_________________
//__________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶________
//1¶¶¶¶¶¶¶¶¶¶__¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶________
//1¶¶¶¶¶¶¶¶¶¶¶__1¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶________
//1¶¶_______¶¶__1¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶________
//1¶¶_______¶¶__1¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶________
//1¶¶_______¶¶__¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶________
//1¶¶_______¶¶__1¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶________
//_¶¶¶¶¶¶¶¶¶¶¶__¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶________
//_¶¶¶¶¶¶¶¶¶¶¶__¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶________
//__________¶¶___1¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶1________
//__________1¶¶___¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶_________
//____________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶11__________
//11_____________________________________________111
//1¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶1
//__¶¶111111111¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶111111111¶__
