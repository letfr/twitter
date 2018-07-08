window.onload = function(){

// VARIÁVEIS GLOBAIS
let tweets = document.querySelector(".tweets");
let button = document.querySelector(".btn");
let tweetsNumber = document.querySelector(".count-tweets");
let tweetInput = document.querySelector(".tweet-input");
let numberChar = document.querySelector(".numberChar");
let maxChar = 140;
let count = 0;
let valueLength;

// FUNÇÃO AO CLICAR NO BOTÃO TWEET
function addTweet(){
  // criando a div do tweet
  let div = document.createElement("div");
  tweets.prepend(div);
  div.setAttribute("class","box");
  // imagem do perfil
  let newImg = document.createElement("div");
  newImg.setAttribute("class","img-profile");
  div.appendChild(newImg);
  // username
  let h2 = document.createElement("h2");
  let user = document.querySelector("h2")
  h2.textContent = user.textContent + ":";
  div.appendChild(h2);
  // conteúdo inserido no input
  let paragraph = document.createElement("p");
  paragraph.textContent = tweetInput.value;
  div.appendChild(paragraph);
  // data e horário da publicação
  let hour = document.createElement("small");
  hour.textContent = moment().format('LLL');
  div.appendChild(hour);

  return div;
}
button.addEventListener("click",addTweet);

// EVENTO DE BOTÃO
function buttonClick(){
  tweetsNumber.textContent = count += 1;
  tweetInput.value = "";
  numberChar.textContent = maxChar;
  tweetInput.style.height = "85px";
}
button.addEventListener("click",buttonClick);

// CONTADOR DE CARACTERES
function insertChar(){
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
  let valueLength = document.querySelector(".tweet-input").value.length;
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
  let timer;
  function trigger() {
    if (!el) {
      return; 
    }
    el.style.height = "auto";
    let height = el.scrollHeight;
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
  let els = document.getElementsByClassName("increase");
  for (let i = els.length - 1; i >= 0; i--) {
  resizeTextfield(els[i]);
  }
};
setInterval(resizeTextfield(tweetInput),1);

// MUDANDO INFORMAÇÕES DO PROFILE
let name = document.querySelector(".name");
let user = document.querySelector(".username");
let btnEdit = document.querySelector(".edit");
let btnSave = document.querySelector(".save");

function edit(){
  let inputName = document.createElement("input");
  let inputUser = document.createElement("input");
  inputName.setAttribute("id","newName");
  inputUser.setAttribute("id","newUser");
  name.appendChild(inputName);
  user.appendChild(inputUser);
  inputName.setAttribute("placeholder","Novo nome");
  inputUser.setAttribute("placeholder","Novo usuário");
  btnSave.style.display = "inline";
  btnEdit.style.display = "none";
}
btnEdit.addEventListener("click",edit);

function save(){
  let inputNameValue = document.getElementById("newName");
  let inputUserValue = document.getElementById("newUser");
  name.removeChild(inputNameValue);
  user.removeChild(inputUserValue);
  if (inputNameValue.value !== ""){ name.textContent = inputNameValue.value; }
  if (inputUserValue.value !== ""){ user.textContent = "@" + inputUserValue.value; }
  btnSave.style.display = "none";
  btnEdit.style.display = "inline";
}
btnSave.addEventListener("click",save);

};