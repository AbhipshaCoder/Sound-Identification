//https://teachablemachine.withgoogle.com/models/Br01dFBrA/

function start_Classification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Br01dFBrA/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}