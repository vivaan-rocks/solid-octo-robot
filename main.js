noseX=0;
noseY=0;

function preload() {
  clown_mustache = loadImage('clipart353654.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-55;
    noseY = results[0].pose.nose.y+0;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(clown_mustache, noseX, noseY, 100, 65);
}

function take_snap(){    
  save('myFilterImage.png');
}