$(document).ready(function () {
  setFunctions();
});

let setFunctions = () => {
  const btnEdit = $(".edit");
  const btnSave = $(".save");
  const numberChar = $(".numberChar");
  let valueLength;
  const maxChar = 140;

  $(".btn").on("click", addTweet).click( () => buttonClick(maxChar,numberChar));
  $(".tweet-input").bind("keyup keydown keypress", () => insertChar(numberChar, valueLength, maxChar));
  btnEdit.click( () => edit($(".name"), $(".username"), btnSave, btnEdit));
  btnSave.click( () => save($(".name"), $(".username"), btnSave, btnEdit));

  setInterval( () => changeColorCount(numberChar, valueLength, maxChar), 1);
  setInterval(disable, 1);
}

// FUNÇÃO AO CLICAR NO BOTÃO TWEET
var addTweet = () => {
  let elements = `
  <div class="box">
    <div class="img-profile"></div>
    <h2>${$(".username").text()}:</h2>
    <p>${$(".tweet-input").val()}</p>
    <small>${moment().format('LLL')}</small>
  </div>`
  $(".tweets").prepend(elements);
}

// EVENTO DE BOTÃO
let count = 0;
var buttonClick = (maxChar, numberChar) => {
  $(".count-tweets").text(count += 1);
  $(".tweet-input").val("").height("85px");
  numberChar.text(maxChar);
}

// CONTADOR DE CARACTERES
let insertChar = (number, valueLength, maxChar) => {
  valueLength = $(".tweet-input").val().length;
  if (valueLength) {
    number.text(maxChar - valueLength);
  } else if ($(".tweet-input").val() === "") {
    number.text(maxChar);
  }
}

// CORES DO CONTADOR
let changeColorCount = (number, valueLength, maxChar) => {
  valueLength = $(".tweet-input").val().length;
  if (valueLength >= 120 && valueLength < 130) {
    number.css("color","yellow");
  } else if (valueLength >= 130 && valueLength < 140) {
    number.css("color","red");
  } else if (valueLength > 140) {
    number.css("color","#c1c1c1");
  } else if (valueLength < 120) {
    number.css("color","#1da1f2");
  }
}

// FUNÇÃO DESATIVA/ATIVA BOTÃO TWEET
let disable = () => {
  const value = $(".tweet-input").val();
  if (value !== "" && value.length <= 140) {
    $(".btn").removeAttr("disabled");
  } else if (value === "" || value.length > 140) {
    $(".btn").attr("disabled", "true");
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

let edit = (name, user, save, edit) => {
  $(".name").text("");
  $(".username").text("");
  name.append(`<input id="newName" maxlength="14" placeholder="Novo nome"></input>`);
  user.append(`<input id="newUser" maxlength="10" placeholder="Novo usuário"></input>`);
  save.fadeIn();
  edit.fadeOut(1);
}

let save = (name, user, save, edit) => {
  const inputNameValue = $("#newName");
  const inputUserValue = $("#newUser");
  if (inputNameValue.val() !== "") { name.text(inputNameValue.val()); }
  if (inputUserValue.val() !== "") { user.text(`@${inputUserValue.val()}`); }
  inputNameValue.remove();
  inputUserValue.remove();
  save.fadeOut(1);
  edit.fadeIn();
}