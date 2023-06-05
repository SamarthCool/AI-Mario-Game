img="";
noseX=0;
noseY=0;
marioX=325;
marioY=325;

function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump=loadSound("jump.wav");
	mario_coin=loadSound("coin.wav");
	mario_gameover=loadSound("gameover.wav");
	mario_kick=loadSound("kick.wav");
	mario_die=loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
	img=loadImage("mario.jpg");	
}

function setup() {
	canvas = createCanvas(650,400);
	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console")
	poseNet=ml5.poseNet(video, modelLoaded);
	poseNet.on("pose", gotPoses);
	instializeInSetup(mario);
	canvas.parent("canvas");
}

function modelLoaded()
{
	console.log("Model is Loaded");
}

function gotPoses(results) {
	if(results.length>0)
	{
		console.log(results);
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
		console.log("noseX = " + noseX + ", noseY = " + noseY);
	} 
}

function draw() {
	game()
}






