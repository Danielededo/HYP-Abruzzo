var months=["Jan","Feb"];

function myFunction(el,str) {
  var x = document.getElementById(str);
  var y = document.getElementsByClassName("month");
  for (var i = 0; i < months.length; i++) {
    if(document.getElementById(months[i]).style.display==='block'){
      document.getElementById(months[i]).style.display='none';
      y[i].style.textDecoration="none";
    }
  }
  x.style.display='block';
  el.style.textDecoration = "underline";
  document.getElementById("monthClick").textContent=el.textContent;
  document.getElementById("monthClick").style.display='block';
  document.getElementById("bread").style.display='block';
  document.getElementById("crumb").style.display='none';
  console.log(el.textContent);
}
