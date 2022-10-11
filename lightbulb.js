var object_detector=""
var img=""
var objects=[]
var status=""
function preload(){
  img=loadImage("Light Bulb.jpg")
}
function setup(){
canvas=createCanvas(600,450)
canvas.center()
object_detector=ml5.objectDetector('cocossd',modelloaded)
document.getElementById("status").innerHTML="status:detectingobjects"
}
function draw(){
    image(img,0,0,600,450)
    if (status!="") {
        numberofobject=objects.length
        document.getElementById("noo").innerHTML="numberofobject="+numberofobject
        for (let index = 0; index < objects.length; index++) {
            document.getElementById("status").innerHTML="status:object_detctor"   
            fill("red")
            percent=floor(objects[index].confidence*100)
            text(objects[index].label+" "+percent+"%",objects[index].x,objects[index].y)
            noFill()
            stroke("red")
            rect(objects[index].x-15,objects[index].y,objects[index].width,objects[index].height)
        }
    }
}
function modelloaded(){
    console.log("modelloaded")
status=true
object_detector.detect(img,gotresults)
}
function gotresults(error,results){
if (error) {
    console.log(error)

} else {
    console.log(results)
    objects=results
}
}