noseX = 0;
noseY = 0;

function preload(){
    clown_nose = loadImage('https://i.postimg.cc/Bb7YQ26Q/580b57fbd9996e24bc43bed5.png')
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is initialized')
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseY = results[0].pose.nose.y;
        noseX = results[0].pose.nose.x;
        console.log('nose x = ' + noseX);
        console.log('nose y = ' + noseY);
    }
}

function draw(){
    image(video, 0, 0 , 300, 300)
    image(clown_nose, noseX - 15, noseY - 10, 30, 30);
}

function take_snapshot(){
    save('Imgwithclown nose.png');
}

