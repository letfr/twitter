var tweets = document.querySelector(".tweets");
var button = document.querySelector(".btn");
var tt = document.querySelector(".count-tweets");
var div;
var count = 0;
function addTweet(){
  div = document.createElement("div");
  div.textContent = document.querySelector(".tweet-input").value;
  div.setAttribute("class","box");
  tweets.prepend(div);
  document.querySelector(".tweet-input").value = "";
  tt.textContent = count += 1;
}
button.addEventListener("click",addTweet);