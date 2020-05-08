function keyPressed(){
  if(key == ' ' || key == 'w') {
  ziplaSes.play();
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
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  kac = new kacan();
  frameRate(120);
    kovala.push(new kovalayan());
}

function draw() {
  background(255  );

  image(arkaplan, 0, 0, windowWidth, windowHeight-100);

//Çalı ve Yarasa Oluşturma // BAKMAK LAZIM

  if(random(1) < 0.01){
  calilar.push(new cali());
}

  if(random(1) < 0.005){
  yarasalar.push(new yarasa());
}
//Kovalayan Gösterme
//Yarasa Hareket ve Çarpışma Kontrolü
  for(let y of yarasalar){
    y.hareket();
    y.show();
  if(kac.hityarasa(y)){
    kac.geritepme();
    y.devam();
    //noLoop();
  }
}
//Çalı Hareket ve Çarpışma Kontrolü
  for(let c of calilar){
  c.hareket();
  c.show();
  if(kac.hitcali(c)){
    kac.geritepme();
    c.devam();
    //noLoop();
  }
}
//Skor
  score+=1;
  textSize(20);
  textFont(myFont);
  let myText = text("Puan: " +score,10,10,400,400);
  for(let k of kovala){
    k.show();
    if(kac.hitkovala(k)){
      noLoop();
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
    }
  }
//Dinazor Gösterip Hareket
kac.show();
kac.hareket();
}
