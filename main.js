tint_color= ""

function prelaod() {

}

function setup() {
canvas= createCanvas(400, 400)
canvas.position (50,200)
video = createCapture(VIDEO)
video.size(400,400)
video.hide()
}

function draw() {
//image(variable name, x,y, width,height)
image(video, 0,0,400,400)
tint(tint_color)

}
function apply_filter()
{
    tint_color= document.getElementById("color").value;
}

function take_snapshot(){
    save("selfie.png")
}