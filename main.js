status="";
Search_Result="";

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480,380);
    video.hide();
}

function start() 
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";
    document.getElementById(Search).value = Search_Result;
}

function modelLoaded()
{
    console.log("Model Loaded");
    status = true ;
}

function draw()
{
    image(video, 0, 0, 380, 380);
}

