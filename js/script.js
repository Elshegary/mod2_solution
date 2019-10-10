function Hello () {
  var name = document.getElementById("name").value;
  if(name.startsWith("J")||name.startsWith("j")){
  var message = "<h2>Hi " + name + "!</h2>";
  document.getElementById("content").innerHTML = message;
  }
  else{
    var message = "<h2>Hello " + name + "!</h2>";
    document.getElementById("content").innerHTML = message;
  }
}
