var tweets = document.querySelector(".tweets");
var button = document.querySelector(".btn");
var tweetsNumber = document.querySelector(".count-tweets");
var tweetInput = document.querySelector(".tweet-input");
var div;
var count = 0;
function addTweet(){
  div = document.createElement("div");
  div.textContent = tweetInput.value;
  div.setAttribute("class","box");
  tweets.prepend(div);
  document.querySelector(".tweet-input").value = "";
  tweetsNumber.textContent = count += 1;
  button.disabled = true;
}

function disable(){
  button.removeAttribute("disabled");
}
if(tweetInput.value === ""){
  tweetInput.addEventListener("keydown",disable);
}
button.addEventListener("click",addTweet);