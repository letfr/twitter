$(document).ready(function () {
  $(".btn").on("click", addTweet).on("click", buttonClick);
  $(".tweet-input").bind("keyup keydown keypress", insertChar);
  $(".edit").on("click",edit);
  $(".save").on("click",save);

  setInterval(changeColorCount, 1);
  setInterval(disable, 1);
  setInterval(resizeTextfield(tweetInput), 1);
});

// VARIÁVEIS GLOBAIS
let tweets = document.querySelector(".tweets");
let button = document.querySelector(".btn");
let tweetInput = document.querySelector(".tweet-input");
let numberChar = document.querySelector(".numberChar");
const maxChar = 140;
let count = 0;
let valueLength;
// MUDANDO INFORMAÇÕES DO PROFILE
let name = document.querySelector(".name");
let user = document.querySelector(".username");
let btnEdit = document.querySelector(".edit");
let btnSave = document.querySelector(".save");


// FUNÇÃO AO CLICAR NO BOTÃO TWEET
function addTweet() {
  let elements = `
  <div class="box">
    <div class="img-profile"></div>
    <h2>${$("h2").text()}:</h2>
    <p>${$(".tweet-input").val()}</p>
    <small>${moment().format('LLL')}</small>
  </div>`
  $(".tweets").prepend(elements);
}

// EVENTO DE BOTÃO
function buttonClick() {
  $(".count-tweets").text(count += 1);
  $(".tweet-input").val("").height("85px");
  $(".numberChar").text(maxChar);
}

// CONTADOR DE CARACTERES
function insertChar() {
  valueLength = $(".tweet-input").val().length;
  if (valueLength) {
    $(".numberChar").text(maxChar - valueLength);
  } else if ($(".tweet-input").val() === "") {
    $(".numberChar").text(maxChar);
  }
}

// CORES DO CONTADOR
function changeColorCount() {
  valueLength = document.querySelector(".tweet-input").value.length;
  if (valueLength >= 120 && valueLength < 130) {
    numberChar.style.color = "yellow";
  } else if (valueLength >= 130 && valueLength < 140) {
    numberChar.style.color = "red";
  } else if (valueLength > 140) {
    numberChar.style.color = "#c1c1c1";
  } else if (valueLength < 120) {
    numberChar.style.color = "#1da1f2";
  }
}

// FUNÇÃO DESATIVA/ATIVA BOTÃO TWEET
function disable() {
  let valueLength = document.querySelector(".tweet-input").value.length;
  if (tweetInput.value !== "" && valueLength <= 140) {
    button.removeAttribute("disabled", "false");
  } else if (tweetInput.value === "" || valueLength > 140) {
    button.setAttribute("disabled", "true");
  }
}


// REDIMENSIONAMENTO DA CAIXA DE TWEET
function addEvent(type, el, callback) {
  if (window.addEventListener) {
    el.addEventListener(type, callback, false);
  } else if (window.attachEvent) {
    el.attachEvent("on" + type, callback);
  } else {
    el["on" + type] = callback;
  }
}

function resizeTextfield(el) {
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

function edit() {
  let inputName = document.createElement("input");
  let inputUser = document.createElement("input");
  inputName.setAttribute("id", "newName");
  inputUser.setAttribute("id", "newUser");
  name.appendChild(inputName);
  user.appendChild(inputUser);
  inputName.setAttribute("placeholder", "Novo nome");
  inputUser.setAttribute("placeholder", "Novo usuário");
  btnSave.style.display = "inline";
  btnEdit.style.display = "none";
}


function save() {
  let inputNameValue = document.getElementById("newName");
  let inputUserValue = document.getElementById("newUser");
  name.removeChild(inputNameValue);
  user.removeChild(inputUserValue);
  if (inputNameValue.value !== "") { name.textContent = inputNameValue.value; }
  if (inputUserValue.value !== "") { user.textContent = "@" + inputUserValue.value; }
  btnSave.style.display = "none";
  btnEdit.style.display = "inline";
}

