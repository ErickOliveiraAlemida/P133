var img = ""
var status1 = ""
var objects = []

function preload (){
    img = loadImage("dog_cat.jpg")
}

function draw (){
    image(img, 0, 0, 640, 420)
    if(status1 != ""){
    for(var i = 0; i < objects.length; i++){
        document.getElementById("status").innerHTML = "status: objetos detectados"
        fill("#FF0000")
        porcentagem = floor(objects[i].confidence * 100)
        text(objects[i].label +  " " + porcentagem + "%", objects[i].x, objects[i].y)
        noFill()
        stroke("#FF0000")
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
    }
    }
}

function setup (){
    canvas = createCanvas(640, 420)
    canvas.center()
    objectDetector = ml5.objectDetector("cocossd", modelLoad)
    document.getElementById("status").innerHTML = "status: detectando objetos"
}

function modelLoad (){
    console.log("modelo carregado")
    status1 = true
    objectDetector.detect(img, gotResult)
}

function gotResult (error, results){
    if(error){
        console.log(error)
    }else{
        console.log(results)
        objects = results
    }
}
