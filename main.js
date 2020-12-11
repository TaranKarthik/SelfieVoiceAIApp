var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").value = "";
    Recognition.start();
}

Recognition.onresult = function  (event){

    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    

    document.getElementById("textbox").value = Content;
    if(Content == "take my selfie"){

        speak();
        
        console.log("Taking your selfie.")
    }
    

}

function speak(){
    var synth = window.speechSynthesis;

    var textContent = "Taking your selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(textContent);

    synth.speak(utterThis);
    

    Webcam.attach(camera);

    setTimeout(function(){
        Takesnapshot();
        download();
    },5000);
    

}

camera = document.getElementById("camera");

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
});

function Takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_img" src=' +  data_uri + '>';

    });
}

function download(){
    link = document.getElementById("link");
    img = document.getElementById("selfie_img").src;
    link.href = img;
    link.click();
}
  