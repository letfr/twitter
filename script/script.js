// VARIÁVEIS GLOBAIS
var tweets = document.querySelector(".tweets");
var button = document.querySelector(".btn");
var tweetsNumber = document.querySelector(".count-tweets");
var tweetInput = document.querySelector(".tweet-input");
var numberChar = document.querySelector(".numberChar");
var maxChar = 140;
var count = 0;
var valueLength;

// FUNÇÃO AO CLICAR NO BOTÃO TWEET
function addTweet(){
  // criando a div do tweet
  var div = document.createElement("div");
  tweets.prepend(div);
  div.setAttribute("class","box");
  // imagem do perfil
  var newImg = document.createElement("div");
  newImg.setAttribute("class","img-profile");
  div.appendChild(newImg);
  // username
  var h2 = document.createElement("h2");
  h2.textContent = "@letzsays: ";
  div.appendChild(h2);
  // conteúdo inserido no input
  var paragrafh = document.createElement("p");
  paragrafh.textContent = tweetInput.value;
  div.appendChild(paragrafh);
  // data e horário da publicação
  var hour = document.createElement("small");
  hour.textContent = moment().format('Do MMMM YYYY, h:mm a');
  div.appendChild(hour);
}
button.addEventListener("click",addTweet);

// EVENTO DE BOTÃO
function buttonClick(){
  tweetsNumber.textContent = count += 1;
  document.querySelector(".tweet-input").value = "";
  numberChar.textContent = maxChar;
  tweetInput.style.height = "85px";
}
button.addEventListener("click",buttonClick);


// CONTADOR DE CARACTERES
function insertChar(event){
  valueLength = document.querySelector(".tweet-input").value.length;
  if(valueLength){
    numberChar.textContent = maxChar - valueLength;
  } else if (tweetInput.value === ""){
    numberChar.textContent = maxChar;
  }
}
tweetInput.addEventListener("keydown",insertChar);
tweetInput.addEventListener("keyup",insertChar);  
tweetInput.addEventListener("keypress",insertChar);

// CORES DO CONTADOR
function changeColorCount(){
  valueLength = document.querySelector(".tweet-input").value.length;
  if(valueLength >= 120 && valueLength < 130){
    numberChar.style.color = "yellow";
  } else if(valueLength >= 130 && valueLength < 140){
    numberChar.style.color = "red";
  } else if(valueLength > 140){
    numberChar.style.color = "#c1c1c1";
  } else if(valueLength < 120){
    numberChar.style.color = "#1da1f2";
  }
}
setInterval(changeColorCount, 1);

// FUNÇÃO DESATIVA/ATIVA BOTÃO TWEET
function disable(){
  var valueLength = document.querySelector(".tweet-input").value.length;
    if (tweetInput.value !== "" && valueLength <= 140){
      button.removeAttribute("disabled", "false");
    } else if (tweetInput.value === "" || valueLength > 140){
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
