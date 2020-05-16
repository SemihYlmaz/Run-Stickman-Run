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

//Skor yazdırma
  score+=1;

  textSize(20);
  textFont(myFont);
  text("Puan: " +score,10,10,400,400);

//Kovala elemanı için
  for(let k of kovala){
//Kovalayan Gösterme
    k.show();
//Kaçan ve Kovalayan çarpıştığında oyun bitme
    if(kac.hitkovala(k)){

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
