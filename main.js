
function preload() {
    
}
function setup() {
    canvas = createCanvas(400,  300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', getPoses);
}
function draw() {
    image(video, 0, 0, 400, 300);
}
function take_snapshot() {
    save('myFilter.png');
}
function modelLoaded() {
    console.log("poseNet is intialized");
}
function getPoses(results) {
    if (results.length > 0) {
        console.log(results)
        mouthX = results[0].pose.mouth.x;
        mouthY = results[0].pose.mouth.y;
        console.log(" X position of nose = "+results[0].pose.mouth.x);
        console.log(" Y position of nose = "+results[0].pose.mouth.y);
    }
}