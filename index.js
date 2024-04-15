let currentPage = 'home';
let userName, email, password, password2;


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
}


// KASA API intergration

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


// MODAL FUNCTIONS
function openUserNameModal(){
    document.getElementById('user-name-modal').style.display = 'flex'
}
function updateUserName(){
    userName = document.getElementById('user-name-input').value;
    document.getElementById('user-name-modal').style.display = 'none';
    document.getElementById('user-name').innerHTML = userName;
}
function openEmailModal(){
    document.getElementById('email-modal').style.display = 'flex'
}
function updateEmail(){
    email = document.getElementById('email-input').value;
    document.getElementById('email-modal').style.display = 'none';
    document.getElementById('email').innerHTML = email;
}
function openPasswordModal(){
    document.getElementById('password-modal').style.display = 'flex'
}
function updatePassword(){
    password1 = document.getElementById('password-input-1').value;
    password2 = document.getElementById('password-input-2').value;
    if(password1 == password2) {
        alert('Password updated succesfully');
        document.getElementById('password-modal').style.display = 'none';
    }else {
        alert('Passwords do not match');
    }
    
    
}