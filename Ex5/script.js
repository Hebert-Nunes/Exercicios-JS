function TurnOnOff() {
    var Image = document.getElementById('image');

    if(Image.src.match('OFFLampada')) {
        Image.src = 'Images/ONLampada.jpg';
    }  else {
        Image.src = 'Images/OFFLampada.jpg';
    }
}