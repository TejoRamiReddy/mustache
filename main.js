noseX=0;
noseY=0;

function preload() {
  clown_nose = loadImage('mustache.png');
}

function setup() {
  canvas = createCanvas(500, 500);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(500, 500);
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
    noseX = results[0].pose.nose.x -30;
    noseY = results[0].pose.nose.y +9;
  }
}

function draw() {
  image(video, 0, 0, 500, 500);
  image(clown_nose, noseX, noseY, 70, 30);
}

function take_snapshot(){    
  save('myFilterImage.png');
}
