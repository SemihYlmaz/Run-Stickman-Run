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
  frameRate(120);
  calistir();
}

function calistir(){
  kac = new kacan();
  kovala.push(new kovalayan());
  buton = createButton('Yeniden Dene');
  buton.hide();
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

//Yarasa Hareket ve Çarpışma Kontrolü
  for(let y of yarasalar){
    y.hareket();
    y.show();
  if(kac.hityarasa(y)){
    kac.geritepme();
    y.devam();
  }
}

//Çalı Hareket ve Çarpışma Kontrolü
  for(let c of calilar){
  c.hareket();
  c.show();
  if(kac.hitcali(c)){
    kac.geritepme();
    c.devam();
  }
}

//Hediye Hareket ve Çarpışma Kontrolü
  for(let h of hediyeler){
  h.hareket();
  h.show();
  if(kac.hithediye(h)){
    kac.ilerle();
    h.devam();
  }
}
//Skor
  score+=1;

  textSize(boyut);
  textFont(myFont);
  text("Puan: " +score,10,10,400,400);

//Oyun Bitti
  for(let k of kovala){
//Kovalayan Gösterme
    k.show();

//Oyun bitti
    if(kac.hitkovala(k)){

      buton.show();
      buton.position(windowWidth/2 - 50 , 120);
      buton.style('background-color', '#1eb4e6');
      buton.style('color', '#ffffff')

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

//Dinazor Gösterip Hareket
kac.show();
kac.hareket();
}

function reset(){
  buton.hide();
  calilar=[];
  yarasalar=[];
  kac.x=200;
  loop();
  score=0;
  boyut=20;
}
