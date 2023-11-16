document.getElementById("greeting").addEventListener("click", function () {
    document.getElementById("greeting").innerHTML = "Goodnight!";
});

document.getElementById("greeting").addEventListener("dblclick", function () {
    document.getElementById("greeting").innerHTML = "192.168.1.1";
});

document.getElementById("color").addEventListener("mouseover", function () {
    document.getElementById("color").style.backgroundColor = "red";
    document.getElementById("color").style.height = "640px";
    document.getElementById("color").style.width = "420px";
    document.getElementById("color").style.borderRadius = "76%";
});

document.getElementById("color").addEventListener("mouseout", function () {
  document.getElementById("color").style.backgroundColor = "blue";
  document.getElementById("color").style.height = "69px";
  document.getElementById("color").style.width = "420px";
  document.getElementById("color").style.borderRadius = "0%";
});

document.getElementById()