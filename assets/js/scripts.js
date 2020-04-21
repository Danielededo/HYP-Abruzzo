var months=["Jan","Feb"];

function myFunctionJan(el) {
  var x = document.getElementById("Jan");
  var y = document.getElementsByClassName("month");
  for (var i = 0; i < 2; i++) {
    if(document.getElementById(months[i]).style.display==='block'){
      document.getElementById(months[i]).style.display='none';
      y[i].style.textDecoration="none"
    }
  }
  x.style.display='block';
  el.style.textDecoration = "underline";
  console.log(el.textContent);
}

function myFunctionFeb(el) {
  var x = document.getElementById("Feb");
  var y = document.getElementsByClassName("month");
  for (var i = 0; i < 2; i++) {
    if(document.getElementById(months[i]).style.display==='block'){
      document.getElementById(months[i]).style.display='none';
      y[i].style.textDecoration="none"
    }
  }
  x.style.display='block';
  el.style.textDecoration = "underline";
}
