// Goal: send messages to randoms in GD
// Status: CORS errors and requests are bad.
// Need: MAKE "Http.status" SHOW 200 INSTEAD OF 0 HDJIWDIWJHDOIWKJ
// Other: Using soon dead API (GDBrowser API)

function generateRandom(maxLimit = 25000000){
    let rand = Math.random() * maxLimit;
    console.log(rand); // say 99.81321410836433
  
    rand = Math.floor(rand); // 99
  
    return rand;
  }

function send(){
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "https://gdbrowser.com/sendMessage", true);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onload = () => console.log(xhr.responseText);
  let data = "accountID=" + document.getElementById('id').value + "&password=" + document.getElementById('pass').value + "&subject=" + document.getElementById('title').value + "&message=" + document.getElementById('msg').value + "&targetID=" + window.randdest
  console.log(data);
  xhr.send(data);
}

function calledbybutton(){
const n = document.getElementById('times').value;
for (let i = 1; i <= n; i++) {
  let randdest = generateRandom();
  window.randdest = randdest;
  makeRequest();
}}

function makeRequest() {
const Http = new XMLHttpRequest();
const url='https://gdbrowser.com/api/profile/' + window.randdest;
Http.open("GET", url);
Http.setRequestHeader("Access-Control-Allow-Headers", "*");
Http.setRequestHeader("X-Requested-With", "XMLHttpRequest");
Http.setRequestHeader("Access-Control-Allow-Origin", "Allow");
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.status)
}
window.httpstats = Http.status;
isolated()
}

function isolated() {
  if(window.httpstats === 200){
    console.log("Account exists, continue...");
    send()
  } else {
    console.log( window.randdest + " is NOT a valid random account ID. Requesting a new one (actually no)")
      //setTimeout(calledbybutton, 3000); see up
  }
}