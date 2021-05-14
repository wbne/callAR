var body = document.getElementById("wrapper");

var textOptions = ["New Plan", "Cancel Plan", "Upgrade Phone", "Other", "Current T-Mobile User", "New T-Mobile User"]
var vid = document.getElementById("videofeed")

firstOption();
setTimeout(function(){
  vid.play()
}, 3000);

function loadMedia(value){
  switch(value){
    case 1: vid.src = "videos/new.mp4"; loadLinks(2); break;
    case 2: vid.src = "videos/cancel.mp4"; loadLinks(3); break;
    case 3: vid.src = "videos/upgrade.mp4"; secondOption(); break;
    case 4: vid.src = "videos/other.mp4"; loadLinks(1); break;
    case 5: vid.src = "videos/currentuser.mp4"; loadLinks(2); break;
    case 6: vid.src = "videos/newuser.mp4"; loadLinks(2); break;
  }
  vid.play();
}
function loadLinks(value){
  clear();
  link = document.createElement('a')
  link.setAttribute("class", "buttonOption")
  but = document.createElement('button')
  but.setAttribute("class", "subButton")
  switch(value){
    case 1: link.href = "https://www.t-mobile.com/support"; but.textContent = "Support Website"; break;
    case 2: link.href = "https://www.t-mobile.com/offers/deals-hub"; but.textContent = "Deals"; break;
    case 3: link.href = "https://www.t-mobile.com/brand/why-t-mobile"; but.textContent = "Hypothetical Form"; break;
  }
  link.append(but)
  body.append(link)
}

function firstOption(){
  clear();
  for(i = 0; i < 4; i++){
    but = document.createElement('button')
    but.textContent = textOptions[i]
    but.setAttribute("class", "buttonOption")
    but.setAttribute("id", i)
    if(i == 0){but.addEventListener("click", function(){loadMedia(1)})}
    if(i == 1){but.addEventListener("click", function(){loadMedia(2)})}
    if(i == 2){but.addEventListener("click", function(){loadMedia(3)})}
    if(i == 3){but.addEventListener("click", function(){loadMedia(4)})}
    body.append(but)
  }
}

function secondOption(){
  clear();
  for(i = 4; i < 6; i++){
    but = document.createElement('button')
    but.textContent = textOptions[i]
    but.setAttribute("class", "buttonOption")
    but.setAttribute("id", i)
    if(i == 4){but.addEventListener("click", function(){loadMedia(5)})}
    if(i == 5){but.addEventListener("click", function(){loadMedia(6)})}
    body.append(but)
  }
}

function clear(){
  while (body.hasChildNodes()) {
    body.removeChild(body.lastChild);
  }
}
