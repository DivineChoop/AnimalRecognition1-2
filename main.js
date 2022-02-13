function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/T91Ce_ih0/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}