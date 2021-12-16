function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	
}

function setup() 
{
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(800, 400);
	video.parent("gameconsole");
	poses=ml5.poseNet(video, modelLoaded)
	poses.on("pose", gotResult);
}

function draw() 
{
	game()	
}

function modelLoaded()
{
	console.log("Model has been loaded")
}

function gotResult(results)
{
	if (results.length>0) 
	{
		console.log(results)
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
	}
}