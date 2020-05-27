var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

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

function swapAssociation(el){
  var y = document.getElementsByClassName("association");
  if(el.textContent==="About us"){
    var x = document.getElementById("About");
    document.getElementById("Contacts").style.display="none";
    y[1].style.textDecoration="none";
  }else{
    var x = document.getElementById("Contacts");
  document.getElementById("About").style.display="none";
    y[0].style.textDecoration="none";
  }
  x.style.display="block";
  el.style.textDecoration = "underline";
}

function swapEvent(el){
  var y = document.getElementsByClassName("event");
  if(el.textContent==="Description"){
    var x = document.getElementById("eventDescription");
    document.getElementById("eventInfo").style.display="none";
    y[1].style.textDecoration="none";
  }else{
    var x = document.getElementById("eventInfo");
  document.getElementById("eventDescription").style.display="none";
    y[0].style.textDecoration="none";
  }
  x.style.display="block";
  el.style.textDecoration = "underline";
}

  function swapService(el) {
    var y = document.getElementsByClassName("service");
    if(el.textContent==="Description"){
      var x = document.getElementById("presentation");
      document.getElementById("serviceInfo").style.display="none";
      y[1].style.textDecoration="none";
      document.getElementById("servicePhotos").style.display="none";
      y[2].style.textDecoration="none";
    }else if(el.textContent==="Practical Info"){
      var x = document.getElementById("serviceInfo");
      document.getElementById("servicePhotos").style.display="none";
      y[2].style.textDecoration="none";
      document.getElementById("presentation").style.display="none";
      y[0].style.textDecoration="none";
    }else{
      var x = document.getElementById("servicePhotos");
      document.getElementById("presentation").style.display="none";
      y[0].style.textDecoration="none";
      document.getElementById("serviceInfo").style.display="none";
      y[1].style.textDecoration="none";
    }
    x.style.display="block";
    el.style.textDecoration = "underline";
  }

  function wait2(){
    setTimeout(function(){
      mailReset();
    }, 3000);
  }

  function mailReset(){
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
  }
