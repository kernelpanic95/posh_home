var input = document.getElementById("search-box");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   var keyword = document.getElementById("search-box").value;
   var searchvalue = keyword.replace(/ /g, "+");
   console.log(searchvalue);
   document.getElementById("search-box").value = "";
   window.location.href = "https://google.com/search?q=" + searchvalue;
  }
});
