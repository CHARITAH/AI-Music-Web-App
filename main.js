music1 = "";
music2 = "";

function preload(){
    music = loadSound("music.mp3");
    music = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600 , 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function draw() {
    image(video, 0 , 0 , 600, 500);
}