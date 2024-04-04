let currentPage = 'home';

$(document).ready(function(){
    $("#main").load("pages/home.html");
    document.getElementById('home-button').src="img/Home_Selected.png";
    document.getElementById('home-button-label').style.color="#1FA9E3";

    $("a").click(function() {
    var page = $(this).attr("href");
    $("#main").load(page);
    return false;
    });
});

function resetMenuImages() {
    document.getElementById("home-button").src="img/Home.png";
    document.getElementById('home-button-label').style.color="white";
    document.getElementById('activity-button').src="img/Bell.png";
    document.getElementById('activity-button-label').style.color="white";
    document.getElementById('devices-button').src="img/Webcam.png";
    document.getElementById('devices-button-label').style.color="white";
    document.getElementById('health-button').src="img/Heart.png";
    document.getElementById('health-button-label').style.color="white";
    document.getElementById('settings-button').src="img/Settings.png";
    document.getElementById('settings-button-label').style.color="white";
}

function setCurrentPage(current)  {
    currentPage = current
    console.log(current)

    if(currentPage == "home"){
        resetMenuImages();
        $("#main").load("pages/home.html");
        document.getElementById('home-button').src="img/Home_Selected.png";
        document.getElementById('home-button-label').style.color="#1FA9E3";

    }
    if(currentPage == "activity"){
        resetMenuImages();
        $("#main").load("pages/activity.html");
        document.getElementById('activity-button').src="img/Bell_Selected.png";
        document.getElementById('activity-button-label').style.color="#1FA9E3";
    }
    if(currentPage == "devices"){
        resetMenuImages();
        $("#main").load("pages/devices.html");
        document.getElementById('devices-button').src="img/Webcam_Selected.png";
        document.getElementById('devices-button-label').style.color="#1FA9E3";
    }
    if(currentPage == "health"){
        resetMenuImages();
        $("#main").load("pages/health.html");
        document.getElementById('health-button').src="img/Heart_Selected.png";
        document.getElementById('health-button-label').style.color="#1FA9E3";
    }
    if(currentPage == "settings"){
        resetMenuImages();
        $("#main").load("pages/settings.html");
        document.getElementById('settings-button').src="img/Settings_Selected.png";
        document.getElementById('settings-button-label').style.color="#1FA9E3";
    }
    if(currentPage == "account"){
        resetMenuImages();
        $("#main").load("pages/account.html");
       
    }

    // $("a").click(function() {
    //     var page = $(this).attr("href");
    //     $("#main").load(page);
    //     return false;
    //     });
}

// const { Client } = require('tplink-smarthome-api');

// const client = new Client();
// const plug = client.getDevice({ host: '10.0.1.2' }).then((device) => {
//   device.getSysInfo().then(console.log);
//   device.setPowerState(true);
// });

// // Look for devices, log to console, and turn them on
// client.startDiscovery().on('device-new', (device) => {
//   device.getSysInfo().then(console.log);
//   device.setPowerState(true);
// });