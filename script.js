var tweets = document.querySelector(".tweets");
var button = document.querySelector(".btn");
var tweetsNumber = document.querySelector(".count-tweets");
var tweetInput = document.querySelector(".tweet-input");
var numberChar = document.querySelector(".numberChar");
var maxChar = 140;
var div;
var paragrafh;
var count = 0;

// FUNÇÃO AO CLICAR NO BOTÃO TWEET
function addTweet(){
  div = document.createElement("div");
  paragrafh = document.createElement("p");
  paragrafh.textContent = tweetInput.value;
  div.prepend(paragrafh);
  tweets.prepend(div);
  div.setAttribute("class","box");
}
button.addEventListener("click",addTweet);

// EVENTO DE BOTÃO
function buttonClick(){
  tweetsNumber.textContent = count += 1;
  button.disabled = true;
  document.querySelector(".tweet-input").value = "";
  maxChar = 140;
  numberChar.textContent = maxChar;
}
button.addEventListener("click",buttonClick);

// CONTADOR DE CARACTERES
function insertChar(event){
  char = event.keyCode;
  if(char !== 8){
    numberChar.textContent = (maxChar -= 1);
    return maxChar;
  } else if (tweetInput.value === ""){
    return maxChar;
  } else {
    numberChar.textContent = (maxChar += 1);
    return maxChar;
  }
}
tweetInput.addEventListener("keydown",insertChar);

// FUNÇÃO DESATIVA/ATIVA BOTÃO TWEET
function disable(){
    if (tweetInput.value !== ""){
      button.removeAttribute("disabled", "false");
    } else if (tweetInput.value === ""){
      button.setAttribute("disabled", "true");
    }
}
setInterval(disable, 1);

// REDIMENSIONAMENTO DA CAIXA DE TWEET
function addEvent(type, el, callback)
{
 if (window.addEventListener) {
     el.addEventListener(type, callback, false);
 } else if (window.attachEvent) {
     el.attachEvent("on" + type, callback);
 } else {
     el["on" + type] = callback;
 }
}

function resizeTextfield(el){
  var timer;
  function trigger() {
    if (!el) {
      return; 
    }
    el.style.height = "auto";
    var height = el.scrollHeight;
    el.style.height = height + "px";
  }
  function exec() {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(trigger, 1);
  }
  addEvent("keyup", el, exec);
  addEvent("input", el, exec);
}
window.onload = function () {
  var els = document.getElementsByClassName("increase");
  for (var i = els.length - 1; i >= 0; i--) {
  resizeTextfield(els[i]);
  }
};
setInterval(resizeTextfield(tweetInput),1);
